/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DataTablaGdO from "../../../Data/DataTablaGdO";

const Tabla = () => {
  const [currentPage] = useState(1);
  const itemsPerPage = 17; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DataTablaGdO.slice(startIndex, endIndex);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(
    "Tienda florida parque comercial"
  );
 
  const stores = [
    "Tienda florida parque comercial",
    "Tienda centro",
    "Tienda norte",
    "Tienda sur",
  ];

  const handleSelect = (store) => {
    setSelectedStore(store);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h3 flex px-4 py-3 items-center"
        >
          {selectedStore}
          <span className="ml-2 textos-peques">▼</span>
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-5 w-48 bg-white border rounded-[10px] shadow-lg z-50">
            {stores.map((store, index) => (
              <button
                key={index}
                onClick={() => handleSelect(store)}
                className="block w-full text-left px-4 py-2 hover:bg-green-700 hover:text-white hover:rounded-[10px]"
              >
                {store}
              </button>
            ))}
          </div>
        )}
        <div className="flex px-5">
          <img></img>
          <p className="verde-corporativo textos-bold">Inventario de tienda:</p>
        </div>
      </div>

      <div className="w-full h-full justify-center">
        {/* Encabezados de la tabla */}
        <div className="w-[1385px] h-[10%] border-b border-grey-500 flex items-end pb-2 ml-[2%]">
          <p className="gris-urbano w-[5%]">ID</p>
          <p className="gris-urbano w-[10%]">ISBN</p>
          <p className="gris-urbano w-[25%] ml-[1%]">Nombre de la obra</p>
          <p className="gris-urbano w-[12%]">Editorial</p>
          <p className="gris-urbano w-[10%]">Clasificación</p>
          <p className="gris-urbano w-[8%]">Precio de venta</p>
          <p className="gris-urbano w-[8%]">Costo de compra</p>
          <p className="gris-urbano w-[10%]">Inducción</p>
          <p className="gris-urbano w-[12%]">Proveedor</p>
          <p className="gris-urbano w-[8%]">Cantidad propia</p>
          <p className="gris-urbano w-[10%]">Cantidad en consignación</p>
          <p className="gris-urbano w-[8%]">Cantidad total</p>
        </div>

        {/* Filas de datos */}
        {currentItems.map((item, index) => (
          <div
            className="w-[1385px] flex mb-[20px] relative mt-[10px] ml-[2%]"
            key={index}
          >
            <p className="textos-bold verde-eco w-[5%] truncate">
              {item["ID"]}
            </p>
            <p className="textos-bold w-[10%] truncate">{item["ISBN"]}</p>
            <p className="textos-bold w-[25%] ml-[1%] truncate">
              {item["Nombre-de-la-obra"]}
            </p>
            <p className="textos-bold w-[12%] truncate">{item["Editorial"]}</p>
            <p className="textos-bold w-[10%] truncate">
              {item["Clasificacion"]}
            </p>
            <p className="textos-bold w-[8%] truncate">
              {item["Precio-de-venta"]}
            </p>
            <p className="textos-bold w-[8%] truncate">
              {item["Costo-de-compra"]}
            </p>
            <p className="textos-bold w-[10%] truncate">{item["Induccion"]}</p>
            <p className="textos-bold w-[12%] truncate">{item["Proveedor"]}</p>
            <p className="textos-bold w-[8%] truncate">
              {item["Cantidad-Propia"]}
            </p>
            <p className="textos-bold w-[10%] truncate">
              {item["Cantidad-en-consignacion"]}
            </p>
            <p className="textos-bold w-[8%] truncate">
              {item["Cantidad-total"]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabla;
