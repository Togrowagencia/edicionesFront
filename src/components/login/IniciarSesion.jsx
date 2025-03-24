import PropTypes from "prop-types";

const IniciarSesion = ({
  signin,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <>
      <div className="div-encabezado text-start">
        <p className="h2 negro">Bienvenido</p>
        <p className="textos gris-urbano my-1">
          Ingresa a tu cuenta y continúa aprovechando nuestras herramientas
          financieras para operar con éxito.
        </p>
      </div>

      <form className="px-4 w-[70%]" onSubmit={signin}>
        <div className="w-full max-w-sm min-w-[40%]">
          {/* Input usuario */}
          <div className="relative my-5">
            <input
              id="username"
              className="p-2 peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md transition duration-300 ease focus:outline-none focus:border-[#5FB868] shadow-sm focus:shadow"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuario"
            />
            <label
              htmlFor="username"
              className={`absolute negro h4 cursor-text bg-[#f5f5f5] px-1 left-2.5 transition-all transform origin-left ${
                username
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-4 text-sm text-slate-400"
              } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-[#5FB868] peer-focus:scale-75`}
            >
              Usuario
            </label>
          </div>

          {/* Input contraseña */}
          <div className="relative my-5">
            <input
              id="password"
              className="peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md p-2 transition duration-300 ease focus:outline-none focus:border-[#5FB868] shadow-sm focus:shadow"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <label
              htmlFor="password"
              className={`absolute negro h4 cursor-text bg-[#f5f5f5] px-1 left-2.5 transition-all transform origin-left ${
                password
                  ? "-top-2 left-2.5 text-xs text-green-600 scale-75"
                  : "top-3 left-4 text-sm text-slate-400"
              } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:textos-peques peer-focus:text-[#5FB868] peer-focus:scale-75`}
            >
              Contraseña
            </label>
          </div>
        </div>

        <button className="w-full text-center bg-[#00733C] h4 blanco mt-3 p-2 rounded-[10px]">
          Ingresar
        </button>
      </form>
      <div className="flex gap-[15%] w-full justify-center mt-[40%] items-end">
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

IniciarSesion.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
  changeCheck: PropTypes.func.isRequired,
};

export default IniciarSesion;
