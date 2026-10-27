import { EstadoEconomico } from "@/types/EstadoEconomico"

const IBGE_URL =
    "https://servicodados.ibge.gov.br/api/v1/localidades"

export async function buscarEstados() {
    const resposta = await fetch(`${IBGE_URL}/estados`, {
        next: {
            revalidate: 86400,
        },
    })

    if (!resposta.ok) {
        throw new Error("Erro ao consultar a API do IBGE")
    }

    const estados = await resposta.json()

    return estados.sort(
        (a: { nome: string }, b: { nome: string }) =>
            a.nome.localeCompare(b.nome, "pt-BR")
    )
}

export async function buscarEducacao() {
    const url =
        "https://apisidra.ibge.gov.br/values/t/7113/n1/1/v/10267/p/2024/c2/6794/c58/2795";

    const resposta = await fetch(url, {
        cache: "force-cache",
    });

    if (!resposta.ok) {
        throw new Error(`Erro no SIDRA: ${resposta.status}`);
    }

    const dados = await resposta.json();
    const item = dados[1];

    return {
        periodo: item.D2N,
        indicador: item.D3N,
        valor: item.V,
    };
}



export async function buscarEscolarizacao() {
    const url =
        "https://apisidra.ibge.gov.br/values/t/7138/n1/1/v/10276/p/2025";

    const resposta = await fetch(url, {
        cache: "no-store",
    });

    if (!resposta.ok) {
        throw new Error(`Erro no SIDRA: ${resposta.status}`);
    }

    const dados = await resposta.json();

    return dados;
}


// Aqui
export async function buscarPopulacaoBrasil() {
    const url =
        "https://apisidra.ibge.gov.br/values/t/6579/n1/1/v/9324/p/2025-2026";

    const resposta = await fetch(url, {
        cache: "force-cache",
    });

    if (!resposta.ok) {
        throw new Error(`Erro no SIDRA: ${resposta.status}`);
    }

    const dados = await resposta.json();

    return dados.slice(1).map((item: Record<string, string>) => ({
        ano: item.D3N,
        populacao: item.V,
    }));
}

export async function buscarEmpregoBrasil() {
    const url =
        "https://apisidra.ibge.gov.br/values/t/4363/n1/1/v/4097/p/2024-2025";

    const resposta = await fetch(url, {
        cache: "force-cache",
    });
    if (!resposta.ok) {
        throw new Error(`Erro no SIDRA: ${resposta.status}`);
    }
    const dados = await resposta.json();
    return dados.slice(1).map((item: Record<string, string>) => ({
        ano: item.D3N,
        emprego: item.V,
    }));
}

export async function buscarExpectativaVidaBrasil() {
    return [
        {
            ano: "2023",
            expectativaVida: "76.4",
        },
        {
            ano: "2024",
            expectativaVida: "76.6",
        },
    ];
}

export async function buscarDesigualdadeBrasil() {
    const url =
        "https://apisidra.ibge.gov.br/values/t/7435/n1/1/v/10681/p/2024-2025";

    const resposta = await fetch(url, {
        cache: "force-cache",
    });

    if (!resposta.ok) {
        throw new Error(`Erro no SIDRA: ${resposta.status}`);
    }

    const dados = await resposta.json();

    return dados.slice(1).map((item: Record<string, string>) => ({
        ano: item.D3N,
        indiceGini: item.V,
    }));
}

export async function buscarDesmatamentoBrasil() {
    return [
        {
            ano: "2024",
            areaDesmatada: "6518",
        },
        {
            ano: "2025",
            areaDesmatada: "5731",
        },
    ];
}

// Busca a taxa de escolarização de pessoas de 6 a 14 anos
export async function buscarEducacaoBrasil() {
    const url =
        "https://apisidra.ibge.gov.br/values/t/7138/n1/1/v/10276/p/2024-2025";

    const resposta = await fetch(url, {
        cache: "force-cache",
    });

    if (!resposta.ok) {
        throw new Error(`Erro no SIDRA: ${resposta.status}`);
    }

    const dados = await resposta.json();

    return dados.slice(1).map((item: Record<string, string>) => ({
        ano: item.D3N,
        escolarizacao: item.V,
    }));
}

