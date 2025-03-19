import React, { useState,useEffect} from "react";
import Slider from "react-slick";
import { baseurl2 } from "../../utils/baseurl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Datalibro from "../Data/GestiondeBodegas/Data";
import { getWarehouses } from "../../api/warehouse"; 
function SampleArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <img src="/images/flechacarrusel.png" alt="Flecha" className="mt-[-4%]" />
    </div>
  );
}

function Libros({ setLibroSeleccionado }) {
  const [startIndex, setStartIndex] = useState(0); 
  const [warehouse, setwarehouse] = useState([]);
  useEffect(() => {
    const fetchwarehouse = async () => {
      
      try {
        const response = await getWarehouses();
        setwarehouse(response.data); 
        console.log(warehouse)// Esto actualiza el estado de `warehouse`
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchwarehouse();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: <SampleArrow />,
    beforeChange: (current, next) => {
      console.log("Nuevo índice de inicio:", next);
      setStartIndex(next);
    },
  };

  return (
    <div className="relative">
      <div className="slider-container relative">
        <Slider {...settings}>
          {warehouse.map((item, index) => {
            const isThirdVisible = index === (startIndex + 2) % warehouse.length; // Ajuste para el tercer ítem visible en 4 

            console.log(`Índice: ${index} | Tercer visible: ${isThirdVisible}`);

            return (
              <div className="slide relative" key={index}>
                <div className="gap-2 flex relative">
                  <img
                    src={ baseurl2+item.file}
                    alt="Libro"
                    className="w-[32%] cursor-pointer"
                    onClick={() => setLibroSeleccionado(item)}
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

                {/* Aplica el degradado solo al tercer ítem visible */}
                {isThirdVisible && (
                  <div className="degradado-carrusel"></div>
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Libros;
