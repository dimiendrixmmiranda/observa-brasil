import { Desigualdade } from "@/types/Desigualdade"
import { ExpectativaDeVida } from "@/types/ExpectativaDeVida"
import { PopulacaoDoBrasil } from "@/types/PopulacaoBrasil"
import { TaxaEmprego } from "@/types/TaxaEmprego"

export const calcularVariacaoPopulacao = (
    anoAtual: PopulacaoDoBrasil,
    anoAnterior: PopulacaoDoBrasil
): number => {
    if (!anoAtual || !anoAnterior) {
        throw new Error("Não foi possível encontrar as populações.")
    }

    const populacaoAtual = Number(anoAtual.populacao)
    const populacaoAnterior = Number(anoAnterior.populacao)

    return (
        ((populacaoAtual - populacaoAnterior) / populacaoAnterior) * 100
    )
}
export const calcularVariacaoTaxaDeEmprego = (
    anoAtual: TaxaEmprego,
    anoAnterior: TaxaEmprego
): number => {
    if (!anoAtual || !anoAnterior) {
        throw new Error("Não foi possível encontrar as populações.")
    }

    const taxaAnoAtual = Number(anoAtual.emprego)
    const taxaAnoAnterior = Number(anoAnterior.emprego)

    return (
        taxaAnoAtual - taxaAnoAnterior
    )
}
export const calcularVariacaoExpectativaDeVida = (
    anoAtual: ExpectativaDeVida,
    anoAnterior: ExpectativaDeVida
): number => {
    if (!anoAtual || !anoAnterior) {
        throw new Error("Não foi possível encontrar as populações.")
    }

    const taxaAnoAtual = Number(anoAtual.expectativaVida)
    const taxaAnoAnterior = Number(anoAnterior.expectativaVida)

    return (
        taxaAnoAtual - taxaAnoAnterior
    )
}
export const calcularVariacaoIndiceDesigualdade = (
    anoAtual: Desigualdade,
    anoAnterior: Desigualdade
): number => {
    if (!anoAtual || !anoAnterior) {
        throw new Error("Não foi possível encontrar os índices de desigualdade.")
    }

    const taxaAnoAtual = Number(anoAtual.indiceGini)
    const taxaAnoAnterior = Number(anoAnterior.indiceGini)

    return Number((taxaAnoAtual - taxaAnoAnterior).toFixed(3))
}

type Desmatamento = {
    ano: string;
    areaDesmatada: string;
};

export const calcularVariacaoDesmatamento = (
    anoAtual: Desmatamento,
    anoAnterior: Desmatamento
): number => {
    if (!anoAtual || !anoAnterior) {
        throw new Error("Não foi possível encontrar os dados de desmatamento.");
    }

    const atual = Number(anoAtual.areaDesmatada);
    const anterior = Number(anoAnterior.areaDesmatada);

    return Number((((atual - anterior) / anterior) * 100).toFixed(2));
}
export type Educacao = {
    ano: string
    escolarizacao: string
}
export const calcularVariacaoEducacao = (
    anoAtual: Educacao,
    anoAnterior: Educacao
): number => {
    if (!anoAtual || !anoAnterior) {
        throw new Error("Não foi possível encontrar os dados de educação.")
    }

    const taxaAnoAtual = Number(anoAtual.escolarizacao)
    const taxaAnoAnterior = Number(anoAnterior.escolarizacao)

    return Number((taxaAnoAtual - taxaAnoAnterior).toFixed(1))
}


import { EstadoEconomico } from "@/types/EstadoEconomico";

export type RegiaoEconomica = {
    regiao: string;
    pib: number;
    populacao: number;
    estados: number;
    ano: number;
};

export function mapearEstadosPorRegiao(
    estados: EstadoEconomico[]
): RegiaoEconomica[] {
    const regioes = new Map<string, RegiaoEconomica>();

    for (const estado of estados) {
        const regiaoExistente = regioes.get(estado.regiao);

        if (regiaoExistente) {
            regiaoExistente.pib += estado.pib;
            regiaoExistente.populacao += estado.populacao;
            regiaoExistente.estados += 1;
        } else {
            regioes.set(estado.regiao, {
                regiao: estado.regiao,
                pib: estado.pib,
                populacao: estado.populacao,
                estados: 1,
                ano: estado.ano,
            });
        }
    }

    return Array.from(regioes.values()).sort((a, b) =>
        a.regiao.localeCompare(b.regiao, "pt-BR")
    );
}