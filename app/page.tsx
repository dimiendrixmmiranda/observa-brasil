import { Suspense } from "react";
import Informacoes from "@/components/informacoes/Informacoes";
import Inicio from "@/components/inicio/Inicio";
import Indicadores from "@/components/indicadores/Indicadores";
import Template from "@/components/template/Template";
import {
    buscarDesigualdadeBrasil,
    buscarEducacaoBrasil,
    buscarEmpregoBrasil,
    buscarExpectativaVidaBrasil,
    buscarPopulacaoBrasil,
} from "@/lib/ibge";

async function DadosHome() {
    const [
        populacaoDoBrasil,
        populacaoEmpregada,
        expectativaDeVida,
        indiceDesigualdade,
        indiceMatriculasEnsinoFundamental,
    ] = await Promise.all([
        buscarPopulacaoBrasil(),
        buscarEmpregoBrasil(),
        buscarExpectativaVidaBrasil(),
        buscarDesigualdadeBrasil(),
        buscarEducacaoBrasil(),
    ])

    return (
        <div className="max-w-[2000px] mx-auto">
            <Informacoes
                populacaoDoBrasil={populacaoDoBrasil}
                taxaEmprego={populacaoEmpregada}
                espectativaDeVida={expectativaDeVida}
                desigualdade={indiceDesigualdade}
                indiceMatriculasEnsinoFundamental={
                    indiceMatriculasEnsinoFundamental
                }
            />
            <Indicadores />
        </div>
    )
}

export default function Home() {
    return (
        <Template>
            <Inicio />

            <Suspense
                fallback={
                    <div className="max-w-[2000px] mx-auto p-6">
                        Carregando indicadores do Brasil...
                    </div>
                }
            >
                <DadosHome />
            </Suspense>
        </Template>
    );
}