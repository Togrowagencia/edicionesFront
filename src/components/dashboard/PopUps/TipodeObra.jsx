import React from 'react';
import { Drawer } from 'antd';

const TipodeObra = ({ isOpen, onClose }) => {
  return (
    <Drawer
      placement="right"
      onClose={onClose} // Al cerrar, ejecuta la función que reabre PopupAO
      open={isOpen}
      width={1483}
      closable={false}
      headerStyle={{ display: "none" }}
      drawerStyle={{ borderRadius: "10px 10px 10px 10px" }}
    >
      {/* Contenido del Drawer */}
      <div className="flex flex-col items-center p-4">
        <h2 className="h3 verde-corporativo">Tipo de Obra</h2>
        
        {/* Botón de cierre */}
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={onClose}
        >
          <img
            src="/public/svg/cerrar.svg"
            alt="Cerrar"
            className="w-6 h-6"
          />
        </div>

        {/* Contenido personalizado aquí */}
      </div>
    </Drawer>
  );
};

export default TipodeObra;