import DataAO from "../../Data/DataAO";
export const TablaAO = ({ datos }) => {
  return (
    <div className="w-[1340px]">
      <div className="">
        <table className="w-full">
          {/* Encabezados de la tabla */}
          <thead>
            <tr className="border-b border-grey-500 h-[10%] items-end">
              <th className="text-left gris-urbano p-2 textos">ID</th>
              <th className="text-left gris-urbano p-2 textos">ISBN</th>
              <th className="text-left gris-urbano p-2 textos">
                Nombre de la obra
              </th>
              <th className="text-left gris-urbano p-2 textos">Editorial</th>
              <th className="text-left gris-urbano p-2 textos">Costo</th>
              <th className="text-left gris-urbano p-2 textos">Proveedor</th>
              <th className="text-left gris-urbano p-2 textos">
                Cantidad total
              </th>
              <th className="text-left gris-urbano p-2 textos">Costo total</th>
              <th className="text-left gris-urbano p-2 textos">
                Editar/Eliminar
              </th>
            </tr>
          </thead>

          {/* Filas de datos */}
          <tbody>
            {datos.map((item, index) => (
              <tr key={index} className="mb-5 mt-[10px]">
                <td className="textos-bold verde-eco truncate p-2">
                  {item.isbn}
                </td>
                <td className="textos-bold truncate p-2">{item.isbn}</td>
                <td className="textos-bold truncate p-2">
                  {item.name}
                </td>
                <td className="textos-bold truncate p-2">
                  {item.name_publishing}
                </td>
               
                <td className="textos-bold truncate p-2">{item.cost}</td>
                <td className="textos-bold truncate p-2">
                  {item["Proveedor"]}
                </td>
                <td className="textos-bold truncate p-2">
                  {item.quantity}
                </td>
                <td className="textos-bold truncate p-2">
                  {item["Costo-total"]}
                </td>
                <td className="flex gap-6 mx-5 my-1">
                  <img src="/svg/editar.svg" alt="" />
                  <img src="/svg/eliminar.svg" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center py-[30px] justify-start w-full">
        <div className="flex items-center gap-2 bg-[#EEE] p-2 rounded-[3px] justify-end w-auto">
          <img src="/svg/popup-ao/NDLO.svg" alt="" />
          <p className="textos negro">
            Cantidad total <span className="textos-bold mx-3">450</span>
          </p>
          <img src="/svg/total (2).svg" alt="" className="ml-6" />
          <p className="textos negro">
            Cantidad total <span className="textos-bold">$8,405,393</span>
          </p>

        </div>
      </div>
    </div>
  );
};
