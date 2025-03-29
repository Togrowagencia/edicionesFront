import React, { useState } from "react";
import Carrito from "../dashboard/Carrito";
import Estado from "../dashboard/PopUps/Estado";
import DetalleEstado from "../dashboard/PopUps/DetalleEstado";

const IconCarrito = () => {
    const [activePopup, setActivePopup] = useState(null); // 'carrito', 'estado', 'detalle'
  
    return (
      <>
        <img 
          src="/svg/header/carrito.svg" 
          alt="Carrito" 
          onClick={() => setActivePopup("carrito")} 
          className="cursor-pointer" 
        />
  
        {/* Carrito - Primer nivel */}
        <Carrito 
          visible={activePopup === "carrito"} 
          onClose={() => setActivePopup(null)}
          onOpenNextPopup={() => setActivePopup("estado")}
        />

        {/* Popup Estado */}
      <Estado 
        isPopupOpen={activePopup === "estado"} 
        handlePopupClose={() => setActivePopup(null)} // Cierra completamente
        onOpenNextPopup={() => setActivePopup("detalle")} // Navega directo a DetalleEstado
      />
  
        {/* DetalleEstado - Tercer nivel */}
        <DetalleEstado 
          isOpen={activePopup === "detalle"} 
          onClose={() => setActivePopup("estado")}
        />
      </>
    );
  };
  
  export default IconCarrito;