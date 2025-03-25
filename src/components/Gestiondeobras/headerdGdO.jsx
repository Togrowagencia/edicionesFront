/* eslint-disable no-unused-vars */
import React from "react";
import { DatePicker } from "antd";
import { useState } from "react";

const HeaderGdO = () => {
  const [codigo, setCodigo] = useState("");
  const [isbn, setIsbn] = useState("");
  const [nombreObra, setNombreObra] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [autor, setAutor] = useState("");

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="w-full h-[10%] flex items-center gap-2 justify-start px-4 -ml-[1%]">
      <div className="relative w-[200px]">
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
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            codigo
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Código
        </label>
        <img
          src="/svg/header/codigo.svg"
          alt=""
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            codigo ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>

      {/* Input ISBN */}
      <div className="relative w-[200px] ml-[1%]">
        <input
          id="isbn"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="isbn"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            isbn
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          ISBN
        </label>
        <img
          src="/svg/popup-ao/ISBN.svg"
          alt=""
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            isbn ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>

      {/* Input Nombre de la obra */}
      <div className="relative w-[250px] ml-[1%]">
        <input
          id="nombreObra"
          className="p-2 peer w-[100%] bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={nombreObra}
          onChange={(e) => setNombreObra(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="nombreObra"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            nombreObra
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Nombre de la obra
        </label>
        <img
          src="/svg/popup-ao/NDLO.svg"
          alt=""
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            nombreObra ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>

      {/* Input Proveedor (con icono a la derecha) */}
      <div className="relative w-[200px] ml-[1%]">
        <input
          id="proveedor"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pr-10"
          type="text"
          value={proveedor}
          onChange={(e) => setProveedor(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="proveedor"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            proveedor
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-3 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Proveedor
        </label>
        <img
          src="/svg/header/flechaA2.svg"
          alt=""
          className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all transform ${
            proveedor ? "rotate-180" : ""
          } peer-focus:rotate-180`}
        />
      </div>

      {/* Input Autor */}
      <div className="relative w-[200px] ml-[1%]">
        <input
          id="autor"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="autor"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            autor
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Autor
        </label>
        <img
          src="/svg/header/autor.svg"
          alt=""
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            autor ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>

      <div className="w-[260px] bg-white border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[50%] ml-[8px]">
        <img src="/svg/header/fecha.svg" alt="" />
        <DatePicker
          onChange={onChange}
          placeholder="Rango de fecha"
          className="custom-datepicker h4"
        />
      </div>

      <div>
        <div className="w-[50%] px-4 flex gap-4 items-center h-[50%] ml-[22%]">
          <img src="/svg/header/stads.svg" alt="" />
          <img src="/svg/header/descarga.svg" alt="" />
          <img src="/svg/header/notification.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderGdO;
