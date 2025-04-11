import { useState } from "react";
import { Drawer } from "antd";
import { CheckboxWithLabel } from "../../inputs/CheckboxWithLabel";
import { InputRow } from "../../inputs/InputRow";
import { formatearCompra } from "../../../utils/agregarObras";
import { createBuys } from "../../../api/compras";

export function TipodeObra({ isOpen, onClose, libros }) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    own_book: true,
    consignment_book: false,
    iva: false,
  });

  const handleConfirm = () => {
    const datosFinales = {
      ...inputValues,
      ...selectedCheckboxes,
      libros,
    };
    const datosFormateados = formatearCompra(datosFinales);
    const enviarCompra = createBuys(datosFormateados);
    console.log("✅ Datos enviados:", enviarCompra);
  }

  const [inputValues, setInputValues] = useState({});

  const obraPropiaFields = [
    {
      name: "number_invoice",
      iconSrc: "/public/svg/popup-ao/nfactura.svg",
      placeholder: "Nº Factura",
      hasArrow: false,
    },
    {
      name: "rete",
      iconSrc: "/public/svg/popup-ao/retefuente.svg",
      placeholder: "Retefuente",
      hasArrow: false,
    },
    {
      name: "type_buy",
      iconSrc: "",
      placeholder: "Tipo de compra",
      hasArrow: true,
      options: [
        { label: "Contado", value: "Contado" },
        { label: "Credito", value: "Credito" },
      ],
      multiselect: false,
    },
  ];

  const obraConsignacionFields = [
    {
      name: "number_remission",
      iconSrc: "/public/svg/popup-ao/nfactura.svg",
      placeholder: "Nº Remisión",
      hasArrow: false,
    },
    {
      name: "rete",
      iconSrc: "/public/svg/popup-ao/retefuente.svg",
      placeholder: "Retefuente",
      hasArrow: false,
    },
  ];

  const handleInputChange = (name, value) => {
    console.log("Input changed:", name, value);
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checkboxName) => {
    if (checkboxName === "own_book") {
      setSelectedCheckboxes((prev) => ({
        own_book: true,
        consignment_book: false,
        iva: false,
      }));
    } else if (checkboxName === "consignment_book") {
      setSelectedCheckboxes({
        own_book: false,
        consignment_book: true,
        iva: false,
      });
    } else if (checkboxName === "iva") {
      setSelectedCheckboxes((prev) => ({
        ...prev,
        iva: !prev.iva,
      }));
    }
  };

  const inputFields = selectedCheckboxes.consignment_book
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
            checked={selectedCheckboxes.own_book}
            onChange={() => handleCheckboxChange("own_book")}
          />
          <CheckboxWithLabel
            label="Obras en consignación"
            checked={selectedCheckboxes.consignment_book}
            onChange={() => handleCheckboxChange("consignment_book")}
          />
          {!selectedCheckboxes.consignment_book && (
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
          <button
            className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2"
            onClick={handleConfirm}
          >
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
