import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const Ganancia = () => {
  const ganancia = 127;
  const total = 100;
  const porcentaje = ganancia;

  // Configuración para el efecto de puntos
  const segmentLength = 10; 
  const gapLength = 9;
  const borderDash = [segmentLength, gapLength];
  const borderDashOffset = 40;

  const data = {
    labels: ["Ganancia", "Restante"],
    datasets: [
      {
        data: [ganancia, total - ganancia],
        backgroundColor: ["transparent", "transparent"],
        borderColor: ["#00733C", "#000"],
        borderWidth: 16,
        borderDash: borderDash, 
        borderDashOffset: borderDashOffset,
        cutout: "100%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    rotation: 60,
    circumference: 360, 
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <div className="relative w-full h-[80%] gap-4 flex flex-col items-center">
      <p className="textos gris-elegancia">Margen de ganancia por libro</p>
      
      <div className="relative w-full flex items-center h-[160px] justify-center">
        <Doughnut data={data} options={options} />
        
        {/* Texto centrado */}
        <div className="absolute flex flex-col items-center justify-center">
          <div className="flex items-end">
            <p className="h2">{porcentaje}</p>
            <span className="h4 negro h-6">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ganancia;