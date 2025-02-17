/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

const PopupTO = ({ isPopupOpen, handlePopupClose }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (checkbox) => {
    setSelectedCheckbox(checkbox);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Drawer
        placement="right"
        onClose={handlePopupClose}
        open={isPopupOpen}
        width={1483}
        closable={false} // Desactiva el botón de cierre predeterminado
        headerStyle={{ display: 'none' }} // Oculta el header del Drawer
        drawerStyle={{ 
          borderRadius: '10px 10px 10px 10px', 
          height: '100%', 
        }} 
      >

        {/* Botón de cierre personalizado */}
        <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }} onClick={handlePopupClose}>
          <img src="/public/svg/popup-ao/cerrar (2).svg" alt="Cerrar" className="w-6 h-6 mt-[10%]" />
        </div>

        <div className="flex items-center gap-2">
          <img src="/public/svg/popup-to/trasladar.svg" alt="Icono" className="mb-[15px] w-33px h-33px ml-[20px]" />
          <h2 className="text-2xl mb-4 h3 verde-corporativo ml-[10px]">Trasladar obras</h2>
        </div>
      </Drawer>
    </div>
  );
};
PopupTO.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
};

export default PopupTO;