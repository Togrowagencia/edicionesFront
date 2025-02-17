import React from 'react'
import { Link } from 'react-router-dom';

export const Reset = () => {
  return (
    <div className='div-envio-contraseña'>
      <div className='div-central-envio'>
        <div className='div-form-envio-contraseña'>
            <img src="/images/logo.png" className="absolute bottom-0 right-0" />
            <h2 className='titulos negro mt-2'>Recupera tu contraseña</h2>
            <p className='textos gris mt-2'>Escribe tu correo electrónico y te llegará un enlace para que recuperes tu acceso a la plataforma</p>
            <form className='form-envio'>
                <div className='flex w-full mt-10 border-b pb-1'>
                    <img src="/svg/reset/correo.svg" alt="" />
                    <input type="email" className='w-4/5 outline-none ml-2 textos negro' placeholder='Correo electrónico'/>
                </div>

                <button className='w-full text-center bg-[#3D51FE] textos blanco mt-5 p-2 rounded-[82px]'>Ingresar</button>
            </form>
        </div>
        <div className='div-derecha-envio'>
            <img src="/images/imagen-derecha-envio.png" className="logo-derecha-envio" />
        </div>
      </div>
    </div>
  )
}

export default Reset;
