/* eslint-disable no-unused-vars */
import React from 'react';

function Bienvenido() {
  return (
    <div className="w-[1024px] h-[260px] bg-cover relative flex items-center bg-[url('/svg/dashboard/fondo-bienvenido.svg')] bg-center rounded-[10px]">
      <div className="flex-1 pl-[50px]">
        <p className="h1 blanco">Bienvenido</p>
        <p className="h4 blanco">Este es el software de gestion de ediciones hispanicas <br/> para el contról de ventas y gestión de inventarios.</p>
      </div>
      <div className="w-[505px] h-[297px] flex-shrink-0 -translate-y-[18px]">
        <img src="/svg/dashboard/bienvenido.svg" alt="" />
      </div>
    </div>
  );
}

export default Bienvenido;