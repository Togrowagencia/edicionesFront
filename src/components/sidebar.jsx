/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {

      const location = useLocation();
      
      // Aquí usamos la ruta actual para definir el enlace seleccionado
      const getSelectedLink = (path) => {
        switch (path) {
          case '/dashboard':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";
          case '/gestion-de-obras':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";
          case '/gestion-de-bodegas':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";
          case '/control-de-ventas':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";
          case '/control-de-recursos':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";
          case '/punto-de-venta':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";
          case '/usuarios-y-roles':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";
          case '/cotizaciones':
            return location.pathname === path ? "selected-dashboard selected-logo" : "";  
          default:
            return "";
        }
      };


  return (
    <div className={`sidebar`}>

            <img src={`/images/logoeh.png`} className={`logo-sidebar`} />

            <div className='content-sidebar'>

              <Link to="/dashboard" className={`${getSelectedLink("/dashboard")}`}>
                <img src="/svg/sidebar/dashboard.svg" className="noselected-img" />
                <img src="/svg/sidebar/dashboard-selected.svg" className="selected-img" />
                <p className='h4'>Dashboard</p>
              </Link>

              <Link to="/gestion-de-obras" className={getSelectedLink("/gestion-de-obras")}>
                <img src="/svg/sidebar/gdeo.svg" className="noselected-img" />
                <img src="/svg/sidebar/gdeo-selected.svg" className="selected-img" />
                <p className='h4'>Gestión de obras</p>
              </Link>

              <Link to="/gestion-de-bodegas" className={getSelectedLink("/gestion-de-bodegas")}>
                <img src="/svg/sidebar/gdeb.svg" className="noselected-img" />
                <img src="/svg/sidebar/gdeb-selected.svg" className="selected-img" />
               
                <p className='h4'>Gestión de bodegas</p>
              </Link>

              <Link to="/control-de-ventas" className={getSelectedLink("/control-de-ventas")}>
                <img src="/svg/sidebar/cdev.svg" className="noselected-img" />
                <img src="/svg/sidebar/cdev-selected.svg" className="selected-img" />
                <p className='h4'>Control de ventas</p>
              </Link>

              <Link to="/control-de-recursos" className={getSelectedLink("/control-de-recursos")}>
                <img src="/svg/sidebar/cder.svg" className="noselected-img" />
                <img src="/svg/sidebar/cder-selected.svg" className="selected-img" />
                <p className='h4'>Control de recursos</p>
              </Link>

              <Link to="/punto-de-venta" className={getSelectedLink("/punto-de-venta")}>
                <img src="/svg/sidebar/pdev.svg" className="noselected-img" />
                <img src="/svg/sidebar/pdev-selected.svg" className="selected-img" />
                <p className='h4'>Punto de venta</p>
              </Link>

              <Link to="/usuarios-y-roles" className={getSelectedLink("/usuarios-y-roles")}>
                <img src="/svg/sidebar/uyr.svg" className="noselected-img" />
                <img src="/svg/sidebar/uyr-selected.svg" className="selected-img" />
                <p className='h4'>Usuarios y roles</p>
              </Link>

              <Link to="/cotizaciones" className={getSelectedLink("/cotizaciones")}>
                <img src="/svg/sidebar/cotizaciones.svg" className="noselected-img" />
                <img src="/svg/sidebar/cotizaciones-selected.svg" className="selected-img" />
                <p className='h4'>Cotizaciones</p>
              </Link>
            </div>

            <div className='cerrar-sesion ml-[-77px] mt-[-55px]'>
            <Link to="/" className={`${getSelectedLink("/")} flex items-center gap-1`}>
                <img src="/svg/sidebar/cerrar.svg" className="noselected-img" />
                <img src="/svg/sidebar/cerrar-selected.svg" className="selected-img" />
                <p className='h4'>Cerrar sesión</p>
              </Link>
            </div>
            <div className='marca-agua mt-[20px]'>
                <img src="/svg/sidebar/togrow.svg" className="noselected-img" />
                <p className='h4'>Desarrollo por ToGrow</p>
            </div>
        </div>
  )
}
export default Sidebar;