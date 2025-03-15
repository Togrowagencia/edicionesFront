/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import HeaderGdB from '../components/Gestiondebodegas/headerGdB'
import Libromain from '../components/Gestiondebodegas/libromain'
import Libros from '../components/Gestiondebodegas/libros'

const GestiondeBodegas = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <div className='w-1553px h-883px flex'>
      <Sidebar/>

      <div className='w-[83%] ml-[1%] px-8 gestion-de-obras'>
        <HeaderGdB/>
        <div className='w-full h-[90%] flex -ml-[2.6%]'>
          <div className='w-[65%] h-full'>
            <Libromain/>
            <div className='mt-[20%] ml-[5%]'>
            <Libros/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default GestiondeBodegas