import React, { useState } from "react";
import Carrito from "../dashboard/Carrito";

const IconCarrito = () => {
    const [carritoVisible, setCarritoVisible] = useState(false);


    const showCarrito = () => {
        setCarritoVisible(true);
    };

    const closeCarrito = () => {
        setCarritoVisible(false);
    };

    return (
        <>
            <img
                src="/svg/header/carrito.svg"
                alt="Carrito"
                onClick={showCarrito}
                className="cursor-pointer"
            />
            <Carrito visible={carritoVisible} onClose={closeCarrito} />
        </>
    );
};

export default IconCarrito;