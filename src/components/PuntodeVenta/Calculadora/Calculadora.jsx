import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import Carrusel from "./Carrusel.jsx";

const Calculadora = ({ isOpen, onClose, total, subtotal, IVA, descuento }) => {
  const [input, setInput] = useState("");
  const [savedValue, setSavedValue] = useState(null);

  useEffect(() => {
    setSavedValue(null); // Reiniciar el resultado al abrir
    setInput(""); // Reiniciar el input
  }, [isOpen]);

  const handleClick = (value) => {
    if (value === "." && (input.includes(".") || input === "")) return; 
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    const inputValue = parseFloat(input) || 0;
    const result = inputValue === 0 ? 0 : inputValue - (total || 0);
    setSavedValue(result);
  };

  return (
    <Drawer
      rootClassName="drawer-calculadora"
      placement="right"
      onClose={onClose}
      open={isOpen}
      width={518}
      closable={false}
      bodyStyle={{
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "13px",
      }}
      drawerStyle={{ borderRadius: "10px 10px 10px 10px" }}
    >
      <div
        style={{ position: "absolute", top: 20, right: 20, cursor: "pointer" }}
        onClick={onClose}
      >
        <img
          src="/svg/PuntodeVenta/cerrarcal.svg"
          alt=""
          className="cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 py-3 h-[100%]">
        <div className="flex flex-col gap-4 py-10 px-6 rounded-[10px] h-[390px] bg-[url('/public/images/fondocalculadora.svg')] bg-cover bg-center bg-no-repeat">
          <p className="textos-bold gris-elegancia">Subtotal</p>
          <p className="h4 negro">${subtotal?.toLocaleString()}</p>
          <p className="textos-bold gris-elegancia">IVA 19%</p>
          <p className="h4 negro">${IVA?.toLocaleString()}</p>
          <p className="textos-bold gris-elegancia">Descuento</p>
          <p className="h4 negro">${descuento?.toLocaleString()}</p>
          <p className="textos-bold gris-elegancia">Total</p>
          <p className="h4 negro">${total?.toLocaleString()}</p>
          <p className="h4 verde-corporativo">Devolver</p>
          {savedValue !== null && (
            <p className="h4 verde-corporativo">
              ${savedValue.toLocaleString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 h-[350px]">
          <div className="flex w-full justify-center">
            <div className="flex bg-[#00733C] w-auto py-1 px-2 gap-2 rounded-[3px]">
              <img src="/svg/PuntodeVenta/efectivo-selected.svg" alt="" />
              <h3 className="blanco textos">Efectivo</h3>
            </div>
          </div>

          <input
            type="text"
            value={input}
            readOnly
            placeholder={total?.toLocaleString()}
            className="w-full text-center h3 gris-urbano"
          />

          <Carrusel onValueSelect={handleClick} />

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "borrar"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  item === "borrar" ? handleDelete() : handleClick(item.toString())
                }
                className="px-4 py-[1px] h2"
              >
                {item === "borrar" ? (
                  <img src='/svg/PuntodeVenta/borrarcal.svg' alt="" className="ml-2" />
                ) : (
                  item
                )}
              </button>
            ))}
          </div>

          <div className="flex w-full justify-center">
            <button
              onClick={handleCalculate}
              className="w-[70%] bg-[#00733C] blanco p-2 h4 rounded-[10px]"
            >
              Pagar ahora
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Calculadora;
