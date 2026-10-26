"use client";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import SidebarComponent from "../sidebar/SidebarComponent";
import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-cor-de-fundo p-2 border-b border-zinc-300 grid grid-cols-[1fr_50px] lg:flex lg:gap-3 xl:gap-4">
            <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                    <Image alt="Logo do Observa Brasil" src={'/assets/logo/logo-observa-brasil.png'} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl">Observa Brasil</h1>
                    <span className="text-[.55em] whitespace-nowrap">Dados que ajudam a construir um país mais justo</span>
                </div>
            </div>
            <div className="flex justify-center items-center text-2xl font-bold lg:hidden">
                <SidebarComponent />
            </div>
            <div className="items-center hidden lg:flex 2xl:flex-1 2xl:justify-center">
                <ul className="flex items-center justify-center gap-2">
                    <li className="text-xs font-bold whitespace-nowrap 3xl:text-sm">
                        <Link href={'/'}>
                            <p className={`${pathname === '/' ? 'border-b border-verde-claro px-2 py-1 scale-105 transition-all' : ''} hover:scale-105 transition-all duration-300`}>Início</p>
                        </Link>
                    </li>
                    <li className="text-xs px-2 py-1 font-bold whitespace-nowrap 3xl:text-sm">
                        <Link href={'/'}>
                            <p className={`${pathname === '/menu/indicadores' ? 'border-b border-verde-claro px-2 py-1 scale-105 transition-all' : ''} hover:scale-105 transition-all duration-300`}>Indicadores</p>
                        </Link>
                    </li>
                    <li className="text-xs px-2 py-1 font-bold whitespace-nowrap 3xl:text-sm">
                        <Link href={'/menu/estados'}>
                            <p className={`${pathname === '/menu/estados' ? 'border-b border-verde-claro px-2 py-1 scale-105 transition-all' : ''} hover:scale-105 transition-all duration-300`}>Estados e Regiões</p>
                        </Link>
                    </li>
                    <li className="text-xs px-2 py-1 font-bold whitespace-nowrap 3xl:text-sm">
                        <Link href={'/'}>
                            <p className={`${pathname === '/menu/comparar' ? 'border-b border-verde-claro px-2 py-1 scale-105 transition-all' : ''} hover:scale-105 transition-all duration-300`}>Comparar</p>
                        </Link>
                    </li>
                    <li className="text-xs px-2 py-1 font-bold whitespace-nowrap 3xl:text-sm">
                        <Link href={'/menu/direitos'}>
                            <p className={`${pathname === '/menu/direitos' ? 'border-b border-verde-claro px-2 py-1 scale-105 transition-all' : ''} hover:scale-105 transition-all duration-300`}>Direitos e Cidadania</p>
                        </Link>
                    </li>
                    <li className="text-xs px-2 py-1 font-bold whitespace-nowrap 3xl:text-sm">
                        <Link href={'/menu/sobre'}>
                            <p className={`${pathname === '/menu/sobre' ? 'border-b border-verde-claro px-2 py-1 scale-105 transition-all' : ''} hover:scale-105 transition-all duration-300`}>Sobre</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="items-center w-full hidden lg:flex max-w-[600px]">
                <input type="search" name="buscar" id="buscar" placeholder="Pesquise um indicador, estado ou tema..." className="border border-zinc-400 rounded-lg p-1 text-sm w-full 2xl:h-[40px] 2xl:px-2" />
            </div>
            <div className="items-center justify-center hidden xl:flex">
                <button className="rounded-xl border border-zinc-400 w-6 h-6 flex justify-center items-center">
                    <MdOutlineLightMode />
                </button>
            </div>
        </header>
    )
}