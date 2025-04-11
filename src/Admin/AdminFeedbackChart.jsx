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

const BarChart = ()=>{
    const data ={
        labels : ['Satisfied', 'Neutral', 'Bad'],
        datasets:[
        {
            label :'Satisfaction',
            data:[12, 18 , 10],
            backgroundColor: [
                '#008080',
                '#FF6600',
                '#D1565E',

            ],
        },
        ],
    }
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
