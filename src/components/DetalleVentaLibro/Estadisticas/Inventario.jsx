// Componente Inventario.js
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const Inventario = () => {
  const porcentaje = 50;

  const data = {
    labels: ["Porcentaje", "Fondo"],
    datasets: [
      {
        data: [porcentaje, 100 - porcentaje],
        backgroundColor: ["#00733C", "transparent"],
        borderColor: ["#00733C", "transparent"],
        borderWidth: 0,
        cutout: "70%",
        spacing: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    rotation: 140,
    circumference: 360,
    animation: { animateRotate: true },
  };

  return (
    <div className="relative h-[150px] w-[150px] border rounded-[100%] p-2">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border rounded-[100%] h-[50%] w-[50%]">
          <span className="textos-bold negro absolute inset-0 flex items-center justify-center">{porcentaje}%</span>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
