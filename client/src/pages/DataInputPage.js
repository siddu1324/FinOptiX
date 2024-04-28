import React, { useState } from 'react';
import Papa from 'papaparse';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'January', sales: 600, forecast: 650 },
  { month: 'February', sales: 700, forecast: 710 },
  { month: 'March', sales: 720, forecast: 780 },
  { month: 'April', sales: 820, forecast: 850 },
  { month: 'May', sales: 900, forecast: 950 },
  { month: 'June', sales: 1050, forecast: 1100 },
  { month: 'July', sales: 1220, forecast: 1250 },
  { month: 'August', sales: 1300, forecast: 1350 },
  { month: 'September', sales: 1380, forecast: 1400 },
  { month: 'October', sales: 1450, forecast: 1480 },
  { month: 'November', sales: 1500, forecast: 1520 },
  { month: 'December', sales: 1550, forecast: 1600 },
  { month: 'January', sales: null, forecast: 1620 },
  { month: 'February', sales: null, forecast: 1650 },
  { month: 'March', sales: null, forecast: 1680 },
  { month: 'April', sales: null, forecast: 1700 },
  { month: 'May', sales: null, forecast: 1720 },
  { month: 'June', sales: null, forecast: 1750 },
];

const SalesChart = () => {
  const [chartData, setChartData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (results) => {
        setChartData(results.data);
      },
      header: true,
      dynamicTyping: true,
    });
  };


  return (
    <div>
      <h2>Upload .csv</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
  	<LineChart width={800} height={400} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="forecast" stroke="#82ca9d" strokeDasharray="5 5" />
    </LineChart>
    </div>
  );
};

export default SalesChart;
