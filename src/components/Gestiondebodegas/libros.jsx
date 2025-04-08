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
  const [portalStyle, setPortalStyle] = useState(null);

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

  const handleImageClick = (e, index, item) => {
    const rect = e.target.getBoundingClientRect();

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
  };

  return (
    <div className="relative">
      <div className="slider-container relative">
        <Slider {...settings}>
          {datos.map((item, index) => {
            const pos1 = startIndex % datos.length;
            const pos2 = (startIndex + 1) % datos.length;
            const pos3 = (startIndex + 2) % datos.length;

            const isFirstVisible = index === pos1;
            const isSecondVisible = index === pos2;
            const isThirdVisible = index === pos3;

            return (
              <div className="slide relative" key={index}>
                <div className="gap-2 flex relative">
                  <img
                    src={baseurl2 + item.file}
                    alt="Libro"
                    className="w-[32%] cursor-pointer transition-transform duration-500"
                    onClick={(e) => handleImageClick(e, index, item)}
                  />
                  <div className="flex flex-col !gap-y-[3%] mt-[3%]">
                    <p className="w-full h3 blanco">{item.name}</p>
                    <p className="textos-bold w-full blanco flex items-center gap-2">
                      <img src="/public/svg/Gestiondebodega/local.svg" alt="local" className="w-4 h-4" />
                      {item.address}
                    </p>
                    <p className="textos-bold w-full blanco flex items-center gap-2">
                      <img src="/public/svg/Gestiondebodega/inventario.svg" alt="inventario" className="w-4 h-4" />
                      Inventario: {item.total}
                    </p>
                    <p className="textos-bold w-full blanco flex items-center gap-2">
                      <img src="/public/svg/Gestiondebodega/ventas.svg" alt="ventas" className="w-4 h-4" />
                      Ventas mes: {item.Ventasmes}
                    </p>
                  </div>
                </div>
                {isThirdVisible && <div className="degradado-carrusel"></div>}
              </div>
            );
          })}
        </Slider>

        {/* Portal para mostrar imagen animada y fija */}
        {portalStyle && libroSeleccionadoIndex !== null &&
          ReactDOM.createPortal(
            <img
              src={baseurl2 + datos[libroSeleccionadoIndex].file}
              alt="Libro Seleccionado"
              style={portalStyle}
            />,
            document.body
          )}
      </div>
    </div>
  );
}

export default Libros;
