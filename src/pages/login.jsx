import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {login}  from "./../api/authUsers";
import Notify from "simple-notify";
import IniciarSesion from "../components/login/IniciarSesion";
import OlvidoContraseña from "../components/login/OlvidoContraseña";
import RecuperarContraseña from "../components/login/RecuperarContraseña";

export const Login = () => {
  const [activeComponent, setActiveComponent] = useState("login");
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData?.username && savedUserData?.password) {
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
      if (!username || !password) {
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
      if (response.response?.status === 401) {
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

      if (response.data?.accesToken) {
        localStorage.setItem("authResponse", response.data.accesToken);
        if (check) {
          localStorage.setItem(
            "userData",
            JSON.stringify({ username, password })
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
      console.error(error);
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

        <img src="/public/images/logo.png" alt="Logo" />
        <div className="flex flex-col items-center w-full my-[15%]">
          {/* Botones de selección */}
          <div className="flex justify-start items-start w-[60%] gap-4 py-4">
            <button
              className={`group flex flex-col justify-center items-center rounded-[10px] border py-[9px] px-1 w-[24%] h-full gap-1.5 transition-colors ${
                activeComponent === "login"
                  ? "border-[#32938C] text-[#32938C]"
                  : "border-[#222] text-[#222]"
              }`}
              onClick={() => setActiveComponent("login")}
            >
              <img src="/svg/sidebar/togrow.svg" className="w-4" />
              <p className="w-[80%] textos-peques">Iniciar Sesión</p>
            </button>

            <button
              className={`group flex flex-col justify-center items-center rounded-[10px] border py-[9px] w-[24%] h-full gap-1.5 transition-colors ${
                activeComponent === "forgot"
                  ? "border-[#32938C] text-[#32938C]"
                  : "border-[#222] text-[#222]"
              }`}
              onClick={() => setActiveComponent("forgot")}
            >
              <img src="/svg/sidebar/togrow.svg" className="w-4" />
              <p className="w-[90%] textos-peques">¿Olvidó la contraseña?</p>
            </button>
          </div>

          {/* Renderizar componente según estado */}
          {activeComponent === "login" && (
            <IniciarSesion
              signin={signin}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              check={check}
              changeCheck={changeCheck}
            />
          )}
          {activeComponent === "forgot" && (
            <OlvidoContraseña setActiveComponent={setActiveComponent} />
          )}
          {activeComponent === "reset" && (
            <RecuperarContraseña setActiveComponent={setActiveComponent} />
          )}
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
