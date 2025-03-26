import React, { useState } from "react";
import Fecha from "../../../public/svg/DetallesVentas/fecha"

function Banner() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedStore, setSelectedStore] = useState(
        "Tienda florida parque comercial"
    );

    const stores = [
        "Tienda florida parque comercial",
        "Tienda centro",
        "Tienda norte",
        "Tienda sur",
    ];

    const handleSelect = (store) => {
        setSelectedStore(store);
        setIsOpen(false);
    };

    return (
        <div className="w-[100%] h-[100%] bg-cover bg-[#D55665] relative flex items-center bg-[url('/images/banneregresos.png')] bg-center rounded-[24px] px-8 py-6 my-4">
            <div className="relative text-left">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h2 blanco flex items-center"
                >
                    {selectedStore}
                    <span className="ml-1">▼</span>
                </button>

                {isOpen && (
                    <div className="absolute left-0 mt-5 w-48 bg-white border rounded shadow-lg z-50">
                        {stores.map((store, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect(store)}
                                className="block w-full text-left px-4 py-2 hover:bg-green-400"
                            >
                                {store}
                            </button>
                        ))}
                    </div>
                )}
                <div className="flex gap-1">
                    <img src="/svg/egresos.svg" alt="" />
                    <p className="blanco h3">Egresos del mes:</p>
                </div>
                <div className="bg-white w-[90%] rounded-[5px] flex gap-2 py-1 px-2 items-center my-3">
                    <Fecha color="#D55665"/>
                    <p className="w-full">Total ingresos vs el último mes</p>
                    <div className="flex justify-end w-[20%]">
                        <p className="bg-[#D55665] rounded-[5px] blanco px-2 ">+74.12%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
