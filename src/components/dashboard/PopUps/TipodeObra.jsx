import { useState } from "react";
import { Drawer } from "antd";
import { CheckboxWithLabel } from "../../inputs/CheckboxWithLabel";
import { InputRow } from "../../inputs/InputRow";

export function TipodeObra({ isOpen, onClose }) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    obraPropia: true,
    obraConsignacion: false,
    iva: false,
  });

  const [inputValues, setInputValues] = useState({});

  const obraPropiaFields = [
    {
      name: "numeroFactura",
      iconSrc: "/public/svg/popup-ao/nfactura.svg",
      placeholder: "Nº Factura",
      hasArrow: false,
    },
    {
      name: "retefuente",
      iconSrc: "/public/svg/popup-ao/retefuente.svg",
      placeholder: "Retefuente",
      hasArrow: false,
    },
    {
      name: "tipoCompra",
      iconSrc: "",
      placeholder: "Tipo de compra",
      hasArrow: true,
      options: [
        { label: "Compra nacional", value: "nacional" },
        { label: "Importación", value: "importacion" },
      ],
      multiselect: false,
    },
  ];

  const obraConsignacionFields = [
    {
      name: "numeroRemision",
      iconSrc: "/public/svg/popup-ao/nfactura.svg",
      placeholder: "Nº Remisión",
      hasArrow: false,
    },
    {
      name: "retefuente",
      iconSrc: "/public/svg/popup-ao/retefuente.svg",
      placeholder: "Retefuente",
      hasArrow: false,
    },
  ];

  const handleInputChange = (name, value) => {
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checkboxName) => {
    if (checkboxName === "obraPropia") {
      setSelectedCheckboxes((prev) => ({
        obraPropia: true,
        obraConsignacion: false,
        iva: false,
      }));
    } else if (checkboxName === "obraConsignacion") {
      setSelectedCheckboxes({
        obraPropia: false,
        obraConsignacion: true,
        iva: false,
      });
    } else if (checkboxName === "iva") {
      setSelectedCheckboxes((prev) => ({
        ...prev,
        iva: !prev.iva,
      }));
    }
  };

  const inputFields = selectedCheckboxes.obraConsignacion
    ? obraConsignacionFields
    : obraPropiaFields;

  return (
    <Drawer
      rootClassName="drawer-tipodeobra"
      placement="right"
      onClose={onClose}
      open={isOpen}
      width={1071}
      closable={false}
      headerStyle={{ display: "none" }}
      drawerStyle={{ borderRadius: "10px" }}
    >
      {/* Botón de cierre */}
      <div className="absolute top-5 right-6 cursor-pointer" onClick={onClose}>
        <img
          src="/public/svg/popup-ao/cerrar (2).svg"
          alt="Cerrar"
          className="w-6 h-6"
        />
      </div>

      {/* Contenido del drawer */}
      <div className="flex flex-col gap-4 px-6 py-1">
        {/* Checkboxes */}
        <div className="flex gap-6 items-center">
          <CheckboxWithLabel
            label="Obras propias"
            checked={selectedCheckboxes.obraPropia}
            onChange={() => handleCheckboxChange("obraPropia")}
          />
          <CheckboxWithLabel
            label="Obras en consignación"
            checked={selectedCheckboxes.obraConsignacion}
            onChange={() => handleCheckboxChange("obraConsignacion")}
          />
          {!selectedCheckboxes.obraConsignacion && (
            <CheckboxWithLabel
              label="IVA"
              checked={selectedCheckboxes.iva}
              onChange={() => handleCheckboxChange("iva")}
            />
          )}
        </div>

        {/* Inputs */}
        <InputRow
          fields={inputFields}
          values={inputValues}
          onChange={handleInputChange}
          className="w-[70%]"
        />

        {/* Botones */}
        <div className="flex gap-4 w-full justify-end">
          <button className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2">
            <p className="h4 blanco">Confirmar</p>
            <img src="/svg/gestiondeobras/agregar(2).svg" alt="Confirmar" />
          </button>
          <button
            className="bg-[#222] flex px-2 py-1 rounded-[3px] gap-2"
            onClick={onClose}
          >
            <p className="h4 blanco">Cancelar</p>
            <img src="/svg/gestiondeobras/cancelar.svg" alt="Cancelar" />
          </button>
        </div>
      </div>
    </Drawer>
  );
}
