"use client";

import { useEffect } from "react";
import SummaryCards from "../components/SummaryCards";
import InvestmentChart from "../components/InvestmentChart";
import { getRecommendedDeals } from "@/utils/recommendation";
import useDebounce from "@/hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { loadDeals, setParams } from "@/store/slices/dealsSlice";
import { useMemo } from "react";

export default function Home() {
  const dispatch = useDispatch();

  const { data, loading, params } = useSelector(
    (state) => state.deals
  );

  // ⏱ Debounced search
  const debouncedSearch = useDebounce(params.search, 400);

  // 🔄 Fetch deals (Redux async)
  useEffect(() => {
    dispatch(
      loadDeals({
        ...params,
        search: debouncedSearch,
      })
    );
  }, [
    dispatch,
    debouncedSearch,
    params.risk,
    params.industry,
    params.minROI,
    params.page,
  ]);

  // 🔁 Reset page on filters/search
  useEffect(() => {
    dispatch(setParams({ page: 1 }));
  }, [params.search, params.risk, params.industry, params.minROI, dispatch]);

  // ⭐ Recommendation
  const recommendedDeals = getRecommendedDeals(data);

  return (
    <div className="p-5 bg-gray-900 min-h-screen text-white">

      <h1 className="text-2xl font-bold mb-4">
        Investment Dashboard
      </h1>

      {/* Summary */}
      <SummaryCards deals={data} />

      {/* Chart */}
      <InvestmentChart data={data} />

      {/* ⭐ Recommended Deals */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">
          ⭐ Recommended Deals
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {recommendedDeals?.map((deal) => (
            <div
              key={deal.id}
              className="bg-gray-800 p-4 rounded-xl shadow"
            >
              <h3 className="text-lg font-semibold">
                {deal.company}
              </h3>

              <p className="text-gray-400 text-sm">
                ROI: {deal.roi}% | Risk: {deal.risk}
              </p>

              <div className="flex gap-2 mt-2">
                {deal.reasons?.map((r, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-600 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 mt-2">
                Recommended because of {deal.reasons?.join(" & ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search company..."
        className="w-full p-3 mb-6 bg-gray-800 border border-gray-600 rounded"
        value={params.search}
        onChange={(e) =>
          dispatch(setParams({ search: e.target.value }))
        }
      />

      {/* ⏳ Loading */}
      {loading && (
        <p className="text-gray-400 mb-4">Loading...</p>
      )}

      {/* 📄 Deal List */}
      <h2 className="text-xl font-bold mb-3">All Deals</h2>

      {!loading && data.length === 0 ? (
        <p className="text-gray-400">No results found</p>
      ) : (
        data.map((deal) => (
          <div
            key={deal.id}
            className="bg-gray-800 p-4 mb-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">
                {deal.company}
              </h2>
              <p className="text-gray-400">
                ROI: {deal.roi}% | Risk: {deal.risk}
              </p>
            </div>

            <a
              href={`/deal/${deal.id}`}
              className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500 text-sm"
            >
              View
            </a>
          </div>
        ))
      )}

      {/* 📄 Pagination */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() =>
            dispatch(
              setParams({
                page: Math.max(params.page - 1, 1),
              })
            )
          }
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          Page {params.page}
        </span>

        <button
          onClick={() =>
            dispatch(
              setParams({
                page: params.page + 1,
              })
            )
          }
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}