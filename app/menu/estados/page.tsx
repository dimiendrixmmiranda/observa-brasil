import Template from "@/components/template/Template";
import { buscarEconomiaEstados } from "@/lib/ibge-cache";
import { mapearEstadosPorRegiao } from "@/utils/utilities";
import Image from "next/image";
import { FaArrowRight, FaQuoteLeft, FaRegSun } from "react-icons/fa6";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoIosGlobe } from "react-icons/io";
import { IoCalendarNumberOutline, IoLocationOutline } from "react-icons/io5";
import { LuClipboardCheck, LuLeaf } from "react-icons/lu";
import { MdHomeWork } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { RiWindyLine } from "react-icons/ri";
import { TiArrowRight } from "react-icons/ti";

export default async function Page() {
    const estadoEconomico = await buscarEconomiaEstados()
    const dadosPorRegiao = mapearEstadosPorRegiao(estadoEconomico);

    const gerarCardRegiaoDestaque = (icone: React.ReactNode, cor: string, corDaBorda: string, nomeDaRegiao: string, imagem: string, populacao: string, pib: string) => {
        const converterValor = (valor: string): number => {
            const numero = valor
                .replace(/\s/g, "")
                .replace(/milhões|milhão|mi/gi, "")
                .replace(/\./g, "")
                .replace(",", ".")

            const resultado = Number(numero)

            if (!Number.isFinite(resultado)) return 0

            if (/mi|milhão|milhões/i.test(valor)) {
                return resultado * 1_000_000
            }

            return resultado
        }

        const populacaoRegiao = converterValor(populacao)

        const populacaoTotal = dadosPorRegiao.reduce(
            (total, regiao) => total + Number(regiao.populacao),
            0
        )

        const porcentagem = porcentagemPopulacaoRegiaoBrasil(
            populacaoRegiao,
            populacaoTotal
        )
        
        return (
            <li className={`relative border ${corDaBorda} ${cor}/20 p-3 rounded-xl flex flex-col justify-start gap-4 w-fit max-w-[300px] h-[280px] md:mx-auto w-full transition-all duration-200 hover:scale-105`}>
                <div className="flex items-center gap-2">
                    <div className={`rounded-full p-2 w-12 h-12 flex justify-center items-center text-2xl text-white ${cor}`}>
                        {icone}
                    </div>
                    <h2 className="text-2xl font-bold">
                        {nomeDaRegiao}
                    </h2>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold">População</span>
                    <h4 className="text-2xl font-bold">{populacao} Milhões</h4>
                    <p className="text-sm">{porcentagem}% do Brasil</p>
                </div>
                <div className="mt-auto">
                    <span className="font-semibold">PIB per capita</span>
                    <h4 className="text-xl font-bold">R${pib}</h4>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <HiArrowTrendingUp />
                    <span><b>+4,2</b> em relação a 2023</span>
                </div>
                <div className="absolute top-12 right-1 xl:top-28">
                    <div className="relative w-32 h-32 xl:w-22 xl:22 3xl:w-28 3xl:h-28">
                        <Image alt="Mapa da região" src={imagem} fill className="object-contain" />
                    </div>
                </div>
            </li>
        )
    }

    const gerarCardRegiao = (icone: React.ReactNode, cor: string, corDaBorda: string, nomeDaRegiao: string, listaDeEstados: string, imagem: string, corDaFonte: string) => {
        return (
            <li className={`relative border ${corDaBorda} ${cor}/20 p-3 rounded-xl flex flex-col justify-start gap-2 w-fit max-w-[300px] h-[280px] md:mx-auto transition-all duration-200 hover:scale-105`}>
                <div className={`rounded-full p-2 w-12 h-12 flex justify-center items-center text-2xl text-white ${cor}`}>
                    {icone}
                </div>
                <h2 className="text-xl font-bold">
                    {nomeDaRegiao}
                </h2>
                <p className="z-20 text-[14px]">
                    {listaDeEstados}
                </p>
                <button className={`flex items-center gap-2 ${corDaFonte} w-fit transition-all duration-300 hover:bg-zinc-100 px-2 py-1 rounded-lg hover:shadow-[0px_0px_2px_1px_black] cursor-pointer  z-20`}>
                    <p>Ver indicadores</p>
                    <FaArrowRight />
                </button>
                <div className="absolute bottom-1 right-1">
                    <div className="relative w-32 h-32">
                        <Image alt="Mapa da região" src={imagem} fill className="object-contain" />
                    </div>
                </div>
            </li>
        )
    }

    function formatarValor(valor: number): string {
        return new Intl.NumberFormat("pt-BR", {
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(valor);
    }

    const porcentagemPopulacaoRegiaoBrasil = (
        populacaoRegiao: number,
        populacaoBrasil: number
    ): string => {
        if (populacaoBrasil <= 0) return "0%"

        const porcentagem = (populacaoRegiao / populacaoBrasil) * 100

        return porcentagem.toLocaleString("pt-BR", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
        })
    }

    return (
        <Template>
            <section
                className="flex flex-col gap-3 p-4 bg-verde-fundo/30 text-azul-escuro"
            >
                <div className="flex flex-col gap-3 md:p-8 lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 xl:grid-cols-[600px_1fr_350px] max-w-[1600px] mx-auto w-full">
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <div className="bg-verde-claro p-2 rounded-xl w-fit">
                            <p className="font-semibold uppercase text-xs md:text-sm">Estados e Regiões</p>
                        </div>
                        <div className="flex flex-col gap- lg:gap-4">
                            <div className="font-bold md:flex flex-col gap-1">
                                <h2 className="text-3xl md:text-5xl xl:text-6xl">Brasil diverso, realidades <b className="font-bold text-verde-claro">únicas!</b></h2>
                            </div>
                            <p className="2xl:text-lg">
                                O Observa Brasil permite explorar e comparar os dados dos 26 estados e do Distrito Federal, além das 5 grandes regiões do país, revelando as particularidades de cada território e ajudando a entender diferentes realidades do Brasil.
                            </p>
                            <div className="flex items-center gap-2 max-w-[600px]">
                                <input type="search" name="buscar" id="buscar" placeholder="Pesquise um indicador, estado ou tema..." className="p-2 rounded-xl border border-zinc-900 w-full flex-1 bg-white text-black text-sm h-[42px] xl:text-base" />
                                <button className="flex items-center justify-center bg-verde-claro text-white rounded-xl h-[42px] w-[42px] md:w-auto md:px-4">
                                    <p className="font-bold hidden md:block">Explorar</p>
                                    <TiArrowRight className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[250px] h-[280px] hidden lg:block xl:mx-auto 2xl:w-[350px] 2xl:h-[340px]">
                        <Image alt="Mapa do Brasil" src={'/mapa-do-brasil.png'} fill className="object-contain" />
                    </div>
                    <div className="relative hidden xl:block text-azul-escuro bg-verde-claro/10 p-4 rounded-xl">
                        <IoIosGlobe className="text-5xl text-verde" />
                        <h3 className="font-bold text-2xl mt-4">
                            Cada estado tem suas próprias características, desafios e potencialidades.
                        </h3>
                        <h4 className="font-base text-2xl mt-4">
                            Ao analisar os dados por região e estado, criamos um retrato mais completo do Brasil.
                        </h4>
                    </div>
                </div>
            </section>
            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div>
                    <h2 className="font-bold text-2xl">
                        As regiões do Brasil
                    </h2>
                    <p className="text-sm leading-5 text-zinc-600 max-w-[600px]">
                        Conheça as 5 grandes regiões e explore seus estados.
                    </p>
                </div>
                <div>
                    <ul className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {gerarCardRegiao(<LuLeaf />, 'bg-verde', 'border-verde', 'Norte', 'Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantins.', '/regiao/norte.png', 'text-verde')}
                        {gerarCardRegiao(<FaRegSun />, 'bg-blue-600', 'border-blue-600', 'Nordeste', 'Alagoas, Bahia, Ceará, Maranhão, Paraíba, Pernanbuco, Piauí, Rio Grande do Norte e Sergipe', '/regiao/nordeste.png', 'text-blue-600')}
                        {gerarCardRegiao(<PiBagSimpleFill />, 'bg-purple-600', 'border-purple-600', 'Centro Oeste', 'Distrito Federal, Goiás, Mato Grosso e Mato Grosso do Sul', '/regiao/centro-oeste.png', 'text-purple-600')}
                        {gerarCardRegiao(<MdHomeWork />, 'bg-amber-600', 'border-amber-600', 'Sudeste', 'Espírito Santo, Minas Gerais, Rio de Janeiro, São Paulo', '/regiao/sudeste.png', 'text-amber-600')}
                        {gerarCardRegiao(<RiWindyLine />, 'bg-cyan-500', 'border-cyan-500', 'Sul', 'Paraná, Santa Catarina e Rio Grande do Sul.', '/regiao/sul.png', 'text-cyan-500')}
                    </ul>
                </div>
            </section>
            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                    <div>
                        <h2 className="font-bold text-2xl">
                            Destaques por Região
                        </h2>

                        <p className="text-sm leading-5 text-zinc-600">
                            Veja alguns indicadores que mostram as principais características de cada região.
                        </p>
                    </div>

                    <div className="text-zinc-400 flex items-center gap-2 border border-zinc-200 p-2 rounded-xl px-3 w-fit">
                        <IoCalendarNumberOutline className="shrink-0" />
                        <p className="text-sm">
                            Dados mais recentes: 2024
                        </p>
                    </div>
                </div>
                <ul className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {gerarCardRegiaoDestaque(<LuLeaf />, 'bg-verde', 'border-verde', 'Norte', '/regiao/norte.png', formatarValor(dadosPorRegiao[2].populacao), formatarValor(dadosPorRegiao[2].pib))}
                    {gerarCardRegiaoDestaque(<FaRegSun />, 'bg-blue-600', 'border-blue-600', 'Nordeste', '/regiao/nordeste.png', formatarValor(dadosPorRegiao[1].populacao), formatarValor(dadosPorRegiao[1].pib))}
                    {gerarCardRegiaoDestaque(<PiBagSimpleFill />, 'bg-purple-600', 'border-purple-600', 'Centro Oeste', '/regiao/centro-oeste.png', formatarValor(dadosPorRegiao[0].populacao), formatarValor(dadosPorRegiao[0].pib))}
                    {gerarCardRegiaoDestaque(<MdHomeWork />, 'bg-amber-600', 'border-amber-600', 'Sudeste', '/regiao/sudeste.png', formatarValor(dadosPorRegiao[3].populacao), formatarValor(dadosPorRegiao[3].pib))}
                    {gerarCardRegiaoDestaque(<RiWindyLine />, 'bg-cyan-500', 'border-cyan-500', 'Sul', '/regiao/sul.png', formatarValor(dadosPorRegiao[4].populacao), formatarValor(dadosPorRegiao[4].pib))}
                </ul>
            </section>
            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4 xl:grid xl:grid-cols-2">
                <div className="col-span-2">
                    <h2 className="font-bold text-2xl">
                        Comparação entre estados e regiões
                    </h2>
                    <p className="text-sm leading-5 text-zinc-600 max-w-[600px]">
                        Explore e compare os indicadores entre os estados e as regiões do Brasil.
                    </p>
                </div>

                <div className="shadow-[0px_0px_2px_1px_#999] rounded-lg p-4 md:grid md:grid-cols-2">
                    <div className="relative w-[250px] h-[250px] mx-auto md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[280px] xl:h-[280px] xl:my-auto 3xl:w-[310px] 3xl:h-[310px]">
                        <Image alt="Mapa do Brasil" src={'/mapa-do-brasil.png'} fill className="object-contain" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-xl text-azul-escuro">
                                Selecione um indicador
                            </h2>
                            <select name="indice" id="indice" className="rounded-lg shadow-[0px_0px_2px_1px_#999] p-2 text-lg w-full">
                                <option value="">Selecione</option>
                                <option value="">IDH</option>
                                <option value="">População Total</option>
                                <option value="">Espectativa de Vida</option>
                                <option value="">Mortalidade Infantil</option>
                            </select>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-2">
                                <li className="flex justify-between border-b border-zinc-600 pb-1">
                                    <p>Distrito Federal</p>
                                    <span>0,814</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-600 pb-1">
                                    <p>Distrito Federal</p>
                                    <span>0,814</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-600 pb-1">
                                    <p>Distrito Federal</p>
                                    <span>0,814</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-600 pb-1">
                                    <p>Distrito Federal</p>
                                    <span>0,814</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-600 pb-1">
                                    <p>Distrito Federal</p>
                                    <span>0,814</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-600 pb-1">
                                    <p>Distrito Federal</p>
                                    <span>0,814</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="shadow-[0px_0px_2px_1px_#999] rounded-lg p-4 flex flex-col gap-4">
                    <div>
                        <h2 className="font-bold text-2xl">
                            Comparativo entre regiões
                        </h2>
                        <p className="text-sm leading-5 text-zinc-600 max-w-[600px]">
                            Veja como cada região se sai em diferentes indicadores
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                        <button className="px-2 py-1 rounded-2xl border border-zinc-800">
                            <p>População</p>
                        </button>
                        <button className="px-2 py-1 rounded-2xl border border-zinc-800">
                            <p>IDH</p>
                        </button>
                        <button className="px-2 py-1 rounded-2xl border border-zinc-800">
                            <p>PIB per capita</p>
                        </button>
                        <button className="px-2 py-1 rounded-2xl border border-zinc-800">
                            <p>Educação</p>
                        </button>
                    </div>
                    <div>
                        GRAFICO....
                    </div>
                </div>
            </section>
            <section className="bg-verde-claro/20 mx-4 p-4 mb-4 max-w-[1600px] flex flex-col gap-4 xl:grid xl:grid-cols-[400px_1fr] xl:gap-8 xl:mx-auto">
                <div className="grid grid-cols-[60px_1fr] gap-2">
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 text-5xl">
                        <IoLocationOutline />
                    </div>
                    <h2 className="row-start-1 row-end-2 col-start-2 col-end-3 text-xl font-bold leading-6 my-auto">Por que acompanhar por região?</h2>
                    <p className="row-start-2 row-end-3 col-start-1 col-end-3 xl:col-start-2">
                        Os indicadores regionais ajudam a identificar desigualdades, reconhecer potencialidades e direcionar melhor os investimentos e políticas públicas, contribuindo para um desenvolvimento mais equilibrado em todo o país.
                    </p>
                </div>
                <div>
                    <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
                        <li className="p-4 rounded-lg border border-verde duration-300 transition-all hover:scale-105 text-azul-escuro flex flex-col gap-2">
                            <div className="text-verde text-5xl">
                                <LuClipboardCheck />
                            </div>
                            <h2 className="font-bold text-lg">
                                Planejamento
                            </h2>
                            <p>
                                Regional mais eficiente com base em dados.
                            </p>
                        </li>
                        <li className="p-4 rounded-lg border border-verde duration-300 transition-all hover:scale-105 text-azul-escuro flex flex-col gap-2">
                            <div className="text-verde text-5xl">
                                <LuClipboardCheck />
                            </div>
                            <h2 className="font-bold text-lg">
                                Identificação de
                            </h2>
                            <p>
                                Desafios e oportunidades em cada território.
                            </p>
                        </li>
                        <li className="p-4 rounded-lg border border-verde duration-300 transition-all hover:scale-105 text-azul-escuro flex flex-col gap-2">
                            <div className="text-verde text-5xl">
                                <LuClipboardCheck />
                            </div>
                            <h2 className="font-bold text-lg">
                                Acompanhamento
                            </h2>
                            <p>
                                Da evolução de políticas públicas.
                            </p>
                        </li>
                        <li className="p-4 rounded-lg border border-verde duration-300 transition-all hover:scale-105 text-azul-escuro flex flex-col gap-2">
                            <div className="text-verde text-5xl">
                                <LuClipboardCheck />
                            </div>
                            <h2 className="font-bold text-lg">
                                Mais Transparência
                            </h2>
                            <p>
                                E participação social.
                            </p>
                        </li>
                    </ul>
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
