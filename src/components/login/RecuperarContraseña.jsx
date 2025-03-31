import PropTypes from "prop-types";
import { useState } from "react";

const RecuperarContraseña = ({ setActiveComponent }) => {
  const [npassword, setNpassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const requisitos = [
    { texto: "8 cáracteres", valido: npassword.length >= 8 },
    { texto: "Debe contener mínimo un número", valido: /\d/.test(npassword) },
    {
      texto: "Debe contener mínimo un carácter especial",
      valido: /[!@#$%^&*(),.?":{}|<>]/.test(npassword),
    },
  ];

  const coincide = npassword && cpassword && npassword === cpassword;

  return (
    <>
      <div className="div-encabezado text-start">
        <p className="h2 negro">Restablecer Contraseña</p>
        <p className="textos gris-urbano my-1">
          Ingresa a tu cuenta y continúa aprovechando nuestras herramientas
          financieras para operar con éxito.
        </p>
      </div>

      <form className="px-4 w-[70%]">
        <div className="w-full max-w-sm min-w-[40%]">
          <div className="relative my-5">
            <input
              id="npassword"
              className="p-2 peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow"
              type="password"
              value={npassword}
              onChange={(e) => setNpassword(e.target.value)}
              placeholder="Escribe tu contraseña"
            />
            <label
              htmlFor="npassword"
              className={`absolute negro h4 cursor-text bg-[#f5f5f5] px-1 left-2.5 transition-all transform origin-left ${npassword
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-4 text-sm text-slate-400"
                } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Escribe tu contraseña
            </label>

            <ul className="mt-2">
              {requisitos.map((req, index) => (
                <div key={index} className="flex gap-2">
                  <img
                    src={
                      req.valido
                        ? "/svg/login/cumple.svg"
                        : "/svg/login/nocumple.svg"
                    }
                    alt=""
                  />
                  <li className={req.valido ? "verde-eco" : "rojo-potencia"}>
                    {req.texto}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="relative my-5">
            <input
              id="cpassword"
              className="p-2 peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md transition duration-300 ease focus:outline-none focus:border-green-600 shadow-sm focus:shadow"
              type="password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Confirma tu contraseña"
            />
            <label
              htmlFor="cpassword"
              className={`absolute negro h4 cursor-text bg-[#f5f5f5] px-1 left-2.5 transition-all transform origin-left ${cpassword
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-4 text-sm text-slate-400"
                } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-green-600 peer-focus:scale-75`}
            >
              Confirma tu contraseña
            </label>
            {cpassword && (
              <div className="flex gap-2">
                <img
                  src={
                    coincide
                      ? "/svg/login/cumple.svg"
                      : "/svg/login/nocumple.svg"
                  }
                  alt=""
                />
                <p
                  className={`mt-2 ${coincide ? "verde-eco" : "rojo-potencia"}`}
                >
                  {coincide
                    ? "Tu contraseña coincide"
                    : "Las contraseñas no coinciden"}
                </p>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          className="w-full text-center bg-[#00733C] h4 blanco mt-3 p-2 rounded-[10px]"
          onClick={() => {
            if (typeof setActiveComponent === "function") {
              console.log("Botón presionado - cambiando a 'login'");
              setActiveComponent("login");
            } else {
              console.error("Error: setActiveComponent no es una función");
            }
          }}
        >
          Restablecer contraseña
        </button>
      </form>
      <div className="flex gap-[15%] w-full justify-center mt-[18%] items-end">
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

RecuperarContraseña.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
};

export default RecuperarContraseña;
