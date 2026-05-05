"use client";

import { useSelector } from "react-redux";
import IndustryPieChart from "@/components/IndustryPieChart";

export default function CorporatePage() {
  // ✅ Get data from Redux
  const { data } = useSelector((state) => state.deals);

  return (
    <div className="p-6 bg-gray-950 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">
        Corporate Dashboard
      </h1>

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <IndustryPieChart data={data || []} />
      </div>
    </div>
  );
}