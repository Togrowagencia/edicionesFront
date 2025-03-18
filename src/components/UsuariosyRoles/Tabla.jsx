import React, { useState, useEffect } from "react";
import Data from "../Data/UsuariosyRoles/Data";
import Notify from "simple-notify";
import Swal from "sweetalert2";
import { getUsers, putUser } from "../../api/user";
const Tabla = () => {
  const [currentPage] = useState(1);
  const itemsPerPage = 17; // Elementos por página
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = async (id, locked) => {
    try {
      Swal.fire({
        title: locked ? "seguro que quieres desbloquear el usuario":"¿Está seguro de bloquear el usuario?",
        text: "Al bloquear el usuario, este no podrá acceder al sistema.",
        imageUrl: src/trash.svg,
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: "Custom image",
        width: 600,
        padding: "3em",
        showCancelButton: true,
        showCancelButton: true,
        confirmButtonColor: "#5fb868",
        cancelButtonColor: "black",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        color: "black",
        background: "#ffff",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const edit = await putUser({ id: id, blocked: locked });
          console.log("el pepe ");
          console.log(edit);
          new Notify({
            title: "Se ha bloqueado el usuario",
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
      return error;
    }
  };

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = datos.slice(startIndex, endIndex);
  // Estado para manejar el cambio de imagen
  const [lockedItems, setLockedItems] = useState({});

  const toggleLock = (id, locked) => {
    setLockedItems((prevState) => ({
      ...prevState,
      [id]: id,
    }));
  };

  return (
    <div className="w-full h-[80%] justify-center ">
      {/* Encabezados de la tabla */}
      <div className="w-[96%] h-[10%] border-b border-grey-500 flex items-end pb-2 mx-auto ml-[2%]">
        <p className="gris-urbano w-[9%]">ID</p>
        <p className="gris-urbano w-[23%]">Nombre / Usuario</p>
        <p className="gris-urbano w-[15%]">Rol</p>
        <p className="gris-urbano w-[17%]">Correo</p>
        <p className="gris-urbano w-[15%]">Bodega</p>
        <p className="gris-urbano w-[7%]">Eliminar</p>
        <p className="gris-urbano w-[7%]">Bloquear</p>
        <p className="gris-urbano w-[7%]">Editar</p>
      </div>

      {/* Filas de datos */}
      {currentItems.map((item, index) => (
        <div
          className="w-[96%] flex mb-[20px] relative mt-[10px] mx-auto ml-[2%]"
          key={index}
        >
          <p className="textos-bold verde-eco w-[9%] truncate">{item.id}</p>
          <p className="textos-bold w-[23%] truncate">
            {item.firstName + " " + item.lastName}
          </p>
          <p className="textos-bold w-[15%] truncate">{item.role}</p>
          <p className="textos-bold w-[18%] truncate">{item.email}</p>
          <p className="textos-bold w-[15%] truncate">{item.warehouse}</p>

          <img src="/svg/eliminar.svg" alt="" />
          <img
            src={item.blocked ? "/svg/candadov.svg" : "/svg/candador.svg"}
            alt=""
            onClick={() => {
              handleEdit(item.id, !item.blocked);
            }}
            className="ml-[6%] cursor-pointer"
          />
          <img src="/svg/editar.svg" alt="" className="ml-[5.5%]" />
        </div>
      ))}
    </div>
  );
};

export default Tabla;