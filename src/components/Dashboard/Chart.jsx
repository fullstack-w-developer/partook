import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "../../styles/Dashboard.css"

const data = [
  { name: 'فروردین', value: 1000 },
  { name: 'اردیبهشت', value: 1398 },
  { name: 'خرداد', value: 9800 },
  { name: 'تیر', value: 3908 },
  { name: 'مرداد', value: 4800 },
  { name: 'شهریور', value: 3490 },
  { name: 'مهر', value: 3490 },
  { name: 'ابان', value: 4800 },
  { name: 'اذر', value: 3908 },
  { name: 'دی', value: 9800 },
  { name: 'بهمن', value: 2400 },
  { name: 'اسفند', value: 1398 }
];

const Chart = () => (
  <div className="flexAlign chart">
    <BarChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#D1913C" />
    </BarChart>
  </div>
);

export default Chart;