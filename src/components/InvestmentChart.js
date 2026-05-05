"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function InvestmentChart({ data }) {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="company" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="roi" stroke="#8884d8" />
    </LineChart>
  );
}