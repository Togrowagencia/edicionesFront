/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
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
        <div className="flex flex-col mt-[4%] items-center rounded-[10px] bg-white w-[100%] h-[100%] flex-shrink-0 sombra border-2 border-[#5FB868]">
        <div className='w-[83%] h-[10%] items-center gap-3 flex mb-[20px] relative mt-[5%]'>
            <p className='h3 verde-corporativo'>Resumen de la cotizacion</p>
            <img src="/public/svg/Cotizaciones/Resumencotizacion.svg" alt="Icono" className="" />
        </div>
            <div className='w-full h-full flex items-center justify-center'> {/* Contenedor padre */}
                <div className='w-[83%] h-[10%] gap-2 flex flex-col'>
                    <p className='gris-urbano w-[100%]'>Cliente</p>
                    <p className='negro w-[100%]'>Universidad de Antioquia</p>
                    <p className='gris-urbano w-[100%]'>Items a cotizar</p>
                </div>
            </div>
        </div>
    </div>

  )
}



export default Ventas