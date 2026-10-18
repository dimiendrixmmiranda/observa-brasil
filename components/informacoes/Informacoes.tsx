'use client';

import React from "react";
import { BsMortarboard, BsSuitcaseLg } from "react-icons/bs";
import { FaArrowTrendUp, FaUsers } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LiaBalanceScaleLeftSolid } from "react-icons/lia";

type CoresCard = {
    fundo: string
    borda: string
    icone: string
}

export default function Informacoes() {
    const card = (
        icone: React.ReactNode,
        cores: CoresCard,
        titulo: string,
        dado: string,
        complementoDado: string
    ) => {
        return (
            <li
                className={`${cores.fundo} ${cores.borda} flex flex-col gap-3 p-4 rounded-xl`}
            >
                <div
                    className={`rounded-full p-2 text-3xl flex justify-center items-center w-fit text-white ${cores.icone}`}
                >
                    {icone}
                </div>

                <h3 className="font-bold text-xl">
                    {titulo}
                </h3>

                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold">
                        {dado}
                    </h2>

                    <span className="text-sm text-zinc-600">
                        {complementoDado}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <FaArrowTrendUp className="text-verde-claro shrink-0" />
                    <span className="text-sm">
                        0,5% em relação a 2021
                    </span>
                </div>
            </li>
        )
    }

    return (
        <section className="p-4 flex flex-col gap-5">
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
                        Dados mais recentes: 2022
                    </p>
                </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {card(
                    <FaUsers />,
                    {
                        fundo: "bg-verde-claro/20",
                        borda: "border-verde-claro/40",
                        icone: "bg-verde-claro",
                    },
                    "População",
                    "203,1 milhões",
                    "de habitantes"
                )}

                {card(
                    <BsMortarboard />,
                    {
                        fundo: "bg-blue-600/10",
                        borda: "border-blue-600/30",
                        icone: "bg-blue-600",
                    },
                    "Educação",
                    "93,1%",
                    "de matrículas no ensino fundamental"
                )}

                {card(
                    <BsSuitcaseLg />,
                    {
                        fundo: "bg-purple-600/10",
                        borda: "border-purple-600/30",
                        icone: "bg-purple-600",
                    },
                    "Emprego",
                    "56,8%",
                    "da população em idade ativa"
                )}

                {card(
                    <IoMdHeartEmpty />,
                    {
                        fundo: "bg-red-600/10",
                        borda: "border-red-600/30",
                        icone: "bg-red-600",
                    },
                    "Saúde",
                    "71,5 anos",
                    "de esperança de vida ao nascer"
                )}

                {card(
                    <LiaBalanceScaleLeftSolid />,
                    {
                        fundo: "bg-yellow-600/10",
                        borda: "border-yellow-600/30",
                        icone: "bg-yellow-600",
                    },
                    "Desigualdade",
                    "0,518",
                    "índice de Gini da renda"
                )}
            </ul>
        </section>
    )
}