"use client";

import { useParams } from "next/navigation";
import { deals } from "@/data/deals";
import { useState } from "react";
import { saveInterest } from "@/utils/storage";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DealDetails() {
  const params = useParams();
  const [tab, setTab] = useState("overview");

  if (!params || !params.id) {
    return <div className="p-6 text-gray-400">Loading...</div>;
  }

  const id = Number(params.id);
  const deal = deals.find((d) => d.id === id);

  if (!deal) {
    return <div className="p-6 text-gray-400">Deal not found</div>;
  }

  // 📊 ROI trend
  const chartData = [
    { year: "Year 1", roi: deal.roi - 5 },
    { year: "Year 2", roi: deal.roi - 2 },
    { year: "Year 3", roi: deal.roi },
  ];

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <div className="max-w-5xl mx-auto p-6">

        {/* 🔙 Back */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            {deal.company}
          </h1>

          <button
            onClick={() => saveInterest(deal)}
            className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500 transition"
          >
            Save Deal
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6 border-b border-gray-800 pb-2">
          <button
            onClick={() => setTab("overview")}
            className={`px-4 py-2 text-sm rounded-md transition ${
              tab === "overview"
                ? "bg-blue-600"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => setTab("analysis")}
            className={`px-4 py-2 text-sm rounded-md transition ${
              tab === "analysis"
                ? "bg-blue-600"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Analysis
          </button>
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow">

            <div className="grid grid-cols-2 gap-4">

              <div>
                <p className="text-gray-400 text-sm">Industry</p>
                <p className="mt-1">{deal.industry}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">ROI</p>
                <p className="mt-1 text-green-400 font-semibold">
                  {deal.roi}%
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Risk</p>
                <p className="mt-1 text-yellow-400">
                  {deal.risk}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Investment</p>
                <p className="mt-1 font-semibold">
                  ₹{deal.investment}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Analysis */}
        {tab === "analysis" && (
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow">

            <h2 className="text-lg font-semibold mb-4">
              ROI Trend
            </h2>

            {/* Responsive Chart */}
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="roi"
                    stroke="#00C49F"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Insights */}
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <span className="text-gray-400">Risk Level:</span>{" "}
                {deal.risk}
              </p>

              <p>
                <span className="text-gray-400">Insight:</span>{" "}
                {deal.risk === "Low"
                  ? "Stable long-term investment"
                  : deal.risk === "Medium"
                  ? "Balanced risk and return"
                  : "High risk with potential high returns"}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}