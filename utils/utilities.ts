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