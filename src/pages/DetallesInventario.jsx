/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Gestiondebodegas/Detalles/DetallesInventario/Header'
import TablaGdO from '../components/Gestiondeobras/tablaGdO'

const DetallesInventario = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <div className='w-1553px h-883px flex'>
      <Sidebar/>

      <div className='w-[83%] ml-[1%] px-8 gestion-de-obras'>
        <Header/>
        <div className='w-full h-[90%] flex -ml-[1%]'>
          <div className='w-[65%] h-full'>
            <div className='-mt-[2%]'>
            <TablaGdO/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DetallesInventario
