"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function IndustryPieChart({ data }) {
  const grouped = {};

  data.forEach((d) => {
    grouped[d.industry] = (grouped[d.industry] || 0) + 1;
  });

  const chartData = Object.keys(grouped).map((key) => ({
    name: key,
    value: grouped[key],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={chartData}
        dataKey="value"
        outerRadius={100}
        fill="#8884d8"
      >
        {chartData.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}