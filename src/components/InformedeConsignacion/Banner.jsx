/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Unidades from "./Unidades";

function Banner() {
  return (
    <>
      <div className="w-[100%] h-[200px] bg-cover bg-black relative flex items-center bg-[url('/svg/ControldeRecursos/banner-centroderecursos.svg')] bg-center rounded-[10px]">
        <div className="flex-1 px-[20px]">
          <p className="h1 blanco flex justify-center mt-[-4%]">
            Informe de consignación
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
