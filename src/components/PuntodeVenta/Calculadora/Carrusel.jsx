import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PrArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
        <img src="/svg/PuntodeVenta/prcalculadora.svg" alt="Flecha" className="mt-[-4%]" />
      </div>
    );
  }

function NxArrow(props) {
const { className, style, onClick } = props;
return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
    <img src="/svg/PuntodeVenta/nxcalculadora.svg" alt="Flecha" className="mt-[-4%]" />
    </div>
);
}

function Carrusel() {
    const settings = {
        dots: false,
        infinite: false,
        
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NxArrow />,
        prevArrow: <PrArrow />,
    };

    return (
        <div className="slider-calculadora flex-row">
            <Slider {...settings}>
                    <div className="flex flex-row">
                        <button className="textos rounded-[3px] text-center gris-urbano bg-[#DADADA] p-1">
                            $2k
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button className="textos rounded-[3px] text-center gris-urbano bg-[#DADADA] p-1">
                            $5k
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button className="textos rounded-[3px] text-center gris-urbano bg-[#DADADA] p-1">
                            $10k
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button className="textos rounded-[3px] text-center gris-urbano bg-[#DADADA] p-1">
                            $20k
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button className="textos rounded-[3px] text-center gris-urbano bg-[#DADADA] p-1">
                            $50k
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button className="textos rounded-[3px] text-center gris-urbano bg-[#DADADA] p-1">
                            $100k
                        </button>
                    </div>
            </Slider>
        </div>
    );
}

export default Carrusel;
