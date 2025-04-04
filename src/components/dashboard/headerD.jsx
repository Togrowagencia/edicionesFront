/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DatePicker } from "antd";
import IconNotificacion from "../inputs/IconNotificacion"
import IconCarrito from "../inputs/IconCarrito";
import IconReportes from "../inputs/IconReportes";

const Header = () => {
  const [buscar, setBuscar] = useState("");
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="w-[95%] h-[80px] flex items-center gap-2 justify-start">
      <div className="relative w-[30%] h-[50%]">
        <input
          id="buscar"
          className="h-full p-2 peer w-full bg-[#F5F5F5] border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow"
          type="text"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="buscar"
          className={`absolute negro h4 cursor-text bg-[#F5F5F5] px-1 rounded-[10px] transition-all transform origin-left ${buscar
              ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
              : "top-2.5 left-11 text-sm text-slate-400"
            } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Buscar
        </label>
        <img
          src="/svg/header/buscar.svg"
          alt=""
          className={`absolute px-1 py-1 left-4 top-1 transition-all transform ${buscar ? "left-[91%]" : "left-2"
            } peer-focus:left-[91%]`}
        />
      </div>
      <div className="w-[34%] bg-[#F5F5F5] border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[8px]">
        <img src="/svg/header/fecha.svg" alt="" />
        <DatePicker
          onChange={onChange}
          placeholder="Rango de fecha"
          className="custom-datepicker h4 bg-[#F5F5F5] "
        />
      </div>

      <div>
        <div className="w-[50%] px-4 flex gap-4 items-center h-[50%] ml-[240%]">
          <IconCarrito />
          <IconReportes />
          <IconNotificacion />
        </div>
      </div>
    </div>
  );
};

export default Header;
