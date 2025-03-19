import React from "react";
import { useNavigate } from 'react-router-dom';

function Tienda({ libro }) {
  const navigate = useNavigate();

  if (!libro) {
    return <p className="negro text-center mt-4"></p>;
  }

  return (
    <div className="bg-white p-6 mt-6 ml-[-8%]">
      <p className="h1">{libro.Nombredelatienda}</p>
      <p className="h3 negro verde-corporativo flex gap-4">
        <img src="/public/svg/Gestiondebodega/local1.svg" alt="" className="" />
        {libro.Local}</p>

      <p className="h3 negro mt-4 flex gap-4">
        <img src="/public/svg/Gestiondebodega/inventario1.svg" alt="" className="" />
        Inventario de tienda: {libro.Inventario} obras
      </p>
      <div className="flex justify-between">
        <p className="h3 textos-bold verde-corporativo mt-4 flex gap-4">
          Ultimas obras agregadas a la tienda
        </p>

        <button
          onClick={() => navigate('/detalles-inventario')}
          className="h3 textos-peques negro border-[4px] rounded-[4px] w-[10%] bg-[#A8D1BD] border-[#A8D1BD] mt-4 flex gap-4 justify-center cursor-pointer"
        >
          Ver detalle
        </button>
      </div>

      <table className="w-full mt-1">
        <thead>
          <tr className="border-b border-grey-500">
            <th className="textos gris-elegancia p-2">ID</th>
            <th className="textos gris-elegancia p-2">ISBN</th>
            <th className="textos gris-elegancia p-2">Nombre</th>
            <th className="textos gris-elegancia p-2">Editorial</th>
            <th className="textos gris-elegancia p-2">Género</th>
            <th className="textos gris-elegancia p-2">Inducción</th>
            <th className="textos gris-elegancia p-2">Cantidad Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="textos-bold verde-eco p-2">{libro.ID}</td>
            <td className="textos-bold p-2">{libro.isbn || "N/A"}</td>
            <td className="textos-bold p-2">{libro.nombre || "N/A"}</td>
            <td className="textos-bold p-2">{libro.editorial || "N/A"}</td>
            <td className="textos-bold p-2">{libro.genero || "N/A"}</td>
            <td className="textos-bold p-2">{libro.induccion || "N/A"}</td>
            <td className="textos-bold p-2">{libro.cantidad || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      <p className="h3 negro mt-4 flex gap-4">
        <img src="/public/svg/Gestiondebodega/ventas1.svg" alt="" className="" />
        Ventas mes: {libro.Ventasmes}
      </p>
      <div className="flex justify-between">
        <p className="h3 textos-bold verde-corporativo mt-4 flex gap-4">
          Ultimas ventas hechas por la tienda
        </p>
        <button
          onClick={() => navigate('/detalles-venta')}
          className="h3 textos-peques negro border-[4px] rounded-[4px] w-[10%] bg-[#A8D1BD] border-[#A8D1BD] mt-4 flex gap-4 justify-center cursor-pointer"
        >
          Ver detalle
        </button>
      </div>

      <table className="w-full mt-1">
        <thead>
          <tr className="border-b border-grey-500">
            <th className="textos gris-elegancia p-2">ID</th>
            <th className="textos gris-elegancia p-2">ISBN</th>
            <th className="textos gris-elegancia p-2">Nombre de la obra</th>
            <th className="textos gris-elegancia p-2">Editorial</th>
            <th className="textos gris-elegancia p-2">Cantidad Total</th>
            <th className="textos gris-elegancia p-2">Precio de venta</th>
            <th className="textos gris-elegancia p-2">Costo Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="textos-bold verde-eco p-2">{libro.ID}</td>
            <td className="textos-bold p-2">{libro.isbn || "N/A"}</td>
            <td className="textos-bold p-2">{libro.nombre || "N/A"}</td>
            <td className="textos-bold p-2">{libro.editorial || "N/A"}</td>
            <td className="textos-bold p-2">{libro.genero || "N/A"}</td>
            <td className="textos-bold p-2">{libro.induccion || "N/A"}</td>
            <td className="textos-bold p-2">{libro.cantidad || "N/A"}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Tienda;
