import Indicadores from "@/components/indicadores/Indicadores";
import Informacoes from "@/components/informacoes/Informacoes";
import Inicio from "@/components/inicio/Inicio";
import Template from "@/components/template/Template";

export default function Home() {
    return (
        <Template>
            <Inicio />
            <div className="max-w-[2000px] mx-auto">
                <Informacoes />
                <Indicadores />
            </div>
        </Template>
    )
}
