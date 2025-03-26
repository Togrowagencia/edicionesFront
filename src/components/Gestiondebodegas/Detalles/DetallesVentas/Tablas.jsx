/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DataTablas from "../../../Data/DataTablas";

const Tablas = () => {
    const [currentPage] = useState(1);
    const itemsPerPage = 17; // Elementos por página

    // Filtrar los datos por tipo
    const clientes = DataTablas.filter(item => item.ID.startsWith("CLI"));
    const obras = DataTablas.filter(item => item.ID.startsWith("OBR"));
    const pagos = DataTablas.filter(item => item.ID.startsWith("PAG"));

    // Calcular los índices para paginación de cada tipo
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentClientes = clientes.slice(startIndex, endIndex);
    const currentObras = obras.slice(startIndex, endIndex);
    const currentPagos = pagos.slice(startIndex, endIndex);

    return (
        <div className="flex gap-[14px] my-4 h-[447px]">
            {/* Tabla 1 - Clientes */}
            <div className="rounded-[10px] sombra border border-[#9E9E9E] h-full w-full flex flex-col items-center">
                <div className='w-full h-[10%] items-center gap-2 flex mb-[20px] relative mt-[16px] ml-[57px]'>
                    <p className='h3 negro'>Últimos clientes registrados</p>
                    <img src="/svg/login/iniciosesion-unselected.svg" alt="Icono" className="ml-[12%]" />
                </div>
                <table className="w-[90%] mx-auto">
                    <thead>
                        <tr className="border-b border-[#00733C]">
                            <th className='gris-urbano textos text-left p-2'>Nombre</th>
                            <th className='gris-urbano textos text-left p-2'>Cantidad de obras</th>
                            <th className='gris-urbano textos text-left p-2'>Total comprado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClientes.map((item, index) => (
                            <tr key={index} className='mb-5 relative mt-[10px]'>
                                <td className='textos-bold truncate p-2'>{item.nombre}</td>
                                <td className='textos-bold truncate p-2'>{item.cantidaddeobras}</td>
                                <td className='textos-bold truncate p-2'>{item.totalcomprado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tabla 2 - Obras */}
            <div className="rounded-[10px] border sombra border-[#9E9E9E] h-full w-full flex flex-col items-center">
                <div className='w-full h-[10%] items-center gap-2 flex mb-[20px] relative mt-[16px] ml-[57px]'>
                    <p className='h3 negro'>Últimas obras vendidas</p>
                    <img src="/svg/popup-ao/NDLO.svg" alt="Icono" className="ml-[22%]" />
                </div>
                <table className="w-[90%] mx-auto">
                    <thead>
                        <tr className="border-b border-[#00733C]">
                            <th className='gris-urbano textos text-left p-2'>Obra</th>
                            <th className='gris-urbano textos text-left p-2'>Cantidad vendida</th>
                            <th className='gris-urbano textos text-left p-2'>Total recaudado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentObras.map((item, index) => (
                            <tr key={index} className='mb-5 relative '>
                                <td className='textos-bold truncate p-2'>{item.obra}</td>
                                <td className='textos-bold truncate p-2'>{item.cantidadvendida}</td>
                                <td className='textos-bold truncate p-2'>{item.totalrecaudado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tabla 3 - Pagos */}
            <div className="rounded-[10px] border sombra border-[#9E9E9E] h-full w-full flex flex-col items-center">
                <div className='w-full h-[10%] items-center gap-2 flex mb-[20px] relative mt-[16px] ml-[57px]'>
                    <p className='h3 negro'>Medios de pagos más usados</p>
                    <img src="/svg/popup-ao/costo.svg" alt="Icono" className="ml-[7%]" />
                </div>
                <table className="w-[90%] mx-auto">
                    <thead>
                        <tr className="border-b border-[#00733C]">
                            <th className='gris-urbano textos text-left p-2'>Medio de pago</th>
                            <th className='gris-urbano textos text-left p-2'>Veces usado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPagos.map((item, index) => (
                            <tr key={index} className='mb-5 relative mt-[10px]'>
                                <td className='textos-bold truncate p-2'>{item.mediodepago}</td>
                                <td className='textos-bold truncate p-2'>{item.vecesusado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tablas;