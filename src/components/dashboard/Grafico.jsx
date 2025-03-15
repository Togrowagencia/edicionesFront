import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registra los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Grafico = () => {
  // Datos para el gráfico
  const labels = ['Enero', 'Febrero', 'Marzo']; // Etiquetas para el eje X
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40], // Datos para el eje Y
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      }
    ]
  };

  // Configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Grafico;