/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Gestiondebodegas/Detalles/DetallesInventario/Header'
import Tabla from '../components/Gestiondebodegas/Detalles/DetallesInventario/Tabla'

const DetallesInventario = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <div className='w-1553px h-883px flex'>
        <Sidebar />

        <div className='w-[83%] ml-[21%] px-8 gestion-de-obras ml-[17%]'>
          <Header />
          <div className='w-full h-[90%] flex'>
            <Tabla />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallesInventario
