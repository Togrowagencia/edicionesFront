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
      if(username == "" && password == "")
      {
        return new Notify({
          title: 'Acceso denegado',
          text: 'Rellene todos los campos',
          status : "warning",
          position: "left top",
          effect: "slide",
          autotimeout: 900,
          autoclose: true,
          button : true,
          type:"filled",
          gap : 5
        })
      }
      const response = await login(username, password);
      if (
        response.response &&
        response.response.status == 401
      ) {
        return new Notify({
          title: 'Acceso denegado',
          text: 'Credenciales incorrectas',
          status : "error",
          autotimeout: 850,
          autoclose: true,
          position: "left top",
          effect: "slide",
          gap : 20
        })
          
      }
      if (response.data && response.data.accesToken) {
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
        title: 'Acceso correcto',
        status : "success",
        type:"filled",
        autotimeout: 850,
        autoclose: true,
        position: "left top",
        effect: "slide",
        gap : 20
      })
      navigate("/dashboard")
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
          <input
            type="text"
            placeholder="Usuario"
            className="z-10 w-[490px] rounded-[10px] div-inputs-login p-2 my-2"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="z-10 w-[490px] rounded-[10px] div-inputs-login p-2 my-2"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button className="w-full text-center bg-[#00733C]  blanco mt-10 p-2 rounded-[10px]">
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
              <img
                src="/svg/sidebar/togrow.svg"
                className="w-auto"
              />
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
