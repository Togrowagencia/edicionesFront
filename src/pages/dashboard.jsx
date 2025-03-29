/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/dashboard/headerD";
import Bienvenido from "../components/dashboard/Bienvenido";
import Ventas from "../components/dashboard/Ventas";
import Obra from "../components/dashboard/Obra";
import { getGenders } from "../api/genders";
import { getAuthor } from "../api/author";
import { getContent } from "../api/content";
import { getClassification } from "../api/clasification";
import { getProviders } from "../api/providers";
import { getPublishing } from "../api/editorial";
const Dashboard = () => {
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
    fetchData(getGenders, "Gender");
    fetchData(getClassification, "Classification");
    fetchData(getContent, "Content");
  }, []);

  return (
    <div className="w-full h-full px-4 pt-4 flex">
      <Sidebar />

      <div className="w-[83%] ml-[1%] px-8 -mt-[0.6%] ml-[17%]">
        <Header />
        <div className="w-full h-[90%] flex -ml-[1%] mt-[0.6%]">
          <div className="w-[65%] h-full">
            <Bienvenido />
            <Ventas />
          </div>
          <div className="w-[35%] h-full p-2">
            <Obra datos={datos} sindatos={sinData} reload={fetchData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
