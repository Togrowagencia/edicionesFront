/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/CuotasCredito/headerd'
import Tabla from '../components/CuotasCredito/tabla'

const CuotasCredito = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <div className='w-1553px h-883px flex'>
      <Sidebar/>

      <div className='w-[83%] px-8 gestion-de-obras ml-[21%]'>
        <Header/>
        <div className='w-full h-[90%] flex'>
          <div className='w-[65%] h-full'>
            <Tabla/>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CuotasCredito
