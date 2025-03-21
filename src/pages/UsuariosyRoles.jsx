/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/dashboard/headerD'
import Banner from '../components/UsuariosyRoles/Banner'
import Tabla from '../components/UsuariosyRoles/Tabla'

const UsuariosyRoles = () => {
  return (
    <div className='w-full h-full px-4 mt-[1%]'>
      <Sidebar/>
      <div className='w-[83%] ml-[1%] pl-8 mt-[0.6%] ml-[17%] bg-white rounded p-4'>
        <Header/>
        <div className='w-full h-[90%] flex -ml-[1%] mt-[0.9%]'>
          <div className='w-[100%] h-[90%]'>
            <Banner/>
            <Tabla/>
          </div>

        </div>
      </div>
    </div>



  )
}

export default UsuariosyRoles