import React, { useState } from 'react';
import BotonAgregar from '../inputs/BotonAgregar';
import BotonEliminar from '../inputs/BotonEliminar';
import AgregarTienda from './AgregarTienda'; 

function HeaderGdB() {
    const [openDrawer1, setOpenDrawer1] = useState(false); 
  
    const showDrawer1 = () => {
      setOpenDrawer1(true);
    };
    const onCloseDrawer1 = () => {
      setOpenDrawer1(false);
    };
    return (
        <div className="flex-1 flex justify-end items-end pr-[50px] h-[6%] gap-3">
            <div onClick={showDrawer1}>
            <BotonAgregar texto="Agregar tienda"/>
            </div>
            <div>
            <BotonEliminar texto="Eliminar tienda"/>
            </div>
            <AgregarTienda isPopupOpen={openDrawer1} handlePopupClose={onCloseDrawer1} />
        </div>
    );
}

export default HeaderGdB;
