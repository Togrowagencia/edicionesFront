import React, { useState } from 'react';
import Notify from 'simple-notify';

const MiComponente = () => {

  const handleAceptar = () => {
    console.log('Aceptar clickeado');
    // Acción de aceptar
    notifyClose(); // Cerrar la notificación después de aceptar
  };

  const handleCancelar = () => {
    console.log('Cancelar clickeado');
    // Acción de cancelar
    notifyClose(); // Cerrar la notificación después de cancelar
  };

  const [notifyInstance, setNotifyInstance] = useState(null);

  const mostrarNotificacion = () => {
    const notify = new Notify({
      status: 'warning', // Puedes usar "info", "success", "error", etc.
      title: '¿Estás seguro?',
      text: 'Tienes cambios no guardados, ¿quieres continuar?',
      autoclose: false, // No se cierra automáticamente
    });

    // Agregar botones manualmente
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.textAlign = 'center';
    
    const aceptarBtn = document.createElement('button');
    aceptarBtn.textContent = 'Aceptar';
    aceptarBtn.classList.add('btn-aceptar');
    aceptarBtn.onclick = handleAceptar;

    const cancelarBtn = document.createElement('button');
    cancelarBtn.textContent = 'Cancelar';
    cancelarBtn.classList.add('btn-cancelar');
    cancelarBtn.onclick = handleCancelar;

    buttonsContainer.appendChild(aceptarBtn);
    buttonsContainer.appendChild(cancelarBtn);

    notify.appendChild(buttonsContainer); // Agregar los botones a la notificación

    setNotifyInstance(notify); // Guardar la instancia si necesitas referenciarla
  };

  const notifyClose = () => {
    if (notifyInstance) {
      notifyInstance.close(); // Cerrar la notificación programáticamente
    }
  };

  return ;
};

export default MiComponente;
