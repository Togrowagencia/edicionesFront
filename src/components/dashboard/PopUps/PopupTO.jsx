/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import DataTO from "../../Data/DataTO";

const PopupTO = ({ isPopupOpen, handlePopupClose }) => {
  const [cantidad, setCantidad] = useState("");
  const [buscar, setBuscar] = useState("");
  const [puntoVenta1, setPuntoVenta1] = useState("");
  const [puntoVenta2, setPuntoVenta2] = useState("");

  const [currentPage] = useState(1);
  const itemsPerPage = 10; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataTO.slice(startIndex, endIndex);

  return (
    <div style={{ position: "relative" }}>
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={1483}
        closable={false} // Desactiva el botón de cierre predeterminado
        headerStyle={{ display: "none" }} // Oculta el header del Drawer
        drawerStyle={{
          borderRadius: "10px 10px 10px 10px",
          height: "100%",
        }}
      >
        {/* Botón de cierre personalizado */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            cursor: "pointer",
          }}
          onClick={handlePopupClose}
        >
          <img
            src="/public/svg/popup-ao/cerrar (2).svg"
            alt="Cerrar"
            className="w-6 h-6 mt-[10%]"
          />
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/public/svg/popup-to/trasladar.svg"
            alt="Icono"
            className="mb-[15px] w-33px h-33px ml-[20px]"
          />
          <h2 className="mb-4 h3 verde-corporativo">Trasladar obras</h2>
        </div>

        <div className="flex items-center gap-2">
          <h4 className="mb-4 h4 gris-urbano mt-[3%]">Trasladar de</h4>

          <div className="relative w-[260px] ml-[1%] mt-[2%]">
            <input
              id="punto-venta-1"
              className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow pr-10"
              type="text"
              value={puntoVenta1}
              onChange={(e) => setPuntoVenta1(e.target.value)}
              placeholder=" "
            />
            <label
              htmlFor="punto-venta-1"
              className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
                puntoVenta1
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-4 text-sm text-slate-400"
              } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Punto de venta
            </label>
            <img
              src="/svg/popup-ao/flechaA.svg"
              alt=""
              className="absolute right-4 top-4 transition-transform duration-300 peer-focus:rotate-180"
            />
          </div>

          <h4 className="mb-4 h4 gris-urbano ml-[1%] mt-[3%]">a</h4>

          {/* Segundo Input de Punto de Venta */}
          <div className="relative w-[260px] ml-[1%] mt-[2%]">
            <input
              id="punto-venta-2"
              className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow pr-10"
              type="text"
              value={puntoVenta2}
              onChange={(e) => setPuntoVenta2(e.target.value)}
              placeholder=" "
            />
            <label
              htmlFor="punto-venta-2"
              className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
                puntoVenta2
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-4 text-sm text-slate-400"
              } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Punto de venta
            </label>
            <img
              src="/svg/popup-ao/flechaA.svg"
              alt=""
              className="absolute right-4 top-4 transition-transform duration-300 peer-focus:rotate-180"
            />
          </div>

          <div className="relative w-[260px] ml-[1%] mt-[2%]">
            <input
              id="buscar"
              className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow"
              type="text"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
              placeholder=" "
            />
            <label
              htmlFor="buscar"
              className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
                buscar
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-10 text-sm text-slate-400"
              } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Buscar
            </label>
            <img
              src="/svg/header/buscar.svg"
              alt=""
              className={`absolute bg-white px-1 py-2 left-4 top-1 transition-all transform ${
                buscar ? "left-[85%]" : "left-2"
              } peer-focus:left-[85%]`}
            />
          </div>

          <div className="relative w-[10%] ml-[1%] mt-[2%]">
            <input
              id="cantidad"
              className="p-2 peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow"
              type="text"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="Cantidad"
            />
            <label
              htmlFor="cantidad"
              className={`absolute negro h4 cursor-text bg-[#fff] px-1 transition-all transform origin-left ${
                cantidad
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-9 text-sm text-slate-400"
              } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Cantidad
            </label>
            <img
              src="/svg/popup-ao/cantidad.svg"
              alt=""
              className={`absolute bg-white px-1 py-2 left-4 top-1 transition-all transform ${
                cantidad ? "left-[80%]" : "left-2"
              } peer-focus:left-[80%]`}
            />
          </div>
          <div className="flex justify-end items-center mt-[2%] w-[15%]">
            <button className="bg-[#00733C] flex gap-2 px-2 py-1 rounded-[3px] ">
              <p className="h4 blanco">Añadir</p>
              <img src="svg/agregar.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h4 className="text-2xl mb-4 h4 verde-corporativo ml-[1.5%] mt-[3%]">
            Busqueda
          </h4>
        </div>

        <div className="flex items-center gap-2 mt-[7%]">
          <h4 className="text-2xl mb-4 h4 verde-corporativo ml-[1.5%] mt-[3%]">
            Items a trasladar viva laureles
          </h4>
          <img
            className="mt-[2%] ml-[1%]"
            src="/svg/header/flechaA2.svg"
            alt=""
          />
        </div>

        <div className="w-full h-auto flex justify-center">
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b border-grey-500">
                  <th className="text-left gris-urbano p-2 textos">ID</th>
                  <th className="text-left gris-urbano p-2 textos">ISBN</th>
                  <th className="text-left gris-urbano p-2 textos">
                    Nombre de la obra
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Editorial
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Proveedor
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Salida desde punto de venta
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Lleganda al punto de venta
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Cantidad total
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Editar/Eliminar
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className="w-full">
                    <td className="textos-bold verde-eco p-2 truncate">
                      {item.ID}
                    </td>
                    <td className="textos-bold p-2 truncate">{item.ISBN}</td>
                    <td className="textos-bold truncate p-2">
                      {item["Nombre de la obra"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Editorial"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Proveedor"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Salida-desde-punto-de-venta"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Llegada-a-punto-de-venta"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Cantidad-Total"]}
                    </td>
                    <td className="flex gap-6 mx-5">
                      <img src="/svg/editar.svg" alt="" />
                      <img src="/svg/eliminar.svg" alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center p-4 justify-end w-full">
          <div className="flex items-center gap-2 bg-[#EEE] p-2 rounded-[3px] justify-end w-auto">
            <img src="/public/svg/popup-ao/NDLO.svg" alt="" />
            <p className="textos negro">
              Cantidad a trasladar <span className="textos-bold mx-3">450</span>
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-full justify-end p-4">
          <button className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2">
            <p className="h4 blanco">Confirmar traslado</p>
            <img src="/svg/gestiondeobras/agregar(2).svg" alt="" />
          </button>
          <button className="bg-[#222] flex px-2 py-1 rounded-[3px] gap-2">
            <p className="h4 blanco">Cancelar</p>
            <img src="/svg/gestiondeobras/cancelar.svg" alt="" />
          </button>
        </div>
      </Drawer>
    </div>
  );
};
PopupTO.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default PopupTO;
