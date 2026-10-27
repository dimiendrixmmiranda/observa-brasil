import Image from "next/image";
import Link from "next/link";
import { BsMortarboard, BsSuitcaseLg } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowRoundForward, IoMdHeartEmpty } from "react-icons/io";
import { LiaBalanceScaleLeftSolid } from "react-icons/lia";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
export default function Indicadores() {
    const card = (
        icone: React.ReactNode,
        cor: string,
        corBordaHover: string,
        titulo: string,
        descricao: string,
        link: string
    ) => {
        return (
            <li
                className={`flex flex-col gap-3 p-4 rounded-xl border border-zinc-300 transition-all duration-300 hover:scale-105 ${corBordaHover}`}
            >
                <div
                    className={`rounded-full p-2 text-3xl flex justify-center items-center w-fit text-white ${cor}`}
                >
                    {icone}
                </div>

                <h3 className="font-bold text-xl line-clamp-1">
                    {titulo}
                </h3>

                <p className="line-clamp-2">
                    {descricao}
                </p>

                <Link href={link} className="mt-auto">
                    <FaArrowRightLong />
                </Link>
            </li>
        )
    }
    return (
        <>
            <section className="p-4 flex flex-col gap-5">
                <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                    <div>
                        <h2 className="font-bold text-2xl">
                            Explore os indicadores
                        </h2>

                        <p className="text-sm leading-5 text-zinc-600">
                            Escolha uma dimensão social para consultar os dados, graficos e comparações.
                        </p>
                    </div>

                    <div className="text-zinc-400 flex items-center gap-2 border border-zinc-200 p-2 rounded-xl px-3 w-fit">
                        <p className="text-sm">
                            Ver todos os indicadores
                        </p>
                        <FaArrowRightLong className="shrink-0" />
                    </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    {card(
                        <BsMortarboard />,
                        "bg-blue-600",
                        "hover:border-blue-600",
                        "Educação",
                        "Acesso, qualidade e oportunidade de aprendizado.",
                        "/"
                    )}

                    {card(
                        <IoMdHeartEmpty />,
                        "bg-red-600",
                        "hover:border-red-600",
                        "Saúde",
                        "Atendimento, infraestrutura e qualidade de vida.",
                        "/"
                    )}

                    {card(
                        <BsSuitcaseLg />,
                        "bg-purple-600",
                        "hover:border-purple-600",
                        "Emprego e Renda",
                        "Trabalho, ocupação e distribuição de renda.",
                        "/"
                    )}

                    {card(
                        <LiaBalanceScaleLeftSolid />,
                        "bg-blue-600",
                        "hover:border-blue-600",
                        "Desigualdade Social",
                        "Diferenças regionais e acesso a direitos.",
                        "/"
                    )}

                    {card(
                        <LuLeaf />,
                        "bg-green-600",
                        "hover:border-green-600",
                        "Meio Ambiente",
                        "Sustentabilidade e recursos naturais.",
                        "/"
                    )}

                    {card(
                        <LuLeaf />,
                        "bg-orange-600",
                        "hover:border-orange-600",
                        "Direitos e Cidadania",
                        "Informações sobre seus direitos e serviços públicos.",
                        "/"
                    )}
                </ul>
            </section>
            <section className="p-4 flex flex-col gap-5">
                <div>
                    <div className="rounded-full p-2 text-4xl bg-verde text-white">
                        <MdOutlineLocationOn />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl text-verde-escuro">Dados por Estato e Região</h2>
                        <p>
                            Explore as informações de cada estado e das 5 grandes regiões do Brasil
                        </p>
                        <p>
                            Compare indicadores, descubra as particularidades de cada territorio e veja como cada regiao contribui para o desenvolvimento do país.
                        </p>
                        <button>
                            <p>Ver estados e regiões</p>
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                </div>
                <div className="relative w-40 h-40">
                    <Image alt="Mapa do Brasil" src={'/mapa-do-brasil.png'} fill className="object-contain" />
                </div>
                <div>
                    <ul>
                        <li className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-verde"></div>
                            <div className="flex justify-between">
                                <p>Norte</p>
                                <p>7 Estados</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-verde"></div>
                            <div className="flex justify-between">
                                <p>Norte</p>
                                <p>7 Estados</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-verde"></div>
                            <div className="flex justify-between">
                                <p>Norte</p>
                                <p>7 Estados</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-verde"></div>
                            <div className="flex justify-between">
                                <p>Norte</p>
                                <p>7 Estados</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-verde"></div>
                            <div className="flex justify-between">
                                <p>Norte</p>
                                <p>7 Estados</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <VscGraph />
                    </div>
                    <div>
                        <h3>Comparação entre regiões</h3>
                        <p>
                            Veja como cada região se sai em diferentes indicadores e descubra as maiores diferenças e semelhanças entre elas.
                        </p>
                        <button>
                            <p>Explorar comparativo</p>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </section>
            <section className="p-4 gap-3 bg-verde-claro/30 grid grid-rows-2 grid-cols-[70px_1fr] md:gap-y-1">
                <div className="relative w-16 h-16 md:row-span-2">
                    <Image alt="Mapa do brasil em verde" src={'/mapa-do-brasil-verde.png'} fill className="object-contain" />
                </div>
                <h3 className="font-black text-2xl text-verde-escuro">Juntos por um Brasil melhor</h3>
                <span className="col-span-2 md:col-span-1 md:col-start-2 md:col-end-3 md:text-lg">
                    Dados são poder. Use a informação para compreender, participar e transformar!
                </span>
            </section>
        </>
    )
}