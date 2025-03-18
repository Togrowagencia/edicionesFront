import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Datalibro from "../Data/GestiondeObras/Data";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <img src="/images/flechacarrusel.png" alt="Flecha" className="mt-[-4%]" />
    </div>
  );
}

function Libros({ setLibroSeleccionado }) { // Recibe setLibroSeleccionado como prop
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: <SampleArrow />,
  };

  return (
    <div className="relative">
      {/* Carrusel */}
      <div className="slider-container relative">
        <Slider {...settings}>
          {Datalibro.map((item, index) => (
            <div className="slide" key={index}>
              <div className="gap-2 flex">
                <img
                  src={item.imagenlibro}
                  alt="Libro"
                  className="w-[32%] cursor-pointer"
                  onClick={() => setLibroSeleccionado(item)} // Actualiza el estado en GestiondeBodegas
                />
                <div className="flex flex-col !gap-y-[3%] mt-[3%]">
                  <p className="w-full h3 blanco">{item.Nombredelatienda}</p>
                  <p className="textos-bold w-full blanco flex items-center gap-2">
                    <img src="/public/svg/Gestiondebodega/local.svg" alt="local" className="w-4 h-4" />
                    {item.Local}
                  </p>
                  <p className="textos-bold w-full blanco flex items-center gap-2">
                    <img src="/public/svg/Gestiondebodega/inventario.svg" alt="inventario" className="w-4 h-4" />
                    Inventario: {item.Inventario}
                  </p>
                  <p className="textos-bold w-full blanco flex items-center gap-2">
                    <img src="/public/svg/Gestiondebodega/ventas.svg" alt="ventas" className="w-4 h-4" />
                    Ventas mes: {item.Ventasmes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Libros;