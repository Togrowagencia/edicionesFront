import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Cantidad = () => {
    // Colores personalizados
    const colors = {
        series: ['#00733C', '#000000'], // Verde oscuro para "Propios", Negro para "En consignación"
        text: '#000000', // Color del texto
        background: 'transparent' // Fondo transparente
    };

    const fontFamily = 'Afacad, sans-serif';

    const [state] = React.useState({
        series: [{
            name: 'En consignación',
            data: [40] // Valor absoluto
        }, {
            name: 'Propios',
            data: [170] // Valor absoluto
        }],
        options: {
            chart: {
                type: 'bar',
                height: 170,
                stacked: true,
                stackType: '100%',
                fontFamily: fontFamily,
                background: colors.background,
                toolbar: { show: false },
                animations: { enabled: true }
            },
            colors: colors.series,
            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 0, // Sin bordes redondeados
                    barHeight: '35%', // Altura de la barra
                    dataLabels: {
                        position: 'start', // Posición de las etiquetas
                        hideOverflowingLabels: false
                    }
                },
            },
            dataLabels: {
                enabled: false,

                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    colors: ['#FFF', '#FFF']
                },
                dropShadow: { enabled: false }
            },
            stroke: {
                width: 0 // Sin borde
            },
            title: {
                text: 'Cantidad',
                align: 'left',
                style: {
                    color: '#9E9E9E',
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: fontFamily
                },
                margin: 0
            },
            xaxis: {
                categories: [''],
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false } // Oculta etiquetas del eje X
            },
            yaxis: {
                show: false // Oculta completamente el eje Y
            },
            grid: {
                show: false // Oculta la cuadrícula
            },
            tooltip: {
                style: {
                    color: '#FFF',
                    fontFamily: fontFamily,
                },
                enabled: true
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                markers: {
                    width: 22,
                    height: 22,
                    radius: 0
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 0
                },
                fontSize: '20px',
                fontFamily: fontFamily,
                onItemClick: { toggleDataSeries: false },
                color: '#9E9E9E',
                fontWeight: '600',
            },
            fill: {
                opacity: 1
            }
        },
    });

    return (
        <div id="chart" style={{ width: '100%', marginTop: '0%', height:'45%' }}>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={215}
            />
        </div>
    );
}

export default Cantidad;