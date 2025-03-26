/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Gestiondebodegas/Detalles/DetallesVentas/Header'
import Tabla from '../components/Gestiondebodegas/Detalles/DetallesVentas/Tabla'

const DetallesVentas = () => {
  return (
    <div className='w-full h-full p-4 flex'>
      <div className='w-1553px h-883px flex'>
        <Sidebar />

        <div className='w-[83%] ml-[21%] px-8 gestion-de-obras'>
          <Header />
          <div className='w-full h-[90%] flex'>
            <div className='w-full h-full'>
              <div className=''>
                <Tabla />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallesVentas
