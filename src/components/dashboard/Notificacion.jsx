import { Drawer } from "antd";
import { notificaciones } from "../Data/Dashboard/DataNotificaciones";

// Función para asignar ícono según el tipo de notificación
const getIcono = (tipo) => {
  const iconos = {
    "Bajo Inventario": "/svg/header/bajoinventario.svg",
    "Nuevo cliente registrado": "/svg/header/nuevocliente.svg",
    "Nuevo usuario asignado": "/svg/header/nuevousuario.svg",
    "Permisos actualizados": "/svg/header/permisos.svg",
  };

  return iconos[tipo] || "/svg/header/default.svg"; // Icono por defecto si no coincide
};

const Notificacion = ({ visible, onClose }) => {
  // Agrupar notificaciones por fecha
  const notificacionesAgrupadas = notificaciones.reduce((acc, notificacion) => {
    const { fecha } = notificacion;
    if (!acc[fecha]) acc[fecha] = [];
    acc[fecha].push(notificacion);
    return acc;
  }, {});

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
      <div style={{ position: "absolute", top: 35, right: 45, cursor: "pointer" }} onClick={onClose}>
        <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6" />
      </div>

      {/* Título */}
      <div className="flex items-center space-x-4 p-4 mb-[5%]">
        <h2 className="text-2xl font-semibold verde-corporativo">Notificaciones</h2>
        <img src="/svg/header/notification.svg" alt="Icono" className="w-5 h-5" />
      </div>

      {/* Renderizar notificaciones agrupadas por fecha */}
      {Object.keys(notificacionesAgrupadas).map((fecha) => (
        <div key={fecha} className="w-full px-4">
          <h3 className="h3 px-4 py-2">{fecha}</h3>
          {notificacionesAgrupadas[fecha].map(({ id, tipo, mensaje }) => (
            <div key={id} className="flex flex-col items-center space-x-4 px-4 mb-4">
              <div className="flex items-center p-4 bg-white rounded-lg border w-full">
                {/* Icono dinámico basado en el tipo */}
                <div className="flex items-center justify-center w-[15%]">
                  <img src={getIcono(tipo)} alt={tipo} />
                </div>

                {/* Contenido */}
                <div className="ml-4">
                  <p className="h3 gris-urbano">{tipo}</p>
                  <p className="gris-urbano textos">{mensaje}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </Drawer>
  );
};

export default Notificacion;
