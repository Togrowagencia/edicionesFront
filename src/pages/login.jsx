
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
      <div className="flex flex-col items-center justify-center w-full lg:w-1/3 p-3">
        <div className="imagen-panel-izquierdo order-2 fondo-imagen">
          <img
            src="/images/fondo-login-izq.png"
            className="imagen-panel-izquierdo"
          />
        </div>

        <img src="/public/images/logo.png" className="" />
        <div className="div-encabezado text-center">
          <p className="h2 my-3">Bienvenido</p>
          <p className="textos gris my-1">
            Ingresa a tu cuenta y continúa aprovechando nuestras herramientas
            financieras para operar con éxito
          </p>
        </div>
        <form className="p-4" onSubmit={signin}>
          <div class="w-full max-w-sm min-w-[500px]">
            <div class="relative my-5">
              <input
                class="peer w-full bg-transparent placeholder:text-green-600 text-slate-700 text-sm border border-slate-200 rounded-md px-3  py-2 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-slate-300 shadow-sm focus:shadow"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label class="absolute cursor-text bg-[#f5f5f5] px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-70">
                Usuario
              </label>
            </div>
          </div>
          <div class="relative my-2">
            <input
              class="peer w-full bg-transparent placeholder:text-green-600 text-slate-700 text-sm border border-slate-200 rounded-md px-3  py-2 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-slate-300 shadow-sm focus:shadow"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label class="absolute cursor-text bg-[#f5f5f5] px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-70">
              Contraseña
            </label>
          </div>

          <button className="w-full text-center bg-[#00733C]  blanco mt-5 p-2 rounded-[10px]">
            Ingresar
          </button>
        </form>
        <div className="flex">
          <div className="">
            <a
              href="https://togrowagencia.com"
              className="marca-agua flex items-center w-[100%]"
            >
              Términos y condiciones | Contáctanos
            </a>
          </div>

          <div className="">
            <a
              href="https://togrowagencia.com"
              className="marca-agua flex items-center ml-2"
            >
              Desarrollo por
              <img src="/svg/sidebar/togrow.svg" className="w-auto" />
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
