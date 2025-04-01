import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const Objetivo = () => {
    const porcentaje = 50;

    // Add gradient definition
    const createGradient = (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 190);
        gradient.addColorStop(0, '#5FB868');
        gradient.addColorStop(1, '#00733C');
        return gradient;
    };

    const data = {
        labels: ["Porcentaje", "Fondo"],
        datasets: [
            {
                data: [porcentaje, 100 - porcentaje],
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx } = chart;
                    return [createGradient(ctx), 'transparent'];
                },
                borderColor: ["transparent", "transparent"],
                borderWidth: 0,
                cutout: "90%",
                spacing: 0,
                borderRadius: 20,
                roundedCorners: true, 
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
        <div className="absolute flex-col flex h-[190px] w-[190px] rounded-[100%] p-2 top-[10%]">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[url('/svg/ControldeVentas/grafico.svg')] bg-cover bg-center bg-no-repeat w-[70%] h-[70%] border-[7px] rounded-[100%]">
                    <span className="h3 blanco absolute inset-0 flex items-center justify-center">
                        {porcentaje}%
                    </span>
                    <p className="textos-peques2 blanco absolute inset-0 top-9 flex items-center justify-center">
                    51,000,000/60,000,000
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Objetivo;
