import React, { useState } from 'react';
import { PieChart, Pie, Sector, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

// Function to render the active shape of the pie chart on hover
const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 10} // Enhance outerRadius by 10 on hover
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  );
};

const PieChartComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle hover state change
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  // Data for the pie chart
  const data = [
    { name: 'COGS', value: 0.470661 },
    { name: 'Revenue', value: 0.427728 },
    { name: 'Marketing', value: 0.040455 },
    { name: 'Payroll', value: 0.033108 },
    { name: 'R&D', value: 0.012256 },
    { name: 'Travel', value: 0.006610 }
  ];

  // Colors for each pie section
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#85144b', '#B10DC9', '#3D9970'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
          animationDuration={800}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend/>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
