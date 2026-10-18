import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { TiArrowRight } from "react-icons/ti";

export default function Inicio() {
    return (
        <section
            className="flex flex-col gap-3 p-4 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 45, 55, 0.65),
                        rgba(0, 35, 45, 0.80)
                    ),
                    url('/assets/fundo-brasilia.png')
                `
            }}>
            <div className="flex flex-col gap-3 md:p-8 lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 xl:grid-cols-[600px_1fr_200px] max-w-[1400px] mx-auto w-full">
                <div className="flex flex-col gap-3 lg:gap-4">
                    <div className="bg-verde-claro p-2 rounded-xl w-fit text-white">
                        <p className="font-semibold uppercase text-xs md:text-sm">Plataforma de indicadores sociais</p>
                    </div>
                    <div className="flex flex-col gap-3 text-white lg:gap-4">
                        <div className="font-bold md:flex flex-col gap-1">
                            <h2 className="text-3xl md:text-5xl xl:text-6xl">Observa <b className="font-bold text-verde-claro">Brasil</b></h2>
                            <h4 className="md:text-xl xl:text-2xl">Dados, contexto e cidadania para um Brasil mais informado</h4>
                        </div>
                        <p className="2xl:text-lg">
                            Aqui voce encontra indicadores sociais, compara regiões, explora dados e descobre seus direitos. Porque entender o Brasil é o primeiro passo para transformar a realidade.
                        </p>
                        <div className="flex items-center gap-2 max-w-[600px]">
                            <input type="search" name="buscar" id="buscar" placeholder="Pesquise um indicador, estado ou tema..." className="p-2 rounded-xl border border-zinc-900 w-full flex-1 bg-white text-black text-sm h-[42px] xl:text-base" />
                            <button className="flex items-center justify-center bg-verde-claro rounded-xl h-[42px] w-[42px] md:w-auto md:px-4">
                                <p className="font-bold hidden md:block">Explorar</p>
                                <TiArrowRight className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative w-[250px] h-[280px] hidden lg:block xl:mx-auto 2xl:w-[350px] 2xl:h-[340px]">
                    <Image alt="Mapa do Brasil" src={'/mapa-do-brasil.png'} fill className="object-contain" />
                </div>
                <div className="relative hidden xl:block">
                    <h3 className="font-bold text-3xl text-white mt-4">
                        Informação de qualidade também é <b className="font-bold text-verde-claro">cidadania.</b>
                    </h3>
                    <div className="h-1 w-26 bg-verde-claro mt-3" />
                    <div className="absolute top-1 -left-8 text-2xl text-verde-claro">
                        <FaQuoteLeft />
                    </div>
                </div>
            </div>
        </section>
    )
}