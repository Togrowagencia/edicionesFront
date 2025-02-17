/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/dashboard/HeaderGdO'
import Bienvenido from '../components/dashboard/Bienvenido'
import Ventas from '../components/dashboard/Ventas'
import Obra from '../components/dashboard/Obra'

const Gestiondeobras = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex mt-[1%]'>
      <Sidebar/>

      <div className='w-[83%] ml-[1%] px-8 -mt-[0.6%]'>
        <Header/>
        <div className='w-full h-[90%] flex -ml-[1%] mt-[0.6%]'>
          <div className='w-[65%] h-full'>
            <Bienvenido/>
            <Ventas/>
          </div>
          <div className='w-[35%] h-full p-2'>
            <Obra/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gestiondeobras
