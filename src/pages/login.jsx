import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='div-login-general flex'>

      <div className='panel-derecho-login order-2'>
        <img src="/images/panel-login.png" className='imagen-panel-izquierdo' />
      </div>

      <div className='panel-izquierdo-login ml-[150px] mt-[80px]'>
        <div className='imagen-panel-izquierdon order-2 fondo-imagen'>
          <img src="/images/fondo-login-izq.png" className='imagen-panel-izquierdo' />
        </div>

        <img src="/public/images/logo.png" className="logo-sidebar ml-[100px]" />
        <div className='div-encabezado'>
          <p className='h2 my-2 mt-[200px]'>Bienvenido</p>
          <p className='textos gris my-1'>Ingresa a tu cuenta y continua a provechando nuestras herramientas financieras para operar con éxito</p>
        </div>

        <form className='form-login'>
          <div className='div-inputs-login p-2 rounded-[10px]'>
            <input type="text" placeholder='Usuario' className='inputs-login z-10'/>
          </div>
          <div className='div-inputs-login p-2 rounded-[10px]'>
            <input type="password" placeholder='Contraseña' className='inputs-login z-10'/>
          </div>

          <button className='w-full text-center bg-[#00733C] textos-grandes blanco mt-10 p-2 rounded-[10px]' onClick={() => navigate('/dashboard')}>Ingresar</button>
        </form>

        <div className='flex mt-[175px]'>
          <div className='div-links-login ml-[-50px]'>
            <a href="https://togrowagencia.com" className='marca-agua flex items-center w-[100%]'>Terminos y condiciones | Contactanos</a>
          </div>

          <div className='div-links-login'>
            <a href="https://togrowagencia.com" className='marca-agua flex items-center w-[65%]'>Desarrollo por <img src="/svg/sidebar/togrow.svg" className="w-[10%] mt-[4px] ml-[10px]"/></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;