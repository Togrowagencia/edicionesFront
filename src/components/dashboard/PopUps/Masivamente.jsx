import { Drawer } from "antd";

function Masivamente({ visible, onClose }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Verificar que sea un archivo CSV
      if (file.type === "text/csv" || file.name.endsWith(".csv")) {
        console.log("Archivo CSV seleccionado:", file);
        // Aquí puedes procesar el archivo CSV
      } else {
        alert("Por favor, sube un archivo con formato CSV.");
      }
    }
  };

  return (
    <Drawer
      rootClassName="drawer-masi"
      title=""
      placement="right"
      onClose={onClose}
      open={visible}
      width={1483}
      closable={false}
      headerStyle={{ display: "none" }}
      drawerStyle={{ borderRadius: "10px" }}
    >
      <div className="px-8 py-4 flex flex-col w-full gap-6">
        {/* Botón de cierre personalizado */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <img
            src="/public/svg/popup-ao/cerrar (2).svg"
            alt="Cerrar"
            className="w-6 h-6 mt-[10%]"
          />
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <p className="h3 verde-corporativo">Subida masiva de obras</p>
          </div>
          <div className="flex w-full gap-6">
            <div className="flex flex-col w-[70%]">
              <p className="h4 negro">
                El archivo que nos envíes deberá cumplir con algunos requisitos
              </p>
              <p className="textos gris-elegancia">
                Por eso lo compartimos el archivo guia para subir obras de forma
                masiva. Cada campo indicado en el archivo deberá ser completado
                para completar la subida masiva.
              </p>
            </div>
            <div className="flex w-[30%] items-center justify-center gap-2 border border-[#9E9E9E] rounded-[10px]">
              <img
                src="/public/svg/popup-ao/agregar-obra.svg"
                alt="Icono"
                className=""
              />
              <p className="h2 text-[#484848]">Archivo Guia</p>
            </div>
          </div>
        </div>

        {/* Input para subir archivo CSV */}
        <div className="w-full">
          <label className="w-full cursor-pointer">
            <div className="w-full border-2 border-dashed border-[#9E9E9E] rounded-[10px] p-4 flex flex-col items-center justify-center gap-2">
              <p className="h3 text-[#484848]">Adjuntar CSV</p>
              <input
                type="file"
                accept=".csv, text/csv"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </label>
        </div>
        <div className="flex gap-4 w-full justify-end py-2">
          <button className="bg-[#00733C] flex px-2 py-1 rounded-[3px] gap-2">
            <p className="h4 blanco">Confirmar carga masiva de obras</p>
            <img src="/svg/gestiondeobras/agregar(2).svg" alt="" />
          </button>
          <button
            onClick={onClose}
            className="bg-[#222] flex px-2 py-1 rounded-[3px] gap-2"
          >
            <p className="h4 blanco">Cancelar</p>
            <img src="/svg/gestiondeobras/cancelar.svg" alt="" />
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default Masivamente;
