import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { doughnutData, barData, tooltipConfig } from '../data/chartData';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const ChartsSection: React.FC = () => {
  return (
    <section className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-card rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-orange-600">📊</span> Training Modality Focus
        </h2>
        <p className="text-slate-600 text-sm mb-6">
          Visualizing the learning split. Heavy emphasis on hands-on practice directly applying the theory learned.
        </p>
        <div className="w-full max-w-full mx-auto h-80 relative flex justify-center">
          <Doughnut
            data={doughnutData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutout: '65%',
              plugins: {
                ...tooltipConfig,
                legend: {
                  position: 'right',
                  align: 'center',
                  labels: {
                    boxWidth: 15,
                    padding: 20,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-blue-600">📈</span> Daily Topic Weighting
        </h2>
        <p className="text-slate-600 text-sm mb-6">
          Tracking the shift from pure CAD standards towards total Quality Assurance focus across the 10-day period.
        </p>
        <div className="w-full max-w-full mx-auto h-80 relative">
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { stacked: true },
                y: {
                  stacked: true,
                  beginAtZero: true,
                  max: 100,
                  title: { display: true, text: '% Focus' },
                },
              },
              plugins: {
                ...tooltipConfig,
                legend: { position: 'top' },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;