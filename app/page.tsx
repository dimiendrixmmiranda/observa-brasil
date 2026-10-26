import Indicadores from "@/components/indicadores/Indicadores";
import Informacoes from "@/components/informacoes/Informacoes";
import Inicio from "@/components/inicio/Inicio";
import Template from "@/components/template/Template";
import { buscarDesigualdadeBrasil, buscarEconomiaEstados, buscarEducacao, buscarEducacaoBrasil, buscarEmpregoBrasil, buscarEscolarizacao, buscarEstados, buscarExpectativaVidaBrasil } from "@/lib/ibge";
import { buscarPopulacaoBrasil } from "@/lib/ibge";

export default async function Home() {
    const populacaoDoBrasil = await buscarPopulacaoBrasil()
    const populacaoEmpregada = await buscarEmpregoBrasil()
    const expectativaDeVida = await buscarExpectativaVidaBrasil()
    const indiceDesigualdade = await buscarDesigualdadeBrasil()
    const indiceMatriculasEnsinoFundamental = await buscarEducacaoBrasil()
    const estadoEconomico = await buscarEconomiaEstados()
    console.log(estadoEconomico)
    return (
        <Template>
            <Inicio />
            <div className="max-w-[2000px] mx-auto">
                <Informacoes populacaoDoBrasil={populacaoDoBrasil} taxaEmprego={populacaoEmpregada} espectativaDeVida={expectativaDeVida} desigualdade={indiceDesigualdade} indiceMatriculasEnsinoFundamental={indiceMatriculasEnsinoFundamental}/>
                <Indicadores />
            </div>
        </Template>
    )
}
