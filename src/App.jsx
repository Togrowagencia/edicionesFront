import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/*Rutas*/
import {Login} from './pages/login.jsx'
import Envio from './pages/envio.jsx'
import Reset from './pages/restablecer.jsx'
import Dashboard from './pages/dashboard.jsx';
import Gestiondeobras from './pages/gestiondeobras.jsx';
import GestiondeBodegas from './pages/GestiondeBodegas.jsx';
import ControldeVentas from './pages/ControldeVentas.jsx';
import ControldeRecursos from './pages/ControldeRecursos.jsx';
import UsuariosyRoles from './pages/UsuariosyRoles.jsx';
import Cotizaciones from './pages/Cotizaciones.jsx';
import PuntodeVenta from './pages/PuntodeVenta.jsx';
import DetallesInventario from './pages/DetallesInventario.jsx';
import DetallesVentas from './pages/DetallesVentas.jsx';
import Pedidos from './pages/Pedidos.jsx';
import Devoluciones from './pages/Devoluciones.jsx';
import EgresosporTienda from './pages/EgresosporTienda.jsx';
import IngresosporTienda from './pages/IngresosporTienda.jsx';
import InformeGlobal from './pages/InformeGlobal.jsx';
import InformedeConsignacion from './pages/InformedeConsignacion.jsx';
import Rentabilidad from './pages/Rentabilidad.jsx';
import Facturacion from './pages/Facturacion.jsx';
import VentasObra from './pages/VentasObra.jsx';
import Movimientos from './pages/Movimientos.jsx';
import Historico from './pages/Historico.jsx';
import CuotasCredito from './pages/CuotasCredito.jsx';
import DetalleVentaLibro from './pages/DetalleVentaLibro.jsx';
/*End::Rutas*/

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/envio-restablecimiento" element={<Envio />} />
        <Route path="/restablecimiento" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gestion-de-obras" element={<Gestiondeobras />} />
        <Route path="/gestion-de-bodegas" element={<GestiondeBodegas />} />
        <Route path="/control-de-ventas" element={<ControldeVentas />} />
        <Route path="/control-de-recursos" element={<ControldeRecursos />} />
        <Route path="/punto-de-venta" element={<PuntodeVenta />} />
        <Route path="/usuarios-y-roles" element={<UsuariosyRoles />} />
        <Route path="/cotizaciones" element={<Cotizaciones />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/devoluciones" element={<Devoluciones />} />
        <Route path="/detalles-inventario" element={<DetallesInventario />} />
        <Route path="/detalles-venta" element={<DetallesVentas />} />
        <Route path="/egresos" element={<EgresosporTienda />} />
        <Route path="/ingresos" element={<IngresosporTienda />} />
        <Route path="/informe-global" element={<InformeGlobal />} />
        <Route path="/informe-consignacion" element={<InformedeConsignacion />} />
        <Route path="/rentabilidad" element={<Rentabilidad />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/ventas-obra" element={<VentasObra />} />
        <Route path="/movimientos" element={<Movimientos />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/cuotas-credito" element={<CuotasCredito />} />
        <Route path="/detalle-venta-libro" element={<DetalleVentaLibro />} />
      </Routes>
    </>
  )
}

export default App
