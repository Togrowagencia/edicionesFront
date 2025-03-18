/* eslint-disable no-unused-vars */
import React from "react";

const BotonAgregar = ({ texto, datos }) => {
  const siuu = (datos) => {
 
    console.log(datos);
    
  };
  return (
    <div
      className="w-auto h-[25px] flex items-center gap-2 justify-start bg-green-700 rounded-[5px] px-2 text-white cursor-pointer"
      onClick={() => {
        siuu(datos)
      }}
    >
      <p className="h4">{texto}</p>
      <img src="/svg/agregar.svg" alt="icono editar" />
    </div>
  );
};

export default BotonAgregar;
