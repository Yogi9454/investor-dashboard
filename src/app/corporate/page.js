"use client";


import IndustryPieChart from "@/components/IndustryPieChart";
<IndustryPieChart data={data} />





import { useSelector } from "react-redux";

export default function CorporateDashboard() {
  const { data } = useSelector((state) => state.deals);

  // 📊 Metrics
  const totalFunding = data.reduce((sum, d) => sum + d.investment, 0);
  const totalDeals = data.length;
  const avgROI =
    data.length > 0
      ? (data.reduce((sum, d) => sum + d.roi, 0) / data.length).toFixed(2)
      : 0;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Corporate Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-800 p-4 rounded">
          <p>Total Funding</p>
          <h2>₹{totalFunding}</h2>
        </div>

        <div className="bg-green-700 p-4 rounded">
          <p>Total Deals</p>
          <h2>{totalDeals}</h2>
        </div>

        <div className="bg-purple-700 p-4 rounded">
          <p>Average ROI</p>
          <h2>{avgROI}%</h2>
        </div>
      </div>
    </div>
  );
}