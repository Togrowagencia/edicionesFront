import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/*Rutas*/
import Login from './pages/login.jsx'
import Envio from './pages/envio.jsx'
import Reset from './pages/restablecer.jsx'
import Dashboard from './pages/dashboard.jsx';
import Gestiondeobras from './pages/gestiondeobras.jsx';
/*End::Rutas*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/envio-restablecimiento" element={<Envio />} />
        <Route path="/restablecimiento" element={<Reset />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gestion-de-obras" element={<Gestiondeobras />} />
        <Route path="/gestion-de-bodegas" element={<Dashboard />} />
        <Route path="/control-de-ventas" element={<Dashboard />} />
        <Route path="/control-de-recursos" element={<Dashboard />} />
        <Route path="/punto-de-venta" element={<Dashboard />} />
        <Route path="/usuarios-y-roles" element={<Dashboard />} />
        <Route path="/cotizaciones" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
