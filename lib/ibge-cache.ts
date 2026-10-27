import "server-only";
import { EstadoEconomico } from "@/types/EstadoEconomico";

export async function buscarEconomiaEstados(): Promise<EstadoEconomico[]> {
    "use cache"

    const ano = 2023

    const [respostaEstados, respostaPib, respostaPopulacao] =
        await Promise.all([
            fetch(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
                { cache: "force-cache" }
            ),
            fetch(
                `https://apisidra.ibge.gov.br/values/t/5938/n6/all/v/37/p/${ano}`,
                { cache: "force-cache" }
            ),
            fetch(
                "https://apisidra.ibge.gov.br/values/t/4714/n3/all/v/93/p/2022",
                { cache: "force-cache" }
            ),
        ])

    if (!respostaEstados.ok) {
        throw new Error("Erro ao buscar os estados no IBGE.")
    }

    if (!respostaPib.ok) {
        const erro = await respostaPib.text()
        throw new Error(`Erro no SIDRA (PIB): ${erro}`)
    }

    if (!respostaPopulacao.ok) {
        const erro = await respostaPopulacao.text()
        throw new Error(`Erro no SIDRA (população): ${erro}`)
    }

    const estados = await respostaEstados.json()
    const dadosPib = await respostaPib.json()
    const dadosPopulacao = await respostaPopulacao.json()

    // Soma o PIB dos municípios por estado.
    const pibPorEstado = new Map<string, number>()

    for (const item of dadosPib.slice(1)) {
        const codigoMunicipio = item.D1C
        const valor = Number(item.V)

        if (
            !codigoMunicipio ||
            item.V === ".." ||
            item.V === "..." ||
            !Number.isFinite(valor)
        ) {
            continue
        }

        const codigoEstado = String(codigoMunicipio).slice(0, 2)

        pibPorEstado.set(
            codigoEstado,
            (pibPorEstado.get(codigoEstado) ?? 0) + valor
        )
    }

    // População residente por estado no Censo 2022.
    const populacaoPorEstado = new Map<string, number>()

    for (const item of dadosPopulacao.slice(1)) {
        const codigoEstado = String(item.D1C)
        const valor = Number(item.V)

        if (
            item.V === ".." ||
            item.V === "..." ||
            !Number.isFinite(valor)
        ) {
            continue
        }

        populacaoPorEstado.set(codigoEstado, valor)
    }

    return estados.map(
        (estado: {
            id: number
            nome: string
            regiao: { nome: string }
        }): EstadoEconomico => {
            const codigo = String(estado.id)

            return {
                nome: estado.nome,
                regiao: estado.regiao.nome,
                pib: (pibPorEstado.get(codigo) ?? 0) * 1000,
                populacao: populacaoPorEstado.get(codigo) ?? 0,
                ano,
            }
        }
    )
}