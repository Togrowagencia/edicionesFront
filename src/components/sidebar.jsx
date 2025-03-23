/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const isPuntoDeVenta =
    location.pathname === "/punto-de-venta" ||
    location.pathname === "/pedidos" ||
    location.pathname === "/devoluciones";

  const getSelectedLink = (path) => {
    return location.pathname === path ? "selected-dashboard selected-logo" : "";
  };

  return (
    <div className={`sidebar`}>
      <img src={`/images/logoeh.png`} className={`logo-sidebar`} />
      <div className="content-sidebar">
        <Link to="/dashboard" className={getSelectedLink("/dashboard")}>
          <img src="/svg/sidebar/dashboard.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/dashboard-selected.svg"
            className="selected-img"
          />
          <p className="h4">Dashboard</p>
        </Link>

        <Link
          to="/gestion-de-obras"
          className={getSelectedLink("/gestion-de-obras")}
        >
          <img src="/svg/sidebar/gdeo.svg" className="noselected-img" />
          <img src="/svg/sidebar/gdeo-selected.svg" className="selected-img" />
          <p className="h4">Gestión de obras</p>
        </Link>

        {!isPuntoDeVenta && (
          <>
            <Link
              to="/gestion-de-bodegas"
              className={getSelectedLink("/gestion-de-bodegas")}
            >
              <img src="/svg/sidebar/gdeb.svg" className="noselected-img" />
              <img
                src="/svg/sidebar/gdeb-selected.svg"
                className="selected-img"
              />
              <p className="h4">Gestión de bodegas</p>
            </Link>

            <Link
              to="/control-de-recursos"
              className={getSelectedLink("/control-de-recursos")}
            >
              <img src="/svg/sidebar/cder.svg" className="noselected-img" />
              <img
                src="/svg/sidebar/cder-selected.svg"
                className="selected-img"
              />
              <p className="h4">Control de recursos</p>
            </Link>

            <Link
              to="/usuarios-y-roles"
              className={getSelectedLink("/usuarios-y-roles")}
            >
              <img src="/svg/sidebar/uyr.svg" className="noselected-img" />
              <img
                src="/svg/sidebar/uyr-selected.svg"
                className="selected-img"
              />
              <p className="h4">Usuarios y roles</p>
            </Link>
          </>
        )}

        <Link
          to="/control-de-ventas"
          className={getSelectedLink("/control-de-ventas")}
        >
          <img src="/svg/sidebar/cdev.svg" className="noselected-img" />
          <img src="/svg/sidebar/cdev-selected.svg" className="selected-img" />
          <p className="h4">Control de ventas</p>
        </Link>

        <Link
          to="/punto-de-venta"
          className={getSelectedLink("/punto-de-venta")}
        >
          <img src="/svg/sidebar/pdev.svg" className="noselected-img" />
          <img src="/svg/sidebar/pdev-selected.svg" className="selected-img" />
          <p className="h4">Punto de venta</p>
        </Link>

        <Link to="/cotizaciones" className={getSelectedLink("/cotizaciones")}>
          <img src="/svg/sidebar/cotizaciones.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/cotizaciones-selected.svg"
            className="selected-img"
          />
          <p className="h4">Cotizaciones</p>
        </Link>

        {isPuntoDeVenta && (
          <>
            <Link to="/pedidos" className={getSelectedLink("/pedidos")}>
              <img src="/svg/sidebar/pedidos.svg" className="noselected-img" />
              <img
                src="/svg/sidebar/pedidos-selected.svg"
                className="selected-img"
              />
              <p className="h4">Pedidos</p>
            </Link>

            <Link
              to="/devoluciones"
              className={getSelectedLink("/devoluciones")}
            >
              <img
                src="/svg/sidebar/devoluciones.svg"
                className="noselected-img"
              />
              <img
                src="/svg/sidebar/devoluciones-selected.svg"
                className="selected-img"
              />
              <p className="h4">Devoluciones</p>
            </Link>
          </>
        )}
        <div className="cerrar-sesion">
          <Link
            to="/"
            className={`${getSelectedLink("/")} flex items-center gap-1`}
          >
            <img src="/svg/sidebar/cerrar.svg" className="noselected-img" />
            <img
              src="/svg/sidebar/cerrar-selected.svg"
              className="selected-img"
            />
            <p className="h4">Cerrar sesión</p>
          </Link>
        </div>

        <div className="marca-agua">
          <div className="flex gap-1">
          <img src="/svg/sidebar/togrow.svg" className="" />
          <p className="h4">Desarrollo por ToGrow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
