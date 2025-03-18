import PropTypes from "prop-types";

function Tienda({ libro }) {
  if (!libro) {
    return <p className="text-white text-center mt-4">Selecciona un libro para ver los detalles</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-2">{libro.Nombredelatienda}</h2>
      <p className="text-green-500">{libro.Local}</p>

      <h3 className="font-semibold mt-4">Inventario de tienda: {libro.Inventario} obras</h3>
      <table className="w-full border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">ISBN</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Editorial</th>
            <th className="border p-2">Género</th>
            <th className="border p-2">Inducción</th>
            <th className="border p-2">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border p-2">{libro.ID}</td>
            <td className="border p-2">{libro.isbn || "N/A"}</td>
            <td className="border p-2">{libro.nombre || "N/A"}</td>
            <td className="border p-2">{libro.editorial || "N/A"}</td>
            <td className="border p-2">{libro.genero || "N/A"}</td>
            <td className="border p-2">{libro.induccion || "N/A"}</td>
            <td className="border p-2">{libro.cantidad || "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Tienda.propTypes = {
  libro: PropTypes.shape({
    Nombredelatienda: PropTypes.string,
    Local: PropTypes.string,
    Inventario: PropTypes.number,
    ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isbn: PropTypes.string,
    nombre: PropTypes.string,
    editorial: PropTypes.string,
    genero: PropTypes.string,
    induccion: PropTypes.string,
    cantidad: PropTypes.number,
  }),
};

export default Tienda;
