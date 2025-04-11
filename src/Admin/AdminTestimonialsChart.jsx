import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November', 'December'],
    datasets: [
      {
        label: 'Total Recieved',
        data: [10, 20, 30, 25, 15, 35, 5,10,10,5,5,1],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Testimonials',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
