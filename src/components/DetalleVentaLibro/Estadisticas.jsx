import Grafico from "./Estadisticas/Grafico";
import Cantidad from "./Estadisticas/Cantidad";
import Ganancia from "./Estadisticas/Ganancia";
import Inventario from "./Estadisticas/Inventario";

const Estadisticas = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="bg-[url('/images/fondografico.png')] bg-cover bg-center sombra rounded-[10px] w-[44%] h-[45%] p-4 flex-col flex justify-center gap-1">
        <div className="flex w-full ">
          <div className="flex flex-col w-full gap-1">
            <p className="h4 blanco">Ingresos totales</p>
            <p className="textos-peques2 verde-corporativo p-1 bg-[#A8D1BD] w-[24.5%] rounded-[4px]">
              14.54%
            </p>
          </div>
          <div className="flex flex-col items-end justify-center w-full">
            <p className="h3 blanco flex ">$5.245.590</p>
          </div>
        </div>
        <Grafico />
      </div>

      <div className="sombra rounded-[10px] w-[26%] h-[45%] p-4 flex-col flex justify-center border border-[#9E9E9E]">
        <Cantidad />
      </div>

      <div className="sombra rounded-[10px] w-[26%] h-[45%] p-4 flex-col flex justify-center border border-[#9E9E9E]">
        <Ganancia />
      </div>

      <div className="sombra rounded-[10px] w-[36.2%] h-[20%] p-4 flex justify-between items-center border border-[#9E9E9E] relative overflow-visible">
        <div className="flex flex-col justify-center py-[7px]">
          <p className="gris-urbano textos-bold">Inventario total</p>
          <p className="h2 negro">24.418</p>
        </div>

        <div className="flex items-center justify-center h-full">
          <Inventario />
        </div>
      </div>

      <div className="bg-[#D55665] sombra rounded-[10px] w-[30%] h-[20%] px-4 py-4 gap-1 flex-col flex justify-center">
        <p className="h4 blanco">Cantidad de devoluciones realizadas</p>
        <div className="bg-[#EB707E] w-[63%] p-1 rounded-[5px] h4">
          <p className="blanco w-full">100 unidades</p>
        </div>
      </div>

      <div className="sombra rounded-[10px] w-[30.24%] h-[20%] p-4 flex justify-between border border-[#9E9E9E]">
        <div className="flex flex-col gap-4">
          <p className="textos-bold gris-elegancia">Punto con más ventas</p>
          <p className="h4 negro">
            Centro comercial <br />
            florida Local 1340
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/svg/libro.svg" alt="" className="absolute right-[30%] top-[82%] justify-center items-center flex" />
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
