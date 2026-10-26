import Template from "@/components/template/Template";
import Image from "next/image";
import { BsBriefcase, BsMortarboard, BsSuitcaseLg } from "react-icons/bs";
import { FaArrowRight, FaArrowTrendUp, FaQuoteLeft, FaRegHeart, FaUsers } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { IoCalendarNumberOutline, IoLeafOutline } from "react-icons/io5";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineHouse } from "react-icons/md";
import { PiScalesDuotone } from "react-icons/pi";
import { RiFileListFill } from "react-icons/ri";

type CoresCard = {
    fundo: string
    borda: string
    icone: string
}

export default function Page() {

    const gerarCardIndicador = (
        icone: React.ReactNode,
        cor: string,
        corFundo: string,
        corDaBorda: string,
        titulo: string,
        descricao: string,
        corDaFonteBotao: string
    ) => {
        return (
            <li className={`${corFundo} border ${corDaBorda} p-4 rounded-xl max-w-[300px] mx-auto flex flex-col gap-2 hover:scale-105 duration-300 transition-all`}>
                <div className={`${cor} p-2 rounded-full w-[60px] h-[60px] flex justify-center items-center text-3xl text-white`}>
                    {icone}
                </div>

                <h2 className="text-azul-escuro font-bold text-[22px]">
                    {titulo}
                </h2>

                <p className="text-azul-escuro/90 text-lg">
                    {descricao}
                </p>

                <button className={`${corDaFonteBotao} flex items-center gap-2 text-lg font-bold mt-auto cursor-pointer`}>
                    <p>Ver Mais</p>
                    <FaArrowRight />
                </button>
            </li>
        )
    }

    const gerarCardIndicadorSocial = (
        icone: React.ReactNode,
        cores: CoresCard,
        titulo: string,
        valor: string,
        descricao: string,
        variacao: string,
        periodo: string
    ) => {
        return (
            <li
                className={`${cores.fundo} border ${cores.borda} p-5 rounded-xl flex flex-col gap-3 hover:scale-105 duration-300 transition-all`}
            >
                <div
                    className={`rounded-full p-3 text-2xl flex justify-center items-center w-[56px] h-[56px] text-white ${cores.icone}`}
                >
                    {icone}
                </div>

                <h3 className="font-bold text-lg text-azul-escuro leading-tight">
                    {titulo}
                </h3>

                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl font-bold text-azul-escuro">
                        {valor}
                    </h2>

                    <p className="text-sm text-azul-escuro/80">
                        {descricao}
                    </p>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-verde 2xl:mt-auto">
                    <FaArrowTrendUp className="shrink-0" />

                    <span className="2xl:text-xs">
                        {variacao} em relação a {periodo}
                    </span>
                </div>
            </li>
        );
    };

    return (
        <Template>
            <section className="flex flex-col gap-3 p-4 bg-cover bg-center bg-no-repeat bg-verde-fundo/40">
                <div className="flex flex-col gap-3 md:p-8 lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 xl:grid-cols-[600px_1fr_300px] max-w-[1500px] mx-auto w-full">
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <div className="bg-verde p-2 rounded-xl w-fit text-white">
                            <p className="font-semibold uppercase text-xs md:text-sm">Direitos e Cidadania</p>
                        </div>
                        <div className="flex flex-col gap-3 text-azul-escuro lg:gap-4">
                            <div className="font-bold md:flex flex-col gap-1">
                                <h2 className="text-3xl md:text-4xl xl:text-5xl">Direitos que constroem uma sociedade mais <b className="font-bold text-verde-claro">mais justa</b></h2>
                            </div>
                            <p className="2xl:text-lg">
                                O Observa Brasil reúne dados sobre educação, saúde, moradia, trabalho, segurança, meio ambiente e acessoa justiça, mostrando como esses direitos influenciam a qualidade de vida da população brasileira.
                            </p>
                            <p className="2xl:text-lg">
                                Informação de qualidade é o primeiro passo para garantir cidadania e reduzir desigualdadades.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-[250px] h-[280px] hidden lg:block xl:mx-auto 2xl:w-[350px] 2xl:h-[340px]">
                        <Image alt="Mapa do Brasil" src={'/mapa-do-brasil.png'} fill className="object-contain" />
                    </div>
                    <div className="relative hidden xl:block">
                        <h3 className="font-bold text-3xl text-azul-escuro mt-4">
                            Cidadania é o direito de participar, de ser ouvido e de ter acesso aos seus direitos.
                        </h3>
                        <div className="h-1 w-26 bg-verde-claro mt-3" />
                        <div className="absolute top-1 -left-8 text-2xl text-verde-claro">
                            <FaQuoteLeft />
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div>
                    <h2 className="font-bold text-2xl">
                        Os principais direitos e indicadores
                    </h2>
                    <p className="text-sm leading-5 text-zinc-600 max-w-[600px] bg-orag">
                        Acompanhe dados que mostram como está o acesso da população brasileira a direitos fundamentais.
                    </p>
                </div>
                <div>
                    <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                        {gerarCardIndicador(
                            <BsMortarboard />,
                            "bg-verde",
                            "bg-verde/10",
                            "border-verde-500",
                            "Educação",
                            "Acesso, permanência e qualidade da educação em todos os níveis.",
                            "text-verde"
                        )}

                        {gerarCardIndicador(
                            <FaRegHeart />,
                            "bg-red-600",
                            "bg-red-600/10",
                            "border-red-600",
                            "Saúde",
                            "Cobertura dos serviços de saúde, expectativa de vida e bem-estar.",
                            "text-red-600"
                        )}

                        {gerarCardIndicador(
                            <BsBriefcase />,
                            "bg-purple-600",
                            "bg-purple-600/10",
                            "border-purple-500",
                            "Trabalho e Renda",
                            "Emprego, informalidade, renda e condições do mercado de trabalho.",
                            "text-purple-500"
                        )}

                        {gerarCardIndicador(
                            <MdOutlineHouse />,
                            "bg-orange-600",
                            "bg-orange-600/10",
                            "border-orange-500",
                            "Moradia",
                            "Acesso à moradia digna, saneamento e condições de habitação.",
                            "text-orange-500"
                        )}

                        {gerarCardIndicador(
                            <LuLeaf />,
                            "bg-verde-escuro",
                            "bg-verde-escuro/10",
                            "border-verde-escuro",
                            "Meio Ambiente",
                            "Preservação ambiental e sustentabilidade para as futuras gerações.",
                            "text-verde-escuro"
                        )}

                        {gerarCardIndicador(
                            <PiScalesDuotone />,
                            "bg-amber-400",
                            "bg-amber-400/10",
                            "border-amber-400",
                            "Segurança e Justiça",
                            "Redução da violência, acesso à justiça e respeito aos direitos humanos.",
                            "text-amber-500"
                        )}
                    </ul>
                </div>
            </section>

            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                    <div>
                        <h2 className="font-bold text-2xl">
                            Panorama do Brasil
                        </h2>

                        <p className="text-sm leading-5 text-zinc-600">
                            Confira alguns dos principais indicadores sociais do país
                        </p>
                    </div>

                    <div className="text-zinc-400 flex items-center gap-2 border border-zinc-200 p-2 rounded-xl px-3 w-fit">
                        <IoCalendarNumberOutline className="shrink-0" />

                        <p className="text-sm">
                            Dados mais recentes: 2024
                        </p>
                    </div>
                </div>
                <ul className="">
                    <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
                        {gerarCardIndicadorSocial(
                            <BsMortarboard />,
                            {
                                fundo: "bg-verde-claro/10",
                                borda: "border-verde-claro/30",
                                icone: "bg-verde",
                            },
                            "Taxa de escolarização (6 a 14 anos)",
                            "99,5%",
                            "da população nessa faixa etária",
                            "+0,3%",
                            "2023"
                        )}
                        {gerarCardIndicadorSocial(
                            <BsMortarboard />,
                            {
                                fundo: "bg-red-500/10",
                                borda: "border-red-500/30",
                                icone: "bg-red-500",
                            },
                            "Cobertura vacinal (crianças)",
                            "92,4%",
                            "com esquema completo",
                            "+1,8 em relação",
                            "2023"
                        )}
                        {gerarCardIndicadorSocial(
                            <BsMortarboard />,
                            {
                                fundo: "bg-purple-500/10",
                                borda: "border-purple-500/30",
                                icone: "bg-purple-500",
                            },
                            "Taxa de ocupação",
                            "57,3%",
                            "da população em idade ativa",
                            "+2,1 em relação",
                            "2023"
                        )}
                        {gerarCardIndicadorSocial(
                            <BsMortarboard />,
                            {
                                fundo: "bg-orange-500/10",
                                borda: "border-orange-500/30",
                                icone: "bg-orange-500",
                            },
                            "Domicílios com saneamento adequado",
                            "83,7%",
                            "do total de domicílios",
                            "+1,2 em relação",
                            "2023"
                        )}
                        {gerarCardIndicadorSocial(
                            <BsMortarboard />,
                            {
                                fundo: "bg-amber-400/10",
                                borda: "border-amber-400/30",
                                icone: "bg-amber-400",
                            },
                            "Taxa de homicídios",
                            "21,2",
                            "por 100 mil habitantes",
                            "-3,6 em relação",
                            "2023"
                        )}
                    </ul>
                </ul>
            </section>

            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_500px] xl:gap-8 2xl:grid-cols-[1fr_700px]">
                <div>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                        <div>
                            <h2 className="font-bold text-2xl">
                                Como os direitos se conectam
                            </h2>

                            <p className="text-sm leading-5 text-zinc-600">
                                Os indicadores de direitos e cidadania estao interligados. Veja como cada um deles contribui para o desenvolvimento do país.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[500px] md:w-[700px] lg:w-[600px] lg:h-[400px] md:mx-auto 2xl:w-[800px] 2xl:h-[500px]">
                        <Image alt="Direitos" src={'/direitos.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="bg-verde-claro/10 text-azul-escuro p-2 rounded-xl h-fit flex flex-col gap-4 text-azul-escuro xl:p-4 2xl:mx-auto 2xl:my-auto">
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                        <div>
                            <h2 className="font-bold text-2xl">
                                Porque acompanhar esses dados?
                            </h2>

                            <p className="text-sm leading-5 text-zinc-600">
                                Os dados de direitos e cidadania ajudam a identificar avanços, desafios e desigualdades, orientando políticas públicas mais eficientes e garantindo que o desenvolvimento do país chegue a todas as pessoas.
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4 border border-verde p-2 rounded-lg 2xl:p-3">
                                <div className="text-5xl text-verde">
                                    <HiUserGroup />
                                </div>
                                <div>
                                    <h3 className="font-bold">
                                        Mais Transparência
                                    </h3>
                                    <p className="text-xs">
                                        Permite que a sociedade acompanhe e cobre o cumprimento dos direitos.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 border border-verde p-2 rounded-lg 2xl:p-3">
                                <div className="text-5xl text-verde">
                                    <RiFileListFill />
                                </div>
                                <div>
                                    <h3 className="font-bold">
                                        Melhores decisões
                                    </h3>
                                    <p className="text-xs">
                                        Ajuda governos, organizações e cidadãos a planejarem ações mais eficazes.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 border border-verde p-2 rounded-lg 2xl:p-3">
                                <div className="text-5xl text-verde">
                                    <HiUserGroup />
                                </div>
                                <div>
                                    <h3 className="font-bold">
                                        Redução das desigualdades
                                    </h3>
                                    <p className="text-xs">
                                        Revela onde estão os maiores desafios e onde é preciso investir mais.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 border border-verde p-2 rounded-lg 2xl:p-3">
                                <div className="text-5xl text-verde">
                                    <IoLeafOutline />
                                </div>
                                <div>
                                    <h3 className="font-bold">
                                        Um futuro mais justo
                                    </h3>
                                    <p className="text-xs">
                                        Fortalece a cidadania e contribui para um Brasil mais igualitário e sustentável.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="p-4 max-w-[1600px] mx-auto w-full flex flex-col gap-4">
                <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                    <div>
                        <h2 className="font-bold text-2xl">
                            Fontes de dados
                        </h2>

                        <p className="text-sm leading-5 text-zinc-600">
                            Os dados do Observa Brasil são provenientes de fontes oficiais e reconhecidos.
                        </p>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
                        <li className="shadow-[0px_0px_2px_1px_black] rounded-xl p-2">
                            <div className="relative w-20 h-10">
                                <Image alt="Logo do IBGE" src={'/ibge.png'} fill className="object-contain" />
                            </div>
                            <h3 className="text-lg font-bold">Instituto Brasileiro de Geografia e Estatística</h3>
                            <p>
                                Dados sobre população, educação, saúde, trabalho, moradia e muito mais.
                            </p>
                        </li>
                        <li className="shadow-[0px_0px_2px_1px_black] rounded-xl p-2">
                            <div className="relative w-20 h-10">
                                <Image alt="Logo do sidra" src={'/sidra.png'} fill className="object-contain" />
                            </div>
                            <h3 className="text-lg font-bold">Sistema IBGE de Recuperação Automática de Dados</h3>
                            <p>
                                Séries históricas e dados detalhados dos indicadores.
                            </p>
                        </li>
                        <li className="shadow-[0px_0px_2px_1px_black] rounded-xl p-2">
                            <div className="relative w-20 h-10">
                                <Image alt="Logo do sidra" src={'/sidra.png'} fill className="object-contain" />
                            </div>
                            <h3 className="text-lg font-bold">Ministério da Saúde</h3>
                            <p>
                                Dados sobre saúde, vacinação e cobertura de serviços.
                            </p>
                        </li>
                        <li className="shadow-[0px_0px_2px_1px_black] rounded-xl p-2">
                            <div className="relative w-20 h-10">
                                <Image alt="Logo do sidra" src={'/sidra.png'} fill className="object-contain" />
                            </div>
                            <h3 className="text-lg font-bold">Ministério do Trabalho e Emprego</h3>
                            <p>
                                Informações sobre emprego, renda e mercado de trabalho.
                            </p>
                        </li>
                        <li className="shadow-[0px_0px_2px_1px_black] rounded-xl p-2">
                            <div className="relative w-20 h-10">
                                <Image alt="Logo do sidra" src={'/sidra.png'} fill className="object-contain" />
                            </div>
                            <h3 className="text-lg font-bold">Ministério do Meio Ambiente</h3>
                            <p>
                                Dados sobre sustentabilidade, recursos naturais e preservação ambiental.
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