<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Data from '../Data/UsuariosyRoles/Data'; 

const Tabla = () => {
    const [currentPage] = useState(1);
    const itemsPerPage = 17; // Elementos por página

    // Calcular los índices para paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Data.slice(startIndex, endIndex);  

    // Estado para manejar el cambio de imagen
    const [lockedItems, setLockedItems] = useState({});

    const toggleLock = (id) => {
        setLockedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className='w-full h-[80%] justify-center '>
            {/* Encabezados de la tabla */}
            <div className='w-[96%] h-[10%] border-b border-grey-500 flex items-end pb-2 mx-auto ml-[2%]'>
                <p className='gris-urbano w-[9%]'>ID</p> 
                <p className='gris-urbano w-[23%]'>Nombre / Usuario</p> 
                <p className='gris-urbano w-[15%]'>Rol</p> 
                <p className='gris-urbano w-[15%]'>Teléfono</p> 
                <p className='gris-urbano w-[17%]'>Correo</p> 
                <p className='gris-urbano w-[7%]'>Eliminar</p> 
                <p className='gris-urbano w-[7%]'>Bloquear</p> 
                <p className='gris-urbano w-[7%]'>Editar</p> 
            </div>

            {/* Filas de datos */}
            {currentItems.map((item, index) => (
                <div className='w-[96%] flex mb-[20px] relative mt-[10px] mx-auto ml-[2%]' key={index}>
                    <p className='textos-bold verde-eco w-[9%] truncate'>{item.ID}</p> 
                    <p className='textos-bold w-[23%] truncate'>{item["Nombre/Usuario"]}</p> 
                    <p className='textos-bold w-[15%] truncate'>{item.Rol}</p> 
                    <p className='textos-bold w-[15%] truncate'>{item.Telefono}</p> 
                    <p className='textos-bold w-[18%] truncate'>{item.Correo}</p>
                    <img src="/svg/eliminar.svg" alt="" />
                    <img 
                        src={lockedItems[item.ID] ? "/svg/candadov.svg" : "/svg/candador.svg"} 
                        alt="" 
                        onClick={() => toggleLock(item.ID)}
                    className='ml-[6%] cursor-pointer'/>
                    <img src="/svg/editar.svg" alt="" className='ml-[5.5%]'/>
                </div>
            ))}

            
        </div>
    );
};

export default Tabla;
=======
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Data from "../Data/UsuariosyRoles/Data";
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
        title: "Custom width, padding, color, background.",
        width: 600,
        padding: "3em",
        showCancelButton: true,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        color: "warning",
        background: "#f2c94c",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      
      });
          
      const edit = await putUser({ id: id, blocked: locked });
      console.log("el pepe ")
      console.log(edit)

      return edit;
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
>>>>>>> 9654bd9 ( fix: se añade la carpeta de apis)
