/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DataVentas from '../Data/DataVentas';

const Ventas = () => {

  const [currentPage] = useState(1);
  const itemsPerPage = 10; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataVentas.slice(startIndex, endIndex);

  return (
    <div className="flex">

      <div className="relative mt-[38px] flex flex-col gap-[14px]">

        <div className="w-[532px] rounded-[10px] bg-[#00733C] bg-cover bg-center blanco relative sombra h-[155px] px-7 py-4 flex flex-col justify-end" style={{ backgroundImage: "url('/images/totalingresos2.png')" }}>
          <p className="h3">Total Ingresos</p>
          <p className="h3">654.541</p>
        </div>

        <div className="w-[532px] rounded-[10px] bg-[#D55665] bg-cover blanco bg-center relative sombra h-[155px] px-7 py-4 flex flex-col justify-end" style={{ backgroundImage: "url('/images/totalegresos2.png')" }}>
          <p className="h3 ">Total Egresos</p>
          <p className="h3">654.541</p>
        </div>

        <div className="w-[532px] rounded-[10px] bg-[#d9b030] bg-cover bg-center relative sombra h-[155px] px-7 py-4 flex flex-col justify-end" style={{ backgroundImage: "url('/images/balance2.png')" }}>
          <p className="h3">Balance</p>
          <p className="h3">654.541</p>
        </div>
      </div>

      <div className="venta-tienda flex flex-col items-center mt-[35px] ml-[44px]">
        <div className='w-full h-[10%] items-center gap-2 flex mb-[20px] relative mt-[16px] ml-[57px]'>
          <p className='h3 negro'>Top venta de tiendas</p>
          <img src="/public/svg/ControldeVentas/CdV.svg" alt="Icono" className="w-6 h-6 ml-[105px]" />
        </div>
        <div className='w-full h-full justify-center'>
          <div className='w-[382px] h-[10%] gap-2 border-b border-green-500 flex items-end pb-2 -mt-[15] mx-auto'>
            <p className='gris-urbano w-[20%] ml-[8px]'>Sede</p>
            <p className='gris-urbano w-[40%] ml-[62px]'>Libros vendidos</p>
            <p className='gris-urbano w-[30%] ml-[12px]'>Total vendido</p>
          </div>

          {
            currentItems.map((item, index) => (
              <div className='gap-2 flex mb-[20px] relative mt-[10px] ml-[32px]' key={index}>
                <p className='textos-bold w-[30%] ml-[12px] truncate'>{item.sede}</p>
                <p className='textos-bold w-[26%] ml-[75px] truncate'>{item["libros-vendidos"]}</p>
                <p className='textos-bold w-[22%] truncate'>{item["total-vendido"]}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>

  )
}



export default Ventas