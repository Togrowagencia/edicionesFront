import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/*Rutas*/
import Login from './pages/login.jsx'
import Envio from './pages/envio.jsx'
import Reset from './pages/restablecer.jsx'
import Dashboard from './pages/dashboard.jsx';
import Gestiondeobras from './pages/gestiondeobras.jsx';
import GestiondeBodegas from './pages/GestiondeBodegas.jsx';
import ControldeVentas from './pages/ControldeVentas.jsx';
import ControldeRecursos from './pages/ControldeRecursos.jsx';
import UsuariosyRoles from './pages/UsuariosyRoles.jsx';
import Cotizaciones from './pages/Cotizaciones.jsx';
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
        <Route path="/punto-de-venta" element={<Dashboard />} />
        <Route path="/usuarios-y-roles" element={<UsuariosyRoles />} />
        <Route path="/cotizaciones" element={<Cotizaciones />} />
      </Routes>
    </>
  )
}

export default App
