import React from "react";
import Notify from "simple-notify";
import Swal from "sweetalert2";

const BotonAgregarRecurso = ({
  texto,
  datos,
  opcion,
  onUpdate,
  disabled,
  apiFunc, // Función que maneja el endpoint de la API (por ejemplo, createUsers, createWarehouse)
  successMessage, // Mensaje de éxito (generalizado)
  errorMessage, // Mensaje de error (generalizado)
}) => {
  const handleAction = async (datos) => {
    console.log("llega al boton");
    console.log(opcion);
    console.log(datos);
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
      const actionMessage = texto.toLowerCase();
      Swal.fire({
        title: `¿Seguro que quiere ${actionMessage}?`,
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
          switch (opcion) {
            case "crear":
              respuesta = await apiFunc.create(datos); // Usar la función de creación del endpoint
              break;
            case "editar":
              respuesta = await apiFunc.update(datos);
              console.log("sillega al endpoint") // Usar la función de edición del endpoint
              console.log(respuesta) // Usar la función de edición del endpoint
              break;
            default:
              break;
          }

          // Verificar la respuesta y mostrar la notificación correspondiente
          if (
            respuesta &&
            respuesta.status ==(opcion === "crear" ? 201 : 200)
          ) {
            new Notify({
              title: successMessage || "Operación exitosa",
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
              title: errorMessage || "Error al procesar la solicitud",
              status: "warning",
              type: "filled",
              autotimeout: 850,
              autoclose: true,
              position: "left top",
              effect: "slide",
              gap: 20,
            });
          }

          onUpdate(); // Llamar a onUpdate para actualizar el estado del componente o lista
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
      onClick={async () => await handleAction(datos)}
    >
      <p className="h4">{texto}</p>
      <img src="/svg/agregar.svg" alt="icono editar" />
    </div>
  );
};

export default BotonAgregarRecurso;
