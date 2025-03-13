/* eslint-disable no-unused-vars */
import React from 'react';

function Banner() {
  return (
    <div className="w-[1024px] h-[260px] bg-cover relative flex items-center bg-[url('/images/banerCdV.png')] banner-controlventas bg-center rounded-[10px]">
      <div className="flex-1 pl-[50px]">
        <p className="h1 blanco texto-ingresos">Control de Ventas</p>
      </div>
      <div className="w-[505px] h-[297px] flex-shrink-0 translate-y-[6px] translate-x-[150px] z-10">
        <img src="/svg/ControldeVentas/banner-CdV.svg" alt=""/>
      </div>
    </div>
  );
}

export default Banner;