import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./../api/authUsers";
import Notify from "simple-notify";

export const Login = (user, pass) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [check, setCheck] = useState(false);

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData && savedUserData.username && savedUserData.password) {
      setUsername(savedUserData.username);
      setPassword(savedUserData.password);
      setCheck(true);
    }
  }, []);

  const changeCheck = (e) => {
    setCheck(e.target.checked);
  };

  const signin = async (e) => {
    e.preventDefault();
    try {
      if (username == "" && password == "") {
        return new Notify({
          title: "Acceso denegado",
          text: "Rellene todos los campos",
          status: "warning",
          position: "left top",
          effect: "slide",
          autotimeout: 900,
          autoclose: false,
          button: true,
          type: "filled",
          gap: 5,
        });
      }
      const response = await login(username, password);
      if (response.response && response.response.status == 401) {
        console.log("response");
        console.log(response);
        return new Notify({
          title: "Acceso denegado",
          text: response.response.data.message,
          status: "error",
          autotimeout: 850,
          autoclose: true,
          position: "left top",
          effect: "slide",
          gap: 20,
        });
      }
      if (response.data && response.data.accesToken) {
        localStorage.setItem("authResponse", response.data.accesToken);
        if (check) {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              username: username,
              password: password,
            })
          );
        }
        new Notify({
          title: "Acceso correcto",
          status: "success",
          type: "filled",
          autotimeout: 850,
          autoclose: true,
          position: "left top",
          effect: "slide",
          gap: 20,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col items-center w-full lg:w-1/3 px-3 py-[7%]">
        <div className="imagen-panel-izquierdo order-2 fondo-imagen">
          <img
            src="/images/fondo-login-izq.png"
            className="imagen-panel-izquierdo"
          />
        </div>

        <img src="/public/images/logo.png" className="" />

        <div className="flex flex-col items-center w-full my-[15%]">
          <div className="flex justify-start items-start w-[60%] gap-4 py-4">
            <button className="group flex flex-col justify-center items-center rounded-[10px] border-[#222] border py-[9px] px-1 w-[24%] h-full gap-1.5 focus:border-[#32938C]">
              <img src="/svg/sidebar/togrow.svg" className="w-4" />
              <p className="w-[80%] textos-peques text-[#222] group-focus:text-[#32938C]">Iniciar Sesión</p>
            </button>

            <button className="group flex flex-col justify-center items-center rounded-[10px] border-[#222] border py-[9px] w-[24%] h-full gap-1.5 focus:border-[#32938C]">
              <img src="/svg/sidebar/togrow.svg" className="w-4" />
              <p className="w-[90%] textos-peques text-[#222] group-focus:text-[#32938C]">¿Olvidó la contraseña?</p>
            </button>
          </div>
          <div className="div-encabezado text-start">
            <p className="h2 negro">Bienvenido</p>
            <p className="textos gris-urbano my-1">
              Ingresa a tu cuenta y continúa aprovechando nuestras herramientas
              financieras para operar con éxito
            </p>
          </div>
          <form className="px-4 w-[70%]" onSubmit={signin}>
            <div className="w-full max-w-sm min-w-[40%]">
              {/* input usuario */}
              <div className="relative my-5">
                <input
                  className="p-2 peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-slate-300 shadow-sm focus:shadow"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Usuario"
                />
                <label
                  className={`absolute negro h4 cursor-text bg-[#f5f5f5] px-1 left-2.5 transition-all transform origin-left ${
                    username
                      ? "-top-2 left-2.5 text-xs text-green-600 scale-700"
                      : "top-3 left-4 text-sm text-slate-40"
                  } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-70`}
                >
                  Usuario
                </label>
              </div>
            </div>
            {/* input contraseña */}
            <div className="relative">
              <input
                className="peer w-full bg-transparent placeholder-transparent negro h4 border border-[#222] rounded-md p-2 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-slate-300 shadow-sm focus:shadow"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
              />
              <label
                className={`absolute negro h4 cursor-text bg-[#f5f5f5] px-1 left-2.5 transition-all transform origin-left ${
                  password
                    ? "-top-2 left-2.5 text-xs text-green-600 scale-700"
                    : "top-3 left-4 text-sm text-slate-40"
                } peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-70`}
              >
                Contraseña
              </label>
            </div>

            <button className="w-full text-center bg-[#00733C] h4 blanco mt-3 p-2 rounded-[10px]">
              Ingresar
            </button>
          </form>
        </div>
        <div className="flex gap-[15%] w-full justify-center mt-[25%] items-end">
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
      </div>
      <div className="hidden lg:block lg:w-2/3">
        <img
          src="/images/panel-login.png"
          className="w-full h-auto object-container"
        />
      </div>
    </div>
  );
};

export default Login;
