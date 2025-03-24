import PropTypes from "prop-types";
import { useState } from "react";

const OlvidoContraseña = ({ setActiveComponent }) => {
  const [correo, setCorreo] = useState("");

  return (
    <>
      <div className="div-encabezado text-start">
        <p className="h2 negro">Recuperar Contraseña</p>
        <p className="textos gris-urbano my-1">
          Ingresa tu correo y te enviaremos un enlace para restablecer tu
          contraseña.
        </p>
      </div>

      <form className="px-4 w-[70%]">
        <div className="w-full max-w-sm min-w-[40%]">
          <div className="relative my-5">
            <input
              id="correo"
              className="p-2 peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow"
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo"
            />
            <label
              htmlFor="correo"
              className={`absolute negro h4 cursor-text bg-[#f5f5f5] px-1 left-2.5 transition-all transform origin-left ${
                correo
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-4 text-sm text-slate-400"
              } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Correo
            </label>
          </div>
        </div>

        <button
          type="button"
          className="w-full text-center bg-[#00733C] h4 blanco mt-3 p-2 rounded-[10px]"
          onClick={() => {
            if (typeof setActiveComponent === "function") {
              console.log("Botón presionado - cambiando a 'reset'");
              setActiveComponent("reset");
            } else {
              console.error("Error: setActiveComponent no es una función");
            }
          }}
        >
          Recuperar contraseña
        </button>
      </form>
      <div className="flex gap-[15%] w-full justify-center mt-[47.5%] items-end">
        <div className="">
          <a
            href="https://togrowagencia.com"
            className="marca-agua flex items-center"
          >
            Términos y condiciones | Contáctanos
          </a>
        </div>

        <div className="flex">
          <a
            href="https://togrowagencia.com"
            className="marca-agua flex items-center"
          >
            Desarrollo por
            <img src="/svg/sidebar/togrow.svg" className="w-auto ml-1" />
          </a>
        </div>
      </div>
    </>
  );
};

OlvidoContraseña.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
};

export default OlvidoContraseña;
