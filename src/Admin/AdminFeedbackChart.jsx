import {Bar} from 'react-chartjs-2'

import{
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    Tooltip,
    Legend,
    Title,
    LinearScale,
    plugins,
}from 'chart.js';

ChartJS.register(CategoryScale,BarElement,Tooltip,Legend,Title,LinearScale);

const BarChart = () => {
    const data = {
        labels: ['Satisfied', 'Neutral', 'Bad'],
        datasets: [
            {
                label: 'Satisfaction',
                data: [12, 18, 10],
                backgroundColor: [
                    '#00808066',
                    '#FF660066',
                    '#D1565E66',
                ],
                borderColor: [
                    '#008080', // border for 'Satisfied'
                    '#CC5200', // border for 'Neutral'
                    '#A13A3F', // border for 'Bad'
                ],
                borderWidth: 1, // Optional: adjust for visibility
            },
        ],
    };

    const option ={
        responsive: true,
        plugins:{
            legend:{
                position:"top",
            },
            title:{
                display:true,
                text:"Feedback",
            }
        }
    }
    return <Bar data={data} options={option}/>
}
export default BarChart
