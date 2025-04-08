import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import HeaderGdB from "../components/Gestiondebodegas/headerGdB";
import Libromain from "../components/Gestiondebodegas/libromain";
import Libros from "../components/Gestiondebodegas/libros";
import { getWarehouses } from "../api/warehouse";
import Tienda from "../components/Gestiondebodegas/tienda";
import { useEffect } from "react";

const GestiondeBodegas = () => {
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);
  const [datos, setDatos] = useState([]);

  const fetchw = async () => {
    try {
      const response = await getWarehouses();
      setDatos(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
    fetchw();
  }, []);

  const handleW = async () => {
    await fetchw();
  };

  return (
    <div className="w-full h-full px-4 pt-4 flex">
      <div className="w-1553px h-883px flex gap-5">
        <Sidebar />

        <div className="w-[83%] gestion-de-obras ml-[21%]">
          <HeaderGdB load={handleW} />
          <div className="grid grid-cols-2 grid-rows-4 gap-0 w-full h-full">
            <div className="col-start-1 col-end-2 row-start-1 row-end-4">
              <Libromain libro={libroSeleccionado} />
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-4">
              <Tienda libro={libroSeleccionado} />{" "}
              {/* Pasamos el libro seleccionado */}
            </div>
            <div className="col-start-1 col-end-3 row-start-4 row-end-5 relative">
              <Libros
                setLibroSeleccionado={setLibroSeleccionado}
                datos={datos}
                load={handleW}
              />{" "}
              {/* Pasamos la función */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestiondeBodegas;
