"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function IndustryPieChart({ data }) {
  const industryData = Object.values(
    data.reduce((acc, item) => {
      acc[item.industry] = acc[item.industry] || {
        name: item.industry,
        value: 0,
      };
      acc[item.industry].value += 1;
      return acc;
    }, {})
  );

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={300} height={250}>
      <Pie
        data={industryData}
        dataKey="value"
        nameKey="name"
        outerRadius={80}
      >
        {industryData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}