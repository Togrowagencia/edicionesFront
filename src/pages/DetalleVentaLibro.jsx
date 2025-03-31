import Sidebar from "../components/sidebar";
import Header from "../components/DetalleVentaLibro/Header";
import Banner from "../components/DetalleVentaLibro/Banner";
import Libro from "../components/DetalleVentaLibro/Libro";
import Datos from "../components/DetalleVentaLibro/Datos";
import Estadisticas from "../components/DetalleVentaLibro/Estadisticas";

const DetalleVentaLibro = () => {

  return (
    <div className="w-full h-full px-4 mt-[1%]">
      <Sidebar />
      <div className="w-[83%] pl-8 mt-[0.6%] ml-[17%] bg-white rounded p-4">
        <Header />
        <div className="w-full h-[90%] flex flex-col -ml-[1%] mt-[0.9%]">
          <Banner />
          <div className="flex w-full">
            <div className="flex flex-col w-full p-6 gap-6 h-full">
              <Datos />
              <Estadisticas />
            </div>
            <div className="flex flex-col w-[55%] items-end mt-[-15%] z-20">
              <Libro />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleVentaLibro;
