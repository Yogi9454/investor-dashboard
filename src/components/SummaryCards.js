export default function SummaryCards({ deals }) {
  const totalInvestment = deals.reduce(
    (sum, d) => sum + d.investment,
    0
  );

  const avgROI =
    deals.reduce((sum, d) => sum + d.roi, 0) /
    deals.length;

  const highRisk = deals.filter(
    (d) => d.risk === "High"
  ).length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

  <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
    <p className="text-gray-400 text-sm">Total Investment</p>
    <h2 className="text-xl font-semibold mt-1">
      ₹{totalInvestment}
    </h2>
  </div>

  <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
    <p className="text-gray-400 text-sm">Avg ROI</p>
    <h2 className="text-xl font-semibold mt-1">
      {avgROI.toFixed(2)}%
    </h2>
  </div>

  <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
    <p className="text-gray-400 text-sm">Total Deals</p>
    <h2 className="text-xl font-semibold mt-1">
      {deals.length}
    </h2>
  </div>

  <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
    <p className="text-gray-400 text-sm">High Risk</p>
    <h2 className="text-xl font-semibold mt-1">
      {highRisk}
    </h2>
  </div>

</div>
  );
}