import React, { useState, useEffect } from "react";
import Notify from "simple-notify";
import Swal from "sweetalert2";
import AgregarUsuario from "./AgregarUsuario";
import {putUser } from "../../api/user";


const Tabla = ({ usuarios,onUpdate}) => {
  const [datos, setDatos] = useState([]);
  const [openDrawer1, setOpenDrawer1] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Estado para el usuario seleccionado

  useEffect(() => {
    setDatos(usuarios)
  }, [usuarios]);

  const showDrawer1 = (user) => {

    setSelectedUser({
      "id":user.id,
      "warehouse":user.warehouse,
      "name": user.name,
      "charge": user.charge,
      "email": user.email,
      "role": user.role,
  });
  };

  useEffect(() => {
    if (selectedUser) {
      setOpenDrawer1(true);
    }
  }, [selectedUser]);

  const onCloseDrawer1 = () => {
    setOpenDrawer1(false);
    setSelectedUser(null); // Limpiar el usuario seleccionado al cerrar
  };

  const handleEdit = async (id, datos) => {
    let bandera = {
      titulo: "¿Seguro de editar el usuario?",
      texto: "",
      confirmacion: "Se ha editado el usuario",
      svg: '<img src="svg/usuario.svg" style="width:50px; height:50px;"/>',
    };

    if (datos.hasOwnProperty("blocked")) {
      bandera = datos.blocked
        ? {
            titulo: "¿Seguro de bloquear el usuario?",
            texto: "Al bloquear el usuario, este no podrá acceder al sistema.",
            confirmacion: "Se ha bloqueado el usuario",
            svg: '<img src="svg/candador.svg" style="width:50px; height:50px;"/>',
          }
        : {
            titulo: "¿Seguro de desbloquear el usuario?",
            texto: "Al desbloquear el usuario, este podrá acceder al sistema.",
            confirmacion: "Se ha desbloqueado el usuario",
            svg: '<img src="svg/candadov.svg" style="width:50px; height:50px;"/>',
          };
    }

    try {
      Swal.fire({
        title: bandera.titulo,
        text: bandera.texto,
        iconHtml: bandera.svg,
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
          await putUser({ id: id, datos });
          setDatos((prevDatos) =>
            prevDatos.map((user) =>
              user.id === id ? { ...user, blocked: datos.blocked } : user
            )
          );

          new Notify({
            title: datos.blocked
              ? "Se ha bloqueado el usuario"
              : "Se ha desbloqueado el usuario",
            status: "success",
            position: "left top",
            effect: "slide",
            autotimeout: 900,
            autoclose: true,
            button: true,
            type: "filled",
            gap: 5,
          });
        }
      });
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  return (
    <div className="my-4">
      <div className="overflow-auto max-h-[500px] border border-gray-100 rounded-lg ">
        <table className="w-full rounded-lg overflow-auto mb-[5%]">
          <thead className="bg-white sticky top-0 z-10 shadow">
            <tr>
              <th className="textoss gris-elegancia text-left px-4">ID</th>
              <th className="textoss gris-elegancia text-left">
                Nombre / Usuario
              </th>
              <th className="textoss gris-elegancia text-left">Rol</th>
              <th className="textoss gris-elegancia text-left">Correo</th>
              <th className="textoss gris-elegancia text-left">Bloquear</th>
              <th className="textoss gris-elegancia text-left">Editar</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((item, index) => (
              <tr
                key={item.id}
                className={` ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="font-bold verde-eco px-4">
                  <span className="inline-block w-[90px] overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.id}
                  </span>
                </td>
                <td className="textos-bold px-2 py-2 ">{item.name}</td>
                <td className="textos-bold px-2 py-2">{item.role}</td>
                <td className="textos-bold px-2 py-2">{item.email}</td>
                <td className="p-2">
                  <img
                    src={
                      item.blocked ? "/svg/candadov.svg" : "/svg/candador.svg"
                    }
                    alt="Bloquear/Desbloquear"
                    onClick={() =>
                      handleEdit(item.id, { blocked: !item.blocked })
                    }
                    className="cursor-pointer"
                  />
                </td>
                <td className="p-2">
                  <img
                    src="/svg/editar.svg"
                    alt="Editar"
                    className="cursor-pointer"
                    onClick={() =>showDrawer1(item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AgregarUsuario
          isPopupOpen={openDrawer1}
          handlePopupClose={onCloseDrawer1}
          opcion={"editar"}
          text={"Editar usuario"}
          data={
            selectedUser || {
              telefono: "",
              nombre: "",
              correo: "",
              cargo: "",
              tienda: "",
              documento: "",
              password: "",
              rol: "",
              descuento: "",
            }
            
          }
          reload={onUpdate}
        />
      </div>
    </div>
  );
};

export default Tabla;
