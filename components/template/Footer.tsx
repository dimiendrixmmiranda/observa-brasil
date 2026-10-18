import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full bg-azul-escuro text-white p-2 flex flex-col gap-2 md:flex-row md:gap-4 lg:px-4">
            <div className="flex items-center gap-2 self-center">
                <div className="relative w-10 h-10">
                    <Image alt="Logo do Observa Brasil" src={'/assets/logo/logo-observa-brasil-light.png'} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl">Observa <b className="text-verde-claro font-bold">Brasil</b></h1>
                    <span className="text-[.55em]">Dados que ajudam a construir um país mais justo</span>
                </div>
            </div>
            <div className="my-auto lg:flex-1 lg:flex lg:justify-center lg:items-center">
                <ul className="grid grid-cols-2 text-xs text-zinc-300 sm:grid-cols-4 lg:font-semibold">
                    <li className="flex justify-center items-centers">
                        <Link href={'/'}>
                            <p>Sobre o projeto</p>
                        </Link>
                    </li>
                    <li className="flex justify-center items-centers">
                        <Link href={'/'}>
                            <p>Fonte de dados</p>
                        </Link>
                    </li>
                    <li className="flex justify-center items-centers">
                        <Link href={'/'}>
                            <p className="md:line-clamp-1">Política de privacidade</p>
                        </Link>
                    </li>
                    <li className="flex justify-center items-centers">
                        <Link href={'/'}>
                            <p>Contato</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="ml-auto my-auto">
                <ul className="grid grid-cols-4 gap-3">
                    <li className="flex justify-center text-2xl font-bold">
                        <Link href={'/'}>
                            <FaSquareGithub />
                        </Link>
                    </li>
                    <li className="flex justify-center text-2xl font-bold">
                        <Link href={'/'}>
                            <AiOutlineLinkedin />
                        </Link>
                    </li>
                    <li className="flex justify-center text-2xl font-bold">
                        <Link href={'/'}>
                            <FiInstagram />
                        </Link>
                    </li>
                    <li className="flex justify-center text-2xl font-bold">
                        <Link href={'/'}>
                            <IoMailOutline />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}