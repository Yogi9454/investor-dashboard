// src/services/dealService.js

import { deals } from "@/data/deals";

export const fetchDeals = ({
  search = "",
  risk = "",
  industry = "",
  minROI = 0,
  sortBy = "",
  page = 1,
  limit = 5,
} = {}) => {
  return new Promise((resolve, reject) => {
    // ⏳ simulate delay
    setTimeout(() => {
      try {
        let result = [...deals];

        // 🔍 Search
        if (search) {
          result = result.filter((d) =>
            d.company.toLowerCase().includes(search.toLowerCase())
          );
        }

        // 🎯 Filters
        if (risk) {
          result = result.filter((d) => d.risk === risk);
        }

        if (industry) {
          result = result.filter((d) => d.industry === industry);
        }

        if (minROI) {
          result = result.filter((d) => d.roi >= minROI);
        }

        // 🔽 Sorting
        if (sortBy === "roi") {
          result.sort((a, b) => b.roi - a.roi);
        }

        if (sortBy === "investment") {
          result.sort((a, b) => b.investment - a.investment);
        }

        // 📄 Pagination
        const total = result.length;
        const start = (page - 1) * limit;
        const paginated = result.slice(start, start + limit);

        resolve({
          data: paginated,
          total,
        });
      } catch (error) {
        reject("Failed to fetch deals");
      }
    }, 500); // delay
  });
};