import Grafico from "./Estadisticas/Grafico";
import Cantidad from "./Estadisticas/Cantidad";

const Estadisticas = () => {
    return (
        <div className="flex flex-wrap gap-5">
            <div className="bg-[url('/images/fondografico.png')] bg-cover bg-center sombra rounded-[10px] w-[40%] h-[50%] p-4 flex-col flex justify-center gap-1">
                <div className="flex w-full ">
                    <div className="flex flex-col w-full gap-1">
                        <p className="h4 blanco">Ingresos totales</p>
                        <p className="textos-peques2 verde-corporativo p-1 bg-[#A8D1BD] w-[24.5%] rounded-[4px]">14.54%</p>
                    </div>
                    <div className="flex flex-col items-end justify-center w-full">
                        <p className="h3 blanco flex ">$5.245.590</p>
                    </div>
                </div>
                <Grafico />
            </div>

            <div className="sombra rounded-[10px] w-[25%] h-[50%] p-4 flex-col flex justify-center border border-[#9E9E9E]">
                <Cantidad/>
            </div>
            <div className="sombra rounded-[10px] w-[25%] h-[50%] p-4 flex-col flex justify-center border border-[#9E9E9E]">
            </div>
        </div>
    );
};

export default Estadisticas;