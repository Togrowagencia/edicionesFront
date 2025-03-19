import React from 'react';
import { Drawer } from 'antd';

const Calculadora = ({
    isOpen,
    onClose,
    total,
    subtotal,
    IVA,
    descuento,
}) => {

    return (
        <div className='drawer-calculadora'>
        <Drawer
            placement="left"
            onClose={onClose}
            open={isOpen}
            width={462}
            closable={false}
            bodyStyle={{ padding: "16px" }}
            drawerStyle={{ borderRadius: "10px 10px 10px 10px" }}
        >
            {/* Botón de cierre personalizado */}
            <div
                style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer', }} onClick={onClose}>
                <img src="/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6" />
            </div>

            <div className='grid grid-cols-2 gap-4 py-10'>

                {/* Columna numero 1 */}
                <div className="flex flex-col gap-4">
                    <p className="textos-bold gris-elegancia">
                        Subtotal
                    </p>
                    <p className="h4 negro">
                        ${total?.toLocaleString()}
                    </p>
                    <p className="textos-bold gris-elegancia">
                        IVA 19%
                    </p>
                    <p className="h4 negro">
                        ${subtotal?.toLocaleString()}
                    </p>
                    <p className="textos-bold gris-elegancia">
                        Descuento
                    </p>
                    <p className="h4 negro">
                        ${IVA?.toLocaleString()}
                    </p>
                    <p className="h4 negro">
                        ${descuento?.toLocaleString()}
                    </p>

                </div>

                {/* Columna numero 2 */}
                <div className="flex flex-col gap-4">
                    <h3 className="h3 verde-corporativo">
                        Total a pagar: ${total?.toLocaleString()}
                    </h3>
                    <div className="flex flex-col gap-2">
                        <label className="textos-bold gris-elegancia">Monto recibido</label>
                        <input
                            type="number"
                            className="w-full p-2 border rounded focus:outline-none focus:border-[#00733C]"
                            placeholder="Ingrese el monto"
                        />
                    </div>
                    <button className="w-full bg-[#00733C] text-white p-2 rounded">
                        Procesar pago
                    </button>
                </div>
            </div>
        </Drawer>
        </div>
    );
};

export default Calculadora;