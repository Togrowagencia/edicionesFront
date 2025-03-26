import Sidebar from "../components/sidebar";
import Header from "../components/dashboard/headerD";
import Banner from "../components/InformedeConsignacion/Banner";
import Tabla from "../components/InformedeConsignacion/Tabla";
import Unidades from "../components/InformedeConsignacion/Unidades";

const InformeDeConsignacion = () => {

  return (
    <div className="w-full h-full px-4 mt-[1%]">
      <Sidebar />
      <div className="w-[83%] pl-8 mt-[0.6%] ml-[17%] bg-white rounded p-4">
        <Header />
        <div className="w-full h-[90%] flex -ml-[1%] mt-[0.9%]">
          <div className="w-[100%] h-[90%]">
            <Banner />
            <div className="w-[100%] h-full px-[20px] flex flex-wrap relative mt-[-4.5%]">
            <Unidades/> 
            </div>
            <Tabla />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformeDeConsignacion;
