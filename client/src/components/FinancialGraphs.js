import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dataFromCSV = [
  { Date: '2023-01-15', Revenue: '20000', Profit: '3000' },
  { Date: '2023-02-15', Revenue: '25000', Profit: '5000' },
  { Date: '2023-03-15', Revenue: '23000', Profit: '4000' },
  { Date: '2023-04-15', Revenue: '28000', Profit: '4500' },
  { Date: '2023-05-15', Revenue: '30000', Profit: '6000' },
  { Date: '2023-06-15', Revenue: '32000', Profit: '7000' },
  { Date: '2023-07-15', Revenue: '31000', Profit: '6500' },
  { Date: '2023-08-15', Revenue: '33000', Profit: '6800' },
  { Date: '2023-09-15', Revenue: '34000', Profit: '8500' },
  { Date: '2023-10-15', Revenue: '36000', Profit: '8000' },
  { Date: '2023-11-15', Revenue: '37000', Profit: '9000' },
  { Date: '2023-12-15', Revenue: '38000', Profit: '9500' },
  // Add more data as needed
];

const FinancialChart = ({ startMonth = 1, endMonth = 12 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const processedData = dataFromCSV
      .filter(item => {
        const date = new Date(item.Date);
        const month = date.getMonth() + 1;
        return month >= startMonth && month <= endMonth;
      })
      .reduce((acc, item) => {
        const month = new Date(item.Date).toLocaleString('default', { month: 'long' });
        const existing = acc.find(data => data.Month === month);
        if (existing) {
          existing.Revenue += parseFloat(item.Revenue);
          existing.Profit += parseFloat(item.Profit);
        } else {
          acc.push({
            Month: month,
            Revenue: parseFloat(item.Revenue),
            Profit: parseFloat(item.Profit)
          });
        }
        return acc;
      }, []);
    setData(processedData);
  }, [startMonth, endMonth]);

  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
      <Line type="monotone" dataKey="Profit" stroke="#82ca9d" />
    </LineChart>
  );
};

export default FinancialChart;
