import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Datalibro from "../Data/GestiondeObras/Data";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <img src="/images/flechacarrusel.png" alt="Flecha" className="mt-[-4%]"/>
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
          <div className="slide blanco h3 ">
          {
      currentItems.map((item, index) => (
        <div className='gap-2'key={index}>  
          <p className='textos-bold w-[30%] ml-[12px] truncate'>{item["imagen-libro"]}</p>
          <p className='textos-bold w-[30%] ml-[12px] truncate'>{item["Nombre-de-la-tienda"]}</p>
          <p className='textos-bold w-[26%] ml-[75px] truncate'>{item.Local}</p>
          <p className='textos-bold w-[22%] truncate'>{item.Inventario}</p>
          <p className='textos-bold w-[22%] truncate'>{item["Ventas-mes"]}</p>
        </div>
      ))
    }
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
        src="/images/degrade carrusel.png" alt="" className="absolute top-0 ml-[1100px]"/>
    </div>
  );
}


export default Libros;