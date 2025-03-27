/* eslint-disable no-unused-vars */
import React from "react";
import { DatePicker } from "antd";
import { useState } from "react";
import IconNotificacion from "../inputs/IconNotificacion";
import IconReportes from "../inputs/IconReportes";
import Chekboxs from "./chekboxs";

const Header = () => {
  const [codigo, setCodigo] = useState('');
  const [buscar, setBuscar] = useState("");

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="w-full h-[10%] flex items-center gap-2 justify-start px-4 -ml-[1%]">
      <div className="relative w-[50%] h-[50%]">
        <input
          id="buscar"
          className="h-full p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow"
          type="text"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="buscar"
          className={`absolute negro h4 cursor-text bg-white px-1 rounded-[10px] transition-all transform origin-left ${buscar
            ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
            : "top-2.5 left-11 text-sm text-slate-400"
            } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Buscar
        </label>
        <img
          src="/svg/header/buscar.svg"
          alt=""
          className={`absolute bg-white px-1 py-1 left-4 top-1 transition-all transform ${buscar ? "left-[85%]" : "left-2"
            } peer-focus:left-[85%]`}
        />
      </div>
      <div className="relative w-[50%]">
        <input
          id="codigo"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="codigo"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${codigo
            ? "-top-2 left-3 text-xs text-green-600 scale-75"
            : "top-3 left-10 text-sm text-slate-400"
            } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Código
        </label>
        <img
          src="/svg/header/codigo.svg"
          alt=""
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all transform ${codigo ? "left-[calc(100%-35px)]" : "left-3"
            } peer-focus:left-[calc(100%-35px)]`}
        />
      </div>

      <div className="w-[30%] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[8px]">
        <img src="/svg/header/fecha.svg" alt="" />
        <DatePicker
          onChange={onChange}
          placeholder="Rango de fecha"
          className="custom-datepicker h4"
        />
      </div>

      <div className="w-[30%] flex items-center h-[50%] gap-2">
        <Chekboxs />
        <p className="h4 gris-urbano">Cotizaciones</p>
      </div>

      <div className="w-full">
        <div className="w-full px-4 flex gap-4 items-center h-[50%] justify-end">
          <IconReportes />
          <img src="/svg/header/descarga.svg" alt="" />
          <IconNotificacion />
        </div>
      </div>
    </div>
  );
};

export default Header;
