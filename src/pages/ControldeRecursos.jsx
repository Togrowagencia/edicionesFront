/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/dashboard/headerD'
import Banner from '../components/ControldeRecursos/Banner'
import Proveedores from '../components/ControldeRecursos/Recursos/Proveedores';
import Editorial from '../components/ControldeRecursos/Recursos/Editorial';
import Autor from '../components/ControldeRecursos/Recursos/Autor';
import MediosdePago from '../components/ControldeRecursos/Recursos/MediosdePago';
import Genero from '../components/ControldeRecursos/Recursos/Genero';
import Contenidos from '../components/ControldeRecursos/Recursos/Contenidos';
import Promociones from '../components/ControldeRecursos/Recursos/Promociones';

const ControldeRecursos = () => {
  return (
    <div className='w-full h-full px-4 pt-4 flex'>
      <Sidebar/>

      <div className='w-[83%] ml-[1%] px-8 -mt-[0.6%]'>
        <Header/>
        <div className='w-full h-[90%] flex -ml-[1%] mt-[0.6%]'>
          <div className='w-[100%] h-full'>
            <Banner/>
            <div className='w-[101%] h-full px-5 flex flex-wrap relative mt-[-3%] gap-x-[1.4%] gap-y-[2.9%]'>
              <Proveedores/>
              <Editorial/>
              <Autor/>
              <MediosdePago/>
              <Genero/>
              <Contenidos/>
              <Promociones/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ControldeRecursos