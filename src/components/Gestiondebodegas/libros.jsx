import React, { useState } from "react";
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

function Libros() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
  };

  const [currentPage] = useState(1);
  const itemsPerPage = 10; // Elementos por página

  // Calcular los índices para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Datalibro.slice(startIndex, endIndex);

  return (
    <div className="relative">
      <div className="slider-container relative">
        <Slider {...settings}>
          <div className="slide">
            {currentItems.map((item, index) => (
              <div className='gap-2 flex' key={index}>
                <img src={item.imagenlibro} alt="Libro" className='w-[32%]' />
                <div className="flex flex-col !gap-y-[3%] mt-[3%]">
                  <p className='w-full h3 blanco'>{item.Nombredelatienda}</p>
                  <p className='textos-bold w-full blanco flex items-center gap-2'>
                    <img src="/public/svg/Gestiondebodega/local.svg" alt="inventario" className="w-4 h-4" />
                    {item.Local}</p>
                  <p className='textos-bold w-full blanco flex items-center gap-2'>
                    <img src="/public/svg/Gestiondebodega/inventario.svg" alt="inventario" className="w-4 h-4" />
                    Inventario: {item.Inventario}
                  </p>
                  <p className='textos-bold w-full blanco flex items-center gap-2'>
                    <img src="/public/svg/Gestiondebodega/ventas.svg" alt="inventario" className="w-4 h-4" />
                    Ventas mes: {item.Ventasmes}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="slide">
            <p></p>
          </div>
          <div className="slide">
            <p></p>
          </div>
        </Slider>
      </div>

      <img
        src="/images/degrade carrusel.png" alt="" className="absolute top-0 ml-[1100px]" />
    </div>
  );
}


export default Libros;