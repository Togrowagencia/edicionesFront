/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Cotizaciones/Header'
import Resumen from '../components/Cotizaciones/Resumen'
import Tabla from '../components/Cotizaciones/Tabla'

const Cotizaciones = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <Sidebar/>

      <div className='w-[83%] ml-[1%] px-8 -mt-[0.6%]'>
        <div className='w-full h-[90%] flex -ml-[1%] mt-[0.6%] gestion-de-obras'>
          <div className='w-[69.5%] h-full'>
            <Header/>
            <Tabla/>
          </div>
          <div className='w-[28%] h-full'>
          <Resumen/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cotizaciones