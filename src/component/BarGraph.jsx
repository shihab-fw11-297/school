import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { year: '2010', value: 25 },
  { year: '2011', value: 30 },
  { year: '2012', value: 45 },
  { year: '2013', value: 28 },
  { year: '2014', value: 42 },
  { year: '2015', value: 50 },
  { year: '2016', value: 25 },
  { year: '2017', value: 30 },
  { year: '2018', value: 35 },
  { year: '2019', value: 55 },
  { year: '2020', value: 30 },
  { year: '2021', value: 35 },
];

const AreaChartWithYears = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <XAxis dataKey="year" />
        <YAxis
          label={{ value: 'Year', angle: -90, position: 'insideLeft' }} // Rotate and position y-axis label
          tick={{ angle: -90, textAnchor: 'end' }} // Rotate and position y-axis tick labels
        />
        <CartesianGrid horizontal={true} vertical={false} /> 
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartWithYears;
