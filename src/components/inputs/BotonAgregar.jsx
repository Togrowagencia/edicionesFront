/* eslint-disable no-unused-vars */
import React from "react";
import { putUser, createUsers } from "../../api/user";
const BotonAgregar = ({ texto, datos,opcion,onUpdate}) => {
  const siuu = async (datos) => {
   try {
    if (opcion == "crear") {
      const crear = await createUsers(datos);
       new Notify({
        title: "Usuario creado correctamente",
        text: "Rellene todos los campos",
        status: "success",
        position: "left top",
        effect: "slide",
        autotimeout: 900,
        autoclose: true,
        button: true,
        type: "filled",
        gap: 5,
      });

    }else if (bandera == "Editar"){
      const actualizar = await putUser(datos);
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000); // Espera la notificación y devuelve `true`
    });

   } catch (error) {
    
   }
  };
  return (
    <div
      className="w-auto h-[35px] flex items-center gap-2 justify-start bg-green-700 rounded-[5px] px-2 text-white cursor-pointer"
      onClick={async () => {
        const resultado = await siuu(datos);
        if (resultado && onUpdate) {
          onUpdate();
        }
      }}
    >
      <p className="h4">{texto}</p>
      <img src="/svg/agregar.svg" alt="icono editar" />
    </div>
  );
};

export default BotonAgregar;
