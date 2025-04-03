/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Drawer, DatePicker } from "antd";
import Data from "../Data/Puntodeventa/Data";

const PagoCredito = ({ isPopupOpen, handlePopupClose }) => {
  const [buscar, setBuscar] = useState("");
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

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

          <div className="relative w-[35%] mx-[1%] my-[2%]">
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
              className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${buscar
                ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                : "top-3 left-10 text-sm text-slate-400"
                } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Buscar
            </label>
            <img
              src="/svg/header/buscar.svg"
              alt=""
              className={`absolute bg-white py-2 left-4 top-1 transition-all transform ${buscar ? "left-[85%]" : "left-2"
                } peer-focus:left-[85%]`}
            />
          </div>
          <div className="w-[35%] bg-[#FFF] border border-[#000] rounded-[10px] px-4 flex gap-4 items-center h-[45px]">
            <img src="/svg/header/fecha.svg" alt="" />
            <DatePicker
              onChange={onChange}
              placeholder="Rango de fecha"
              className="custom-datepicker h4 bg-[#FFF] "
            />
          </div>
        </div>

        <div className="w-full h-auto flex justify-center">
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b border-grey-500">
                  <th className="text-left gris-urbano p-2 textos">N° Factura</th>
                  <th className="text-left gris-urbano p-2 textos">
                    Fecha venta
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Nombre
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Apellidos
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Ciudad
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Vendedor
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Total
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Valor cuota
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Saldo
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Cuotas pendientes
                  </th>
                  <th className="text-left gris-urbano p-2 textos">
                    Fecha ultimo pago
                  </th>
                </tr>
              </thead>
              <tbody>
                {Data.map((item, index) => (
                  <tr key={index} className="w-full">
                    <td className="textos-bold p-2 truncate">{item["N-Factura"]}</td>
                    <td className="textos-bold truncate p-2">
                      {item["Fecha-venta"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Nombre"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Apellidos"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Ciudad"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Vendedor"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Total"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Valor-cuota"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Saldo"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Cuotas-pendientes"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      {item["Fecha-ultimo-pago"]}
                    </td>
                    <td className="textos-bold truncate p-2">
                      <div><button className="bg-[#00733C] textos blanco p-1 rounded-[3px]">Abonar</button></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
PagoCredito.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default PagoCredito;
