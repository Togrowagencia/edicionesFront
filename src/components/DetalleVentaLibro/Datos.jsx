import React from 'react';

const Libro = () => {

    return (
        <div className="w-auto h-auto flex justify-start items-center gap-6">
            <div className='flex flex-col w-full gap-3'>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/isbn.svg" alt="" />
                    <p className='h4 negro'>ISBN:</p>
                </div>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/proveedor.svg" alt="" />
                    <p className='h4 negro'>Proveedor:</p>
                </div>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/genero.svg" alt="" />
                    <p className='h4 negro'>Género:</p>
                </div>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/editorial.svg" alt="" />
                    <p className='h4 negro'>Editorial:</p>
                </div>
            </div>
            <div className='flex flex-col w-full gap-3'>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/id.svg" alt="" />
                    <p className='h4 negro'>ID:</p>
                </div>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/autor.svg" alt="" />
                    <p className='h4 negro'>Autor:</p>
                </div>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/clasificacion.svg" alt="" />
                    <p className='h4 negro'>Clasificación:</p>
                </div>
                <div className='flex gap-2'>
                    <img src="/svg/DetalleVentaLibro/cantidad.svg" alt="" />
                    <p className='h4 negro'>Cantidad:</p>
                </div>
            </div>
        </div>

    );
};

export default Libro;