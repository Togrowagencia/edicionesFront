/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const ObraPropia = () => {
  const [factura, setFactura] = useState("");
  const [retefuente, setRetefuente] = useState("");
  const [tipoCompra, setTipoCompra] = useState("");

  return (
    <div className="w-full h-[10%] flex items-center gap-2 justify-start px-4 -mt-[80px]">
      <div className="relative w-[315px]">
        <input
          id="factura"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={factura}
          onChange={(e) => setFactura(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="factura"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            factura
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Nº Factura
        </label>
        <img
          src="/public/svg/popup-ao/numero.svg"
          alt=""
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            factura ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>

      {/* Input Retefuente */}
      <div className="relative w-[315px]">
        <input
          id="retefuente"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={retefuente}
          onChange={(e) => setRetefuente(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="retefuente"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            retefuente
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Retefuente
        </label>
        <img
          src="/public/svg/popup-ao/retefuente.svg"
          alt=""
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            retefuente ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>
      <div className="relative w-[315px]">
        <input
          id="tipoCompra"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pr-10"
          type="text"
          value={tipoCompra}
          onChange={(e) => setTipoCompra(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="tipoCompra"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            tipoCompra
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-3 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Tipo de compra
        </label>
        <img
          src="/public/svg/popup-ao/flechaA.svg"
          alt=""
          className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all transform ${
            tipoCompra ? "rotate-180" : ""
          } peer-focus:rotate-180`}
        />
      </div>
    </div>
  );
};

export default ObraPropia;
