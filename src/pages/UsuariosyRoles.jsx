/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/dashboard/headerD'
import Banner from '../components/UsuariosyRoles/Banner'
import Tabla from '../components/UsuariosyRoles/Tabla'

const UsuariosyRoles = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <Sidebar/>

      <div className='w-[83%] ml-[1%] px-8 -mt-[0.6%]'>
        <Header/>
        <div className='w-full h-[90%] flex -ml-[1%] mt-[0.6%]'>
          <div className='w-[100%] h-full'>
            <Banner/>
            <Tabla/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UsuariosyRoles