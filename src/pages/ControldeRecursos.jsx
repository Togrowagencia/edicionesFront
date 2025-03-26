import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/dashboard/headerD";
import Banner from "../components/ControldeRecursos/Banner";
import Proveedores from "../components/ControldeRecursos/Recursos/Proveedores";
import Editorial from "../components/ControldeRecursos/Recursos/Editorial";
import Autor from "../components/ControldeRecursos/Recursos/Autor";
import { MediosdePago } from "../components/ControldeRecursos/Recursos/MediosdePago";
import Genero from "../components/ControldeRecursos/Recursos/Genero";
import Contenidos from "../components/ControldeRecursos/Recursos/Contenidos";
import Promociones from "../components/ControldeRecursos/Recursos/Promociones";
import Clasificacion from "../components/ControldeRecursos/Recursos/Clasification";
import { getProviders } from "../api/providers";
import { useState, useEffect } from "react";
import { getPublishing } from "../api/editorial";
const ControldeRecursos = () => {
  const [datos, setDatos] = useState({
    Providers: [],
    Publishing: [],
  });
  const [sinData, setSinData] = useState({
    Providers: false,
    Publishing: false,
  });

  const fetchProviders = async () => {
    try {
      const response = await getProviders();
      if (response.data.message === "BAD_REQUEST::No se encontró resultado") {
        setSinData((prev) => ({ ...prev, Providers: true }));
      } else {
        setDatos((prev) => ({ ...prev, Providers: response.data }));
      }
    } catch (error) {
      console.error("Error al obtener los proveedores:", error);
      setSinData((prev) => ({ ...prev, Providers: true }));
    }
  };

  const fetchPublishing = async () => {
    try {
      const response = await getPublishing();
      if (response.data.message === "BAD_REQUEST::No se encontró resultado") {
        setSinData((prev) => ({ ...prev, Publishing: true }));
      } else {
        setDatos((prev) => ({ ...prev, Publishing: response.data }));
      }
    } catch (error) {
      console.error("Error al obtener los proveedores:", error);
      setSinData((prev) => ({ ...prev, Publishing: true }));
    }
  };

  useEffect(() => {
    fetchProviders();
    fetchPublishing();
  }, []);

  const handleProvider = async () => {
    await fetchProviders();
  };
  const handlePublishing = async () => {
    await fetchPublishing();
  };
  return (
    <div className="w-full h-full px-4 pt-4 flex bg-[#F1F4FF]">
      <Sidebar />
      <div className="w-[83%] px-8 ml-[16%] ">
        <div className="ml-3">
          <Header />
        </div>
        <div className="w-full h-[90%] flex">
          <div className="w-[100%] h-full">
            <Banner />
            <div className="w-[100%] h-full px-5 flex flex-wrap relative mt-[-2%] gap-x-[0.8%] ">
              <Proveedores
                update={handleProvider}
                datoss={datos.Providers}
                sinDatos={sinData.Providers}
              />
              <Editorial
                update={handlePublishing}
                datoss={datos.Publishing}
                sinDatos={sinData.Providers}
                providers={datos.Providers}
              />
              <Autor />
              <MediosdePago />
              <Genero />
              <Contenidos />
              <Promociones />
              <Clasificacion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControldeRecursos;
