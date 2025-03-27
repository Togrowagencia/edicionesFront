import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler, // Necesitas importar Filler para el área rellena
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler // Registrar el plugin Filler
);

const Grafico = () => {
  const chartRef = useRef(null);
  const [fillGradient, setFillGradient] = useState(null);

  useEffect(() => {
    const chart = chartRef.current;
    
    if (!chart) {
      return;
    }

    // Esperamos a que el canvas esté disponible
    const canvas = chart.canvas;
    const ctx = canvas.getContext('2d');

    // Degradado para el área debajo de la línea
    const gradientFill = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientFill.addColorStop(0, "rgb(168, 209, 189, 1)"); 
    gradientFill.addColorStop(1, "rgba(168, 209, 189, 0)"); // Transparente
    
    setFillGradient(gradientFill);
  }, []);

  // Datos para el gráfico
  const labels = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "", 
        data: [85, 59, 10, 21, 56, 25, 20, 34, 41, 36, 30, 40, 54],
        fill: {
          target: 'origin', // Esto es importante para el relleno
          above: fillGradient || "rgba(95, 184, 104, 0.2)", // Fallback
        },
        backgroundColor: fillGradient || "rgba(95, 184, 104, 0.2)", // Fallback
        borderColor: "#F1F4FF",
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: "#F1F4FF",
        pointBorderColor: "#F1F4FF",
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverBorderWidth: 7,
        pointHoverRadius: 7,
      },
    ],
  };

  // Configuración del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite que el gráfico se ajuste al contenedor
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 11,
          },
        },
        grid: {
          color: "#FFFFFF",
        },
      },
      y: {
        beginAtZero: true, // Comenzar desde cero
        ticks: {
          color: "#FFFFFF", 
          font: {
            size: 11, 
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
    <div style={{ height: '400px', width: '100%' }}> {/* Asegurar un tamaño adecuado */}
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Grafico;