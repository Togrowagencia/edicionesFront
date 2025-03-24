import React from "react";
import { putUser, createUsers } from "../../api/user";
import Notify from "simple-notify";
import { createWarehouse } from "../../api/warehouse";
import Swal from "sweetalert2";

const BotonAgregar = ({ texto, datos, opcion, onUpdate, disabled }) => {
  const siuu = async (datos) => {
    let respuesta = null;

    if (disabled) {
      new Notify({
        title: "Por favor, rellene todos los campos.",
        status: "warning",
        type: "filled",
        autotimeout: 850,
        autoclose: true,
        position: "left top",
        effect: "slide",
        gap: 20,
      });
      return;
    }

    try {
      if (opcion === "crear") {
        Swal.fire({
          title: "¿Seguro que quiere " + texto.toLowerCase() + "?",
          text: "",
          iconHtml:
            '<img src="svg/sidebar/uyr.svg" style="width:50px; height:50px;"/>',
          width: 600,
          showCancelButton: true,
          confirmButtonColor: "#5fb868",
          cancelButtonColor: "black",
          confirmButtonText: "Confirmar",
          cancelButtonText: "Cancelar",
          color: "black",
          background: "#ffff",
        }).then(async (result) => {
          if (result.isConfirmed) {
            switch (texto) {
              case "Agregar usuario":
                respuesta = await createUsers(datos);
                break;
              case "Agregar tienda":
                respuesta = await createWarehouse(datos);
                break;
              default:
                break;
            }
            if (respuesta && respuesta.status === 201) {
              new Notify({
                title: "Creado exitosamente",
                status: "success",
                type: "filled",
                autotimeout: 850,
                autoclose: true,
                position: "left top",
                effect: "slide",
                gap: 20,
              });
            } else {
              new Notify({
                title: "error",
                status: "warning",
                type: "filled",
                autotimeout: 850,
                autoclose: true,
                position: "left top",
                effect: "slide",
                gap: 20,
              });
            }
            onUpdate();
          } else {
            new Notify({
              title: "Operación cancelada",
              status: "warning",
              type: "filled",
              autotimeout: 850,
              autoclose: true,
              position: "left top",
              effect: "slide",
              gap: 20,
            });
          }
        });
      } else if (opcion == "editar") {
        const editar = {
          "id":datos.id,
          "name": datos.name,
          "charge": datos.charge,
          "email": datos.email,
          "role": datos.role,
      }
        Swal.fire({
          title: "¿Seguro que quiere " + texto.toLowerCase() + "?",
          text: "",
          iconHtml:
            '<img src="svg/sidebar/uyr.svg" style="width:50px; height:50px;"/>',
          width: 600,
          showCancelButton: true,
          confirmButtonColor: "#5fb868",
          cancelButtonColor: "black",
          confirmButtonText: "Confirmar",
          cancelButtonText: "Cancelar",
          color: "black",
          background: "#ffff",
        }).then(async (result) => {
          if (result.isConfirmed) {
            switch (texto) {
              case "Editar usuario":
                respuesta = await putUser(editar);
                break;
              case "editar tienda":
                respuesta = await createWarehouse(datos);
                break;
              default:
                break;
            }
            if (respuesta && respuesta.status== 200) {
              new Notify({
                title: "Creado exitosamente",
                status: "success",
                type: "filled",
                autotimeout: 850,
                autoclose: true,
                position: "left top",
                effect: "slide",
                gap: 20,
              });
            } else {
              new Notify({
                title: "error",
                status: "warning",
                type: "filled",
                autotimeout: 850,
                autoclose: true,
                position: "left top",
                effect: "slide",
                gap: 20,
              });
            }
            onUpdate();
          } else {
            new Notify({
              title: "Operación cancelada",
              status: "warning",
              type: "filled",
              autotimeout: 850,
              autoclose: true,
              position: "left top",
              effect: "slide",
              gap: 20,
            });
          }
        });
      }

      return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000); // Espera la notificación y devuelve `true`
      });
    } catch (error) {
      console.error("Error durante la operación:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un error al procesar la solicitud.",
        icon: "error",
      });
    }
  };

  return (
    <div
      className={`w-auto h-[35px] flex items-center gap-2 justify-start bg-green-700 rounded-[5px] px-2 text-white cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={async () => {
        await siuu(datos);
      }}
    >
      <p className="h4">{texto}</p>
      <img src="/svg/agregar.svg" alt="icono editar" />
    </div>
  );
};

export default BotonAgregar;
