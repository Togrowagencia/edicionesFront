import React, { useState } from "react";
import BotonAgregar from "../inputs/BotonAgregar";
import BotonEliminar from "../inputs/BotonEliminar";
import AgregarTienda from "./AgregarTienda";

function HeaderGdB({ load }) {
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
        <div className="w-auto h-[27px] flex items-center gap-2 justify-start bg-green-700 rounded-[5px] px-2 text-white cursor-pointer">
          <p className="h4">Agregar Bodega</p>
          <img src="/svg/agregar.svg" alt="icono editar" />
        </div>
      </div>
      <div>
        <BotonEliminar texto="Eliminar tienda" />
      </div>
      <AgregarTienda
        isPopupOpen={openDrawer1}
        handlePopupClose={onCloseDrawer1}
        reload={load}
      />
    </div>
  );
}

export default HeaderGdB;
