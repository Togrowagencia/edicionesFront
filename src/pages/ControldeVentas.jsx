/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/dashboard/headerD'
import Banner from '../components/ControldeVentas/banner'
import Ventas from '../components/ControldeVentas/Ventas'
import Tabla_TLV from '../components/ControldeVentas/tabla-UOA'

const ControldeVentas = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <Sidebar/>

      <div className='w-[83%] ml-[1%] px-8 -mt-[0.6%]'>
        <Header/>
        <div className='w-full h-[90%] flex -ml-[1%] mt-[0.6%]'>
          <div className='w-[65%] h-full'>
            <Banner/>
            <Ventas/>
          </div>
          <div className='w-[35%] h-full p-2'>
            <Tabla_TLV/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControldeVentas