import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const Grafico = () => {
  const chartRef = useRef(null);
  const [lineGradient, setLineGradient] = useState(null);
  const [fillGradient, setFillGradient] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;

      // Degradado para la línea
      const gradientLine = ctx.createLinearGradient(0, 0, 0, 200);
      gradientLine.addColorStop(0, "#5FB868");
      gradientLine.addColorStop(1, "#A8D1BD");
      setLineGradient(gradientLine);

      // Degradado para el área debajo de la línea
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 260);
      gradientFill.addColorStop(0.27, "rgba(95, 184, 104, 0.9)"); // Verde oscuro con opacidad
      gradientFill.addColorStop(0.5, "rgba(39, 183, 255, 0.5)"); // Azul con opacidad media
      gradientFill.addColorStop(1, "rgba(95, 184, 104, 0)"); // Transparente
      setFillGradient(gradientFill);
    }
  }, []);

  // Datos para el gráfico
  const labels = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Agost", "Sep", "Oct", "Nov", "Dic"
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "", 
        data: [65, 59, 80, 81, 56, 55, 50, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: fillGradient || "rgba(95, 184, 104, 0.9)",
        borderColor: lineGradient || "#5FB868",
        tension: 0.4,
        borderWidth: 5,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: lineGradient || "#5FB868",
        pointBorderWidth: 9,
        pointRadius: 10,
        pointHoverBorderWidth: 15,
        pointHoverRadius: 15,
      },
    ],
  };

  // Configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF", // Cambia el color de los textos en el eje X
          font: {
            size: 14, // Cambia el tamaño de la fuente del eje X
          },
        },
        grid: {
          color: "#FFFFFF", // Color de las líneas del eje X
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF", 
          font: {
            size: 14, 
          },
          stepSize: 10, 
        },
        grid: {
          color: "#FFFFFF", 
        },
      },
    },
  };

  return (
    <div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Grafico;
