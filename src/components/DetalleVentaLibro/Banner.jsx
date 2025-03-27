/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Banner() {
  return (
    <>
      <div className="w-[100%] h-[200px] bg-cover bg-[#222] relative flex items-center bg-[url('/svg/ControldeRecursos/banner-centroderecursos.svg')] bg-center rounded-[10px]">
        <div className="px-[20px] gap-4 flex flex-col">
          <p className="h1 blanco flex justify-start">El principito</p>
          <div className="flex gap-2">
            <img src="/svg/fecha (2).svg" alt="" />
            <p className="h4 blanco flex justify-start">Fecha de ingreso:</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
