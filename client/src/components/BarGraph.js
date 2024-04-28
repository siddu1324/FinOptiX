import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraph = () => {
  const data = [
    { Month: 'January', COGS: 12000, Travel: 2000 },
    { Month: 'February', COGS: 18000, Travel: 2200 },
    { Month: 'March', COGS: 15000, Travel: 2500 },
    { Month: 'April', COGS: 19000, Travel: 2600 },
    { Month: 'May', COGS: 21000, Travel: 3000 },
    { Month: 'June', COGS: 23000, Travel: 3200 },
    { Month: 'July', COGS: 22000, Travel: 3100 },
    { Month: 'August', COGS: 25000, Travel: 3300 },
    { Month: 'September', COGS: 21000, Travel: 3400 },
    { Month: 'October', COGS: 23000, Travel: 3500 },
    { Month: 'November', COGS: 24000, Travel: 3600 },
    { Month: 'December', COGS: 26000, Travel: 3700 },
  ];

  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Month" interval={0} tick={{ fontSize: 14, fill: '#666' }} angle={-45} textAnchor="end" />
      <YAxis tick={{ fontSize: 14, fill: '#666' }} />
      <Tooltip />
      <Legend wrapperStyle={{ top: 0, right: 0, fontWeight: 'bold', fontSize: '14px' }} />
      <Bar dataKey="COGS" fill="#8884d8" barSize={20} radius={[5, 5, 0, 0]} />
      <Bar dataKey="Travel" fill="#82ca9d" barSize={20} radius={[5, 5, 0, 0]} />
    </BarChart>
  );
};

export default BarGraph;
