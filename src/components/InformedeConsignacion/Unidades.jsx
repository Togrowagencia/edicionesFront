/* eslint-disable no-unused-vars */
import React, { useState } from "react";
function Unidades() {
  return (
    <div className="gap-2 flex justify-stretch w-full">
      <div className="bg-[#00733C] rounded-[10px] w-[16.7%] justify-end p-4 flex  flex-col gap-2">
        <p className="h4 blanco w-[90%]">Unidades Entregadas a Consignación</p>
        <div className="bg-[#FFF] pounded-[10px] px-2 py-1 rounded-[10px] w-[70%] justify-center items-center flex">
          <p className="h4 verde-corporativo">1200 unidades</p>
        </div>
      </div>

      <div className="bg-[#5FB868] rounded-[10px] w-[16.7%] justify-end p-4 flex  flex-col gap-2">
        <p className="h4 negro w-[70%]">Unidades Vendidas</p>
        <div className="bg-[#FFF] pounded-[10px] px-2 py-1 rounded-[10px] w-[70%] justify-center items-center flex">
          <p className="h4 verde-eco">1200 unidades</p>
        </div>
      </div>

      <div className="bg-[#D55665] rounded-[10px] w-[16.7%] justify-end p-4 flex  flex-col gap-2">
        <p className="h4 blanco">Devoluciones Registradas</p>
        <div className="bg-[#FFF] pounded-[10px] px-2 py-1 rounded-[10px] w-[70%] justify-center items-center flex">
          <p className="h4 rojo-potencia">1200 unidades</p>
        </div>
      </div>

      <div className="bg-[#E8BC33] rounded-[10px] w-[16.7%] justify-end p-4 flex  flex-col gap-2">
        <p className="h4 negro w-[90%]">Cantidad en Inventario</p>
        <div className="bg-[#FFF] pounded-[10px] px-2 py-1 rounded-[10px] w-[70%] justify-center items-center flex">
          <p className="h4 negro">1200 unidades</p>
        </div>
      </div>

      <div className="bg-[#5FB868] rounded-[10px] w-[16.7%] justify-end p-4 flex  flex-col gap-2">
        <p className="h4 negro w-[60%]">Ingresos Totales</p>
        <div className="bg-[#FFF] pounded-[10px] px-2 py-1 rounded-[10px] w-[70%] justify-center items-center flex">
          <p className="h4 verde-corporativo">1200 unidades</p>
        </div>
      </div>

      <div className="bg-[#D55665] rounded-[10px] w-[16.7%] justify-end p-4 flex  flex-col gap-2">
        <p className="h4 blanco w-[70%]">Monto por liquidar</p>
        <div className="bg-[#FFF] pounded-[10px] px-2 py-1 rounded-[10px] w-[70%] justify-center items-center flex">
          <p className="h4 rojo-potencia">1200 unidades</p>
        </div>
      </div>
    </div>
  );
}

export default Unidades;
