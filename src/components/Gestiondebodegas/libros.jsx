import React, { useState, useRef, useEffect } from "react";
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
  const [portalStyle, setPortalStyle] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemPositions, setItemPositions] = useState({});
  const sliderRef = useRef(null);
  const animationTimeoutRef = useRef(null);
  const pendingAnimationRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: <SampleArrow />,
    beforeChange: (current, next) => setStartIndex(next),
    ref: sliderRef,
  };

  // Función para obtener la posición de un elemento
  const getClickedElementPosition = (element) => {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
    };
  };

  // Función que maneja toda la lógica de animación
  const handleAnimation = (clickedPosition, item) => {
    // Si es el primer item (no hay ninguno seleccionado actualmente)
    if (!selectedItem) {
      animateEntrada(clickedPosition, item);
      return;
    }

    // Guardar el item actual y su posición para animar su salida
    const currentItem = selectedItem;
    const currentItemPosition = itemPositions[currentItem.id];

    // Guardar información del nuevo item
    // Actualizar el mapa de posiciones con la posición del ítem clickeado
    setItemPositions(prev => ({
      ...prev,
      [item.id]: clickedPosition
    }));

    // Primero animamos la salida del ítem actual
    setPortalStyle(prevStyle => ({
      ...prevStyle,
      top: `${currentItemPosition.top}px`,
      left: `${currentItemPosition.left}px`,
      width: `${currentItemPosition.width}px`,
      transform: "scale(1)",
      transition: "all 0.6s ease-out",
    }));

    // Esperamos a que termine la animación de salida antes de animar la entrada del nuevo
    clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => {
      // Terminó la animación de salida, ahora animar la entrada del nuevo
      animateEntrada(clickedPosition, item);
    }, 650);
  };

  // Animación de entrada para un ítem
  const animateEntrada = (position, item) => {
    // Guardar posición del ítem clickeado para futuras animaciones
    setItemPositions(prev => ({
      ...prev,
      [item.id]: position
    }));
    
    // Estilo inicial desde la posición del elemento clickeado
    const initialStyle = {
      position: "fixed",
      top: `${position.top}px`,
      left: `${position.left}px`,
      width: `${position.width}px`,
      transform: "scale(1)",
      transition: "none", // Sin transición inicial
      zIndex: 1000,
    };

    // Aplicar estilo inicial y actualizar el ítem seleccionado
    setPortalStyle(initialStyle);
    setSelectedItem(item);
    setLibroSeleccionado(item);

    // Forzar un re-render para aplicar el estilo inicial
    requestAnimationFrame(() => {
      // Transición a la posición final
      setPortalStyle(prevStyle => ({
        ...prevStyle,
        top: "12vh",
        left: "32vw",
        width: "250px",
        transform: "translate(-50%, 0) scale(1.8)",
        transition: "all 0.6s ease-out",
      }));
      
      // Terminamos la animación
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        
        // Si hay una animación pendiente, ejecutarla
        if (pendingAnimationRef.current) {
          const { position, item } = pendingAnimationRef.current;
          pendingAnimationRef.current = null;
          handleAnimation(position, item);
        }
      }, 650);
    });
  };

  // Manejo del clic en una imagen
  const handleImageClick = (e, item) => {
    // Evitar clic en el mismo ítem
    if (selectedItem?.id === item.id) return;
    
    const clickedPosition = getClickedElementPosition(e.currentTarget);
    
    // Si hay una animación en progreso, guardar esta para después
    if (isAnimating) {
      pendingAnimationRef.current = { position: clickedPosition, item };
      return;
    }
    
    // Marcar que estamos animando
    setIsAnimating(true);
    
    // Iniciar la secuencia de animación
    handleAnimation(clickedPosition, item);
  };

  // Limpieza al desmontar
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="slider-container relative">
        <Slider {...settings}>
          {datos.map((item, index) => (
            <div className="slide relative" key={index}>
              <div className="gap-2 flex relative">
                <img
                  src={baseurl2 + item.file}
                  alt="Libro"
                  className="w-[32%] cursor-pointer transition-transform duration-500"
                  onClick={(e) => handleImageClick(e, item)}
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
              {index === (startIndex + 2) % datos.length && <div className="degradado-carrusel"></div>}
            </div>
          ))}
        </Slider>

        {portalStyle && selectedItem &&
          ReactDOM.createPortal(
            <img
              className="libro-portal"
              src={baseurl2 + selectedItem.file}
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