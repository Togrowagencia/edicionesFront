import React, { useState, useEffect } from "react";
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
import { getAuthor } from "../api/author";
import { getPublishing } from "../api/editorial";
import { getPayment } from "../api/paymentMethods";
import { getGenders } from "../api/genders";
import { getContent } from "../api/content";
import { getClassification } from "../api/clasification";

const ControldeRecursos = () => {
  const [datos, setDatos] = useState({
    Providers: [],
    Publishing: [],
    Author: [],
    Payment: [],
    Gender: [],
    Classification: [],
    Content: [],
  });

  const [sinData, setSinData] = useState({
    Providers: false,
    Publishing: false,
    Author: false,
    Payment: false,
    Gender: false,
    Classification: false,
    Content: false,
  });

  const fetchData = async (apiFunction, key) => {
    try {
      const response = await apiFunction();
      if (response.data.message === "BAD_REQUEST::No se encontró resultado") {
        setSinData((prev) => ({ ...prev, [key]: true }));
      } else {
        setDatos((prev) => ({ ...prev, [key]: response.data }));
      }
    } catch (error) {
      console.error(`Error al obtener ${key}:`, error);
      setSinData((prev) => ({ ...prev, [key]: true }));
    }
  };

  useEffect(() => {
    fetchData(getProviders, "Providers");
    fetchData(getPublishing, "Publishing");
    fetchData(getAuthor, "Author");
    fetchData(getPayment, "Payment");
    fetchData(getGenders, "Gender");
    fetchData(getClassification, "Classification");
    fetchData(getContent, "Content");
  }, []);

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
                update={() => fetchData(getProviders, "Providers")}
                datoss={datos.Providers}
                sinDatos={sinData.Providers}
              />
              <Editorial
                update={() => fetchData(getPublishing, "Publishing")}
                datoss={datos.Publishing}
                sinDatos={sinData.Publishing}
                providers={datos.Providers}
              />
              <Autor
                update={() => fetchData(getAuthor, "Author")}
                datoss={datos.Author}
                sinDatos={sinData.Author}
              />
              <MediosdePago
                update={() => fetchData(getPayment, "Payment")}
                datoss={datos.Payment}
                sinDatos={sinData.Payment}
              />

              <Genero
                update={() => fetchData(getGenders, "Gender")}
                datoss={datos.Gender}
                sinDatos={sinData.Gender}
              />

              <Contenidos
                update={() => fetchData(getContent, "Content")}
                datoss={datos.Content}
                sinDatos={sinData.Gender}
              />
              <Promociones
                update={() => fetchData(getContent, "Content")}
                datoss={datos.Content}
                sinDatos={sinData.Content}
              />
              <Clasificacion
                update={() => fetchData(getClassification, "Classification")}
                datoss={datos.Classification}
                sinDatos={sinData.Classification}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControldeRecursos;
