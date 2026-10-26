import Template from "@/components/template/Template";
import { buscarDesigualdadeBrasil, buscarDesmatamentoBrasil, buscarEmpregoBrasil, buscarExpectativaVidaBrasil, buscarPopulacaoBrasil } from "@/lib/ibge";
import { calcularVariacaoDesmatamento } from "@/utils/utilities";
import Image from "next/image";
import { FaArrowDown, FaArrowRight, FaArrowTrendUp, FaQuoteLeft, FaUsers } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineMonitor, MdOutlineShield } from "react-icons/md";
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
import { TiArrowRight } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";

export default async function Page() {

    const populacaoDoBrasil = await buscarPopulacaoBrasil()
    const populacaoEmpregada = await buscarEmpregoBrasil()
    const desmatamento = await buscarDesmatamentoBrasil()
    const indiceDesigualdade = await buscarDesigualdadeBrasil()

    const desmatamentoAtual = desmatamento[1]
    const desmatamentoAnterior = desmatamento[0]

    const variacaoDesmatamento = calcularVariacaoDesmatamento(
        desmatamentoAtual,
        desmatamentoAnterior
    )

    const areaDesmatada = Number(
        desmatamentoAtual.areaDesmatada
    ).toLocaleString("pt-BR")

    const textoDesmatamento = `${areaDesmatada} km²`

    function renderInfoCard(
        cor: string,
        borda: string,
        icone: React.ReactNode,
        titulo: string,
        descricao: string
    ) {
        return (
            <li className={`grid grid-cols-[50px_1fr] border-1 ${borda} p-2 rounded-xl gap-3 ${cor}/10 max-w-[500px] text-zinc-700 mx-auto w-full`}>
                <div className={`my-auto rounded-full p-2 border ${borda} w-[50px] h-[50px] flex justify-center items-center ${cor} text-white text-2xl`}>
                    {icone}
                </div>

                <div className="max-w-[350px]">
                    <h3 className="font-bold text-xl">{titulo}</h3>
                    <p>{descricao}</p>
                </div>
            </li>
        );
    }

    function renderFuncionamentoCard(
        cor: string,
        icone: React.ReactNode,
        titulo: string,
        descricao: string
    ) {
        return (
            <li className={`grid grid-cols-[50px_1fr] p-2 rounded-xl gap-3 max-w-[500px] text-zinc-700 mx-auto w-full shadow-[0px_0px_2px_1px_black]`}>
                <div className={`my-auto rounded-full p-2 ${cor} w-[50px] h-[50px] flex justify-center items-center text-white text-2xl shadow-[0px_0px_2px_1px_black]`}>
                    {icone}
                </div>

                <div className="max-w-[350px]">
                    <h3 className="font-bold text-xl">{titulo}</h3>
                    <p className="line-clamp-2">{descricao}</p>
                </div>
            </li>
        );
    }

    const gerarBalao = (posicao: string, icone: React.ReactNode, titulo: string, dado: string, complemento?: string) => {
        return (
            <div
                className={`bg-zinc-100 absolute flex items-center gap-4 p-2 rounded-xl shadow-[0px_0px_2px_1px_black] text-azul-escuro ${posicao}`}
            >
                <div className="text-4xl text-blue-800">
                    {icone}
                </div>
                <div className="text-blue-950 flex flex-col">
                    <p className="text-sm leading-4 font-semibold">{titulo}</p>
                    <h3 className="font-black text-lg">{dado}</h3>
                    <span className="text-xs">{complemento}</span>
                </div>
            </div>
        )
    }

    return (
        <Template>
            <section className="bg-verde-fundo/30">
                <div className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-3 md:p-8 md:grid md:grid-cols-[1fr_260px] lg:grid lg:grid-cols-[600px_1fr] lg:gap-10 max-w-[1500px] mx-auto w-full">
                        <div className="flex flex-col gap-3 lg:gap-4">
                            <div className="bg-verde-claro p-2 rounded-xl w-fit text-white">
                                <p className="font-semibold uppercase text-xs md:text-sm">Plataforma de indicadores sociais</p>
                            </div>
                            <div className="flex flex-col gap-3 text-blue-950 lg:gap-4">
                                <div className="font-bold md:flex flex-col gap-1">
                                    <h2 className="text-3xl md:text-5xl xl:text-6xl">Observa <b className="font-bold text-verde-claro">Brasil</b></h2>
                                    <h4 className="md:text-xl xl:text-2xl">Dados, contexto e cidadania para um Brasil mais informado</h4>
                                </div>
                                <p className="2xl:text-lg">
                                    Aqui voce encontra indicadores sociais, compara regiões, explora dados e descobre seus direitos. Porque entender o Brasil é o primeiro passo para transformar a realidade.
                                </p>
                            </div>
                        </div>
                        <div className="relative w-full h-full">
                            <div className="relative w-[250px] h-[280px] mx-auto xl:mx-auto 2xl:w-[350px] 2xl:h-[340px]">
                                <Image alt="Mapa do Brasil" src={'/mapa-do-brasil.png'} fill className="object-contain" />
                            </div>
                            <ul className="hidden xl:block">
                                {gerarBalao("left-[-40px] top-[0px] 2xl:left-[0px]", <FaUsers />, 'População', `${(Number(populacaoDoBrasil[1].populacao) / 1_000_000).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1, })} milhões`, `população relativa a ${populacaoDoBrasil[1].ano}`)}
                                {gerarBalao("left-[-10px] top-[145px] 2xl:left-[50px] 2xl:top-[180px]", <VscGraph />, 'Educação', 'n/a')}
                                {gerarBalao("right-[0px] top-[0px] 2xl:right-[40px]", <LuLeaf />, "Meio Ambiente", textoDesmatamento, "Área de desmatamento")}
                                {gerarBalao("right-[0px] top-[200px]", <FaArrowTrendUp />, 'Desigualdade', `${indiceDesigualdade[1].indiceGini}%`, 'de desigualdade')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div>
                    <h2 className="font-bold text-2xl">
                        Por que o Observa Brasil existe?
                    </h2>

                    <p className="text-sm leading-5 text-zinc-600 max-w-[600px]">
                        Acreditamos que os dados bem organizados e acessiveis podem gerar uma sociedade mais informada, justa e participativa. Por isso, o Observa Brasil existe para
                    </p>
                </div>
                <div>
                    <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4">
                        {renderInfoCard(
                            "bg-verde",
                            "border-verde-claro",
                            <MdOutlineMonitor />,
                            "Informação Acessível",
                            "Transformamos dados complexos em informações claras e fáceis de entender."
                        )}
                        {renderInfoCard(
                            "bg-blue-500",
                            "border-blue-700",
                            <MdOutlineShield />,
                            "Dados Confiáveis",
                            "Utilizamos fontes oficiais para garantir dados confiáveis e atualizados."
                        )}

                        {renderInfoCard(
                            "bg-purple-500",
                            "border-purple-700",
                            <FaUsers />,
                            "Cidadania Ativa",
                            "O conhecimento ajuda na participação social e no exercício dos direitos."
                        )}
                    </ul>
                </div>
            </section>
            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div>
                    <h2 className="font-bold text-2xl">
                        Como funciona?
                    </h2>

                    <p className="text-sm leading-5 text-zinc-600 max-w-[600px]">
                        O Observa Brasil é simples de usar. Em poucos passos, voce encontra, analisa e compreende os dados do Brasil.
                    </p>
                </div>
                <div>
                    <ul className="lg:grid lg:grid-cols-[auto_60px_auto_60px_auto] lg:gap-4">
                        {renderFuncionamentoCard(
                            "bg-verde",
                            <TbNumber1 />,
                            "Explore os indicadores",
                            "Acesse dados sobre população, educação, saúde, economia, meio ambiente e muito mais"
                        )}
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center mx-auto my-auto text-2xl text-verde">
                            <FaArrowRight className="hidden lg:block" />
                            <FaArrowDown className="block lg:hidden" />
                        </div>
                        {renderFuncionamentoCard(
                            "bg-cyan-600",
                            <TbNumber2 />,
                            "Compare realidades",
                            "Veja como os indicadores se comportam entre estados regiões e ao longo do tempo."
                        )}
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center mx-auto my-auto text-2xl text-verde">
                            <FaArrowRight className="hidden lg:block" />
                            <FaArrowDown className="block lg:hidden" />
                        </div>
                        {renderFuncionamentoCard(
                            "bg-purple-500",
                            <TbNumber3 />,
                            "Compreenda o contexto",
                            "Transforme os números em conhecimento e entenda os desafios e as oportunidades do Brasil."
                        )}
                    </ul>
                </div>
            </section>
            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div>
                    <h2 className="font-bold text-2xl">
                        Nossas fontes
                    </h2>

                    <p className="text-sm leading-5 text-zinc-600 max-w-[600px]">
                        Os dados do Observa Brasil são provenientes de fontes oficiais e reconhecidas:
                    </p>
                </div>
                <div className="flex flex-col items-center gap-8 xl:flex-row">
                    <ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
                        <li className="flex items-center gap-4 border border-blue-800 px-2 rounded-lg">
                            <div className="relative w-20 h-10">
                                <Image alt="IBGE" src={'/ibge.png'} fill className="object-contain" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold max-w-[90%]">Instituto Brasileiro de Geografia e Estatística</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 border border-blue-800 px-2 rounded-lg">
                            <div className="relative w-20 h-10">
                                <Image alt="Sidra" src={'/sidra.png'} fill className="object-contain" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold max-w-[90%]">Sistema IBGE de Recuperação Automática de Dados</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 border border-blue-800 px-2 rounded-lg">
                            <div className="relative w-20 h-10">
                                <Image alt="Sidra" src={'/dados.png'} fill className="object-contain" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold max-w-[90%]">Outros orgãos e bases de dados governamentais.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 xl:border-l xl:border-blue-950 xl:pl-8">
                        <div className="text-3xl font-bold">
                            <IoIosInformationCircleOutline />
                        </div>
                        <div>
                            <p className="leading-5">
                                As datas e as fontes de cada indicador são exibidas junto aos dados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden p-4 bg-verde-claro/20 flex gap-4">
                <div className="absolute -right-4 bottom-0 w-[300px] h-30 opacity-60 pointer-events-none hidden lg:block xl:w-[400px]">
                    <Image alt="" src="/linhas.png" fill className="object-contain object-right" />
                </div>
                <div className="bg-verde/40 rounded-full w-20 h-20 flex justify-center items-center">
                    <div className="relative w-16 h-16 md:row-span-2">
                        <Image alt="Mapa do Brasil em verde" src="/mapa-do-brasil-verde.png" fill className="object-contain" />
                    </div>
                </div>
                <div className="flex flex-col my-auto">
                    <h3 className="relative font-black text-2xl text-verde-escuro">
                        Juntos por um Brasil melhor
                    </h3>
                    <span className="relative col-span-2 md:col-span-1 md:col-start-2 md:col-end-3 md:text-lg">
                        Dados são poder. Use a informação para compreender, participar e transformar!
                    </span>
                </div>
            </section>
        </Template>
    )
}