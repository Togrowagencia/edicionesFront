import { Drawer } from "antd";
import { transferencias } from "../Data/Dashboard/DataCarrito";

const Carrito = ({ visible, onClose }) => {
  // Filtrar transferencias por estado
  const pendientes = transferencias.filter((t) => t.estado === "Pendiente");
  const recibidas = transferencias.filter((t) => t.estado === "Recibido");

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={visible}
      width={555}
      closable={false}
      bodyStyle={{ padding: "16px" }}
      drawerStyle={{ borderRadius: "10px", height: "100%" }}
    >
      {/* Botón de cierre */}
      <div
        style={{ position: "absolute", top: 35, right: 45, cursor: "pointer" }}
        onClick={onClose}
      >
        <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6" />
      </div>

      {/* Título */}
      <div className="flex items-center space-x-4 p-4 mb-[5%]">
        <h2 className="text-2xl font-semibold verde-corporativo">Confirmaciones de llegada</h2>
        <img src="/svg/header/carrito.svg" alt="Icono" />
      </div>

      {/* Sección de pendientes */}
      {pendientes.length > 0 && (
        <div className="w-full px-4">
          <h3 className="negro h3 py-2 px-4">Pendientes de llegada</h3>
          {pendientes.map(({ id, origen, cantidad, estado }) => (
            <div key={id} className="flex flex-col items-center px-4 mb-4 w-full">
              <div className="flex items-center p-4 bg-white rounded-lg border w-full">
                {/* Icono */}
                <div className="flex items-center justify-center w-[25%]">
                  <img src="/svg/header/central.svg" alt="Pendiente" />
                </div>

                {/* Info */}
                <div className="mx-4 w-full">
                  <p className="gris-urbano h4">Desde {origen}</p>
                  <p className="verde-corporativo textos">Cantidad de obras pendientes</p>
                  <p className="blanco bg-[#5FB868] w-fit px-2 textos-bold rounded-[3px]">
                    {cantidad}
                  </p>
                </div>

                {/* Estado */}
                <div className="flex flex-col items-end justify-end w-auto gap-7">
                  <span className="bg-yellow-400 negro py-0.5 rounded-[3px] textos-peques px-3">
                    {estado}
                  </span>
                  <img src="/public/svg/vector(2).svg" alt="Flecha" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sección de recibidas */}
      {recibidas.length > 0 && (
        <div className="w-full px-4">
          <h3 className="negro h3 py-2 px-4">Recibido</h3>
          {recibidas.map(({ id, origen, cantidad, estado }) => (
            <div key={id} className="flex flex-col items-center px-4 mb-4 w-full">
              <div className="flex items-center p-4 bg-white rounded-lg border w-full">
                {/* Icono */}
                <div className="flex items-center justify-center w-[25%]">
                  <img src="/svg/header/desdeotra.svg" alt="Recibido" />
                </div>

                {/* Info */}
                <div className="mx-4 w-full">
                  <p className="gris-urbano h4">Desde {origen}</p>
                  <p className="verde-corporativo textos">Cantidad de obras recibidas</p>
                  <p className="blanco bg-[#5FB868] w-fit px-2 textos-bold rounded-[3px]">
                    {cantidad}
                  </p>
                </div>

                {/* Estado */}
                <div className="flex flex-col items-end justify-end w-auto gap-7">
                  <span className="bg-green-700 blanco py-0.5 rounded-[3px] textos-peques px-3">
                    {estado}
                  </span>
                  <img src="/public/svg/vector(2).svg" alt="Flecha" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Drawer>
  );
};

export default Carrito;
