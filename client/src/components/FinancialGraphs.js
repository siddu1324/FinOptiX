import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import "../styles.css"; 

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
];

const FinancialGraphs = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default FinancialGraphs;
