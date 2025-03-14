/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BotonAgregar from '../inputs/BotonAgregar';
import AgregarUsuario from './AgregarUsuario';

function Banner() {
  const [openDrawer1, setOpenDrawer1] = useState(false); 

  const showDrawer1 = () => {
    setOpenDrawer1(true);
  };
  const onCloseDrawer1 = () => {
    setOpenDrawer1(false);
  };

  return (
    <div className="w-[1510px] h-[124px] bg-cover bg-black relative flex items-center bg-[url('/svg/ControldeRecursos/banner-centroderecursos.svg')] bg-center rounded-[10px]">
      <div className="flex-1 pl-[50px]">
        <p className="h1 blanco flex justify-center">Usuarios</p>
        <div onClick={showDrawer1} className="flex-1 flex justify-end pr-[50px]">
          <BotonAgregar texto="Agregar usuario" />
        </div>
      </div>

      {/* Primer Drawer (PopupAO) */}
      <AgregarUsuario isPopupOpen={openDrawer1} handlePopupClose={onCloseDrawer1}/>
    </div>
  );
}

export default Banner;