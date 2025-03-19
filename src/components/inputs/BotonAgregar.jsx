/* eslint-disable no-unused-vars */
import React from "react";
import { putUser, createUsers } from "../../api/user";
const BotonAgregar = ({ texto, datos,opcion}) => {
  const siuu = async (datos) => {
   try {
    if (opcion == "crear") {
      const crear = await createUsers(datos);
      return new Notify({
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
    console.log("Esto es lo que se recibe");
    console.log(datos);
    
   } catch (error) {
    
   }
  };
  return (
    <div
      className="w-auto h-[35px] flex items-center gap-2 justify-start bg-green-700 rounded-[5px] px-2 text-white cursor-pointer"
      onClick={() => {
        siuu(datos);
      }}
    >
      <p className="h4">{texto}</p>
      <img src="/svg/agregar.svg" alt="icono editar" />
    </div>
  );
};

export default BotonAgregar;
