/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import HeaderGdO from '../components/Gestiondeobras/headerdGdO'
import ChekboxsGdO from '../components/Gestiondeobras/chekboxsGdO'
import TablaGdO from '../components/Gestiondeobras/tablaGdO'

const Gestiondeobras = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <div className='w-1553px h-883px flex'>
      <Sidebar/>

      <div className='w-[83%] px-8 gestion-de-obras ml-[21%]'>
        <HeaderGdO/>
        <div className='w-full h-[90%] flex -ml-[1%]'>
          <div className='w-[65%] h-full'>
            <ChekboxsGdO/>
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

export default Gestiondeobras
