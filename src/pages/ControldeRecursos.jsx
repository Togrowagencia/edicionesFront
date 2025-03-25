/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/dashboard/headerD";
import Banner from "../components/ControldeRecursos/Banner";
import Proveedores from "../components/ControldeRecursos/Recursos/Proveedores";
import Editorial from "../components/ControldeRecursos/Recursos/Editorial";
import Autor from "../components/ControldeRecursos/Recursos/Autor";
import {MediosdePago} from "../components/ControldeRecursos/Recursos/MediosdePago";
import Genero from "../components/ControldeRecursos/Recursos/Genero";
import Contenidos from "../components/ControldeRecursos/Recursos/Contenidos";
import Promociones from "../components/ControldeRecursos/Recursos/Promociones";
import Clasificacion from "../components/ControldeRecursos/Recursos/Clasification";

const ControldeRecursos = () => {
  return (
    <div className="w-full h-full px-4 pt-4 flex bg-[#F1F4FF]">
      <Sidebar />
      <div className='w-[83%] px-8 ml-[16%] '>
        <div className="ml-3"><Header /></div>
        <div className="w-full h-[90%] flex">
          <div className="w-[100%] h-full">
            <Banner />
            <div className='w-[100%] h-full px-5 flex flex-wrap relative mt-[-2%] gap-x-[0.8%] '>
              <Proveedores  />
              <Editorial />
              <Autor />
              <MediosdePago />
              <Genero />
              <Contenidos />
              <Promociones />
              <Clasificacion />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControldeRecursos;
