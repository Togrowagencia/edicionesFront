import DataAO from "../../Data/DataAO"
export const TablaAO = ()=>{
return(
    <div className="w-[1385px]">
    <table className="w-full">
      {/* Encabezados de la tabla */}
      <thead>
        <tr className="border-b border-grey-500 h-[10%] items-end">
          <th className="text-left gris-urbano p-2 textos">ID</th>
          <th className="text-left gris-urbano p-2 textos">ISBN</th>
          <th className="text-left gris-urbano p-2 textos">
            Nombre de la obra
          </th>
          <th className="text-left gris-urbano p-2 textos">
            Editorial
          </th>
          <th className="text-left gris-urbano p-2 textos">Genero</th>
          <th className="text-left gris-urbano p-2 textos">Costo</th>
          <th className="text-left gris-urbano p-2 textos">
            Inducción
          </th>
          <th className="text-left gris-urbano p-2 textos">
            Proveedor
          </th>
          <th className="text-left gris-urbano p-2 textos">
            Cantidad total
          </th>
          <th className="text-left gris-urbano p-2 textos">
            Costo total
          </th>
          <th className="text-left gris-urbano p-2 textos">
            Editar/Eliminar
          </th>
        </tr>
      </thead>

      {/* Filas de datos */}
      <tbody>
        {DataAO.map((item, index) => (
          <tr key={index} className="mb-5 mt-[10px]">
            <td className="textos-bold verde-eco truncate p-2">
              {item.ID}
            </td>
            <td className="textos-bold truncate p-2">{item.ISBN}</td>
            <td className="textos-bold truncate p-2">
              {item["Nombre de la obra"]}
            </td>
            <td className="textos-bold truncate p-2">
              {item["Editorial"]}
            </td>
            <td className="textos-bold truncate p-2">
              {item["Genero"]}
            </td>
            <td className="textos-bold truncate p-2">
              {item["Costo"]}
            </td>
            <td className="textos-bold truncate p-2">
              {item["Induccion"]}
            </td>
            <td className="textos-bold truncate p-2">
              {item["Proveedor"]}
            </td>
            <td className="textos-bold truncate p-2">
              {item["Cantidad-total"]}
            </td>
            <td className="textos-bold truncate p-2">
              {item["Costo-total"]}
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
)
}