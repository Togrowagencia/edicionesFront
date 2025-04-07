import React, { useState } from "react";
import Slider from "react-slick";
import { baseurl2 } from "../../utils/baseurl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from "react-dom";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <img src="/images/flechacarrusel.png" alt="Flecha" className="mt-[-4%]" />
    </div>
  );
}

function Libros({ setLibroSeleccionado, datos }) {
  const [startIndex, setStartIndex] = useState(0);
  const [libroSeleccionadoIndex, setLibroSeleccionadoIndex] = useState(null);
  // Estado para manejar el portal y sus estilos (la imagen animada)
  const [portalStyle, setPortalStyle] = useState(null);
  const [showPortal, setShowPortal] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: <SampleArrow />,
    beforeChange: (current, next) => {
      setStartIndex(next);
    },
  };

  // Flujo de animación:
  // 1. Al hacer clic se mide la posición de la imagen.
  // 2. Se guarda un estilo inicial en el portal (posición exacta de la miniatura).
  // 3. En el siguiente frame se actualiza el estilo con el estado destino.
  // 4. Gracias a la propiedad "transition" se anima suavemente.
  const handleImageClick = (e, index, item) => {
    const rect = e.target.getBoundingClientRect();

    // Estilo inicial (punto A) basado en la posición de la miniatura.
    const initialStyle = {
      position: "fixed",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      transform: "scale(1)",
      transition: "all 0.6s ease-out",
      zIndex: 1000,
    };

    setPortalStyle(initialStyle);
    setLibroSeleccionadoIndex(index);
    setLibroSeleccionado(item);
    setShowPortal(true);

    // En el siguiente frame, actualizamos el estilo a la posición destino (punto B).
    requestAnimationFrame(() => {
      setPortalStyle({
        position: "fixed",
        top: "22vh",
        left: "30vw",
        width: "250px",
        transform: "translate(-50%, 0) scale(1.8)",
        transition: "all 0.6s ease-out",
        zIndex: 1000,
      });
    });

    // Opcional: una vez que termine la animación (0.6s), se oculta el portal.
    setTimeout(() => {
      setShowPortal(false);
    }, 600);
  };

  return (
    <div className="relative">
      <div className="slider-container relative">
        <Slider {...settings}>
          {datos.map((item, index) => {
            // Calculamos los ítems visibles (aquí se conserva la lógica de posiciones)
            const pos1 = startIndex % datos.length;
            const pos2 = (startIndex + 1) % datos.length;
            const pos3 = (startIndex + 2) % datos.length;
            const isSelected = index === libroSeleccionadoIndex;

            let imgClass = "w-[32%] cursor-pointer transition-transform duration-500";

            return (
              <div className="slide relative" key={index}>
                <div className="gap-2 flex relative">
                  {/* Si es el libro seleccionado, no lo mostramos en el carrusel (se anima vía portal) */}
                  {(!isSelected || !showPortal) && (
                    <img
                      src={baseurl2 + item.file}
                      alt="Libro"
                      className={imgClass}
                      onClick={(e) => handleImageClick(e, index, item)}
                    />
                  )}
                  <div className="flex flex-col !gap-y-[3%] mt-[3%]">
                    <p className="w-full h3 blanco">{item.name}</p>
                    <p className="textos-bold w-full blanco flex items-center gap-2">
                      <img
                        src="/public/svg/Gestiondebodega/local.svg"
                        alt="local"
                        className="w-4 h-4"
                      />
                      {item.address}
                    </p>
                    <p className="textos-bold w-full blanco flex items-center gap-2">
                      <img
                        src="/public/svg/Gestiondebodega/inventario.svg"
                        alt="inventario"
                        className="w-4 h-4"
                      />
                      Inventario: {item.total}
                    </p>
                    <p className="textos-bold w-full blanco flex items-center gap-2">
                      <img
                        src="/public/svg/Gestiondebodega/ventas.svg"
                        alt="ventas"
                        className="w-4 h-4"
                      />
                      Ventas mes: {item.Ventasmes}
                    </p>
                  </div>
                </div>
                {/* Si fuera necesario, conserva el degradado para el tercer ítem visible */}
                {index === pos3 && <div className="degradado-carrusel"></div>}
              </div>
            );
          })}
        </Slider>

        {/* Portal: la imagen que se anima desde su posición original hasta el destino */}
        {showPortal &&
          portalStyle &&
          libroSeleccionadoIndex !== null &&
          ReactDOM.createPortal(
            <img
              src={baseurl2 + datos[libroSeleccionadoIndex].file}
              alt="Libro"
              style={portalStyle}
            />,
            document.body
          )}
      </div>
    </div>
  );
}

export default Libros;
