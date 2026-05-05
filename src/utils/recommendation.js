function riskScore(risk) {
  if (risk === "Low") return 3;
  if (risk === "Medium") return 2;
  if (risk === "High") return 1;
  return 0;
}

export function calculateScore(deal) {
  const roiWeight = 0.7;
  const riskWeight = 0.3;

  const roiScore = deal.roi;
  const riskVal = riskScore(deal.risk) * 10;

  return roiScore * roiWeight + riskVal * riskWeight;
}


export function getRecommendedDeals(deals) {
  return [...deals]
    .map((deal) => {
      const score = calculateScore(deal);

      // 🧠 build reasons
      const reasons = [];

      if (deal.roi >= 20) reasons.push("High ROI");
      else if (deal.roi >= 15) reasons.push("Good ROI");

      if (deal.risk === "Low") reasons.push("Low Risk");
      else if (deal.risk === "Medium") reasons.push("Balanced Risk");

      return {
        ...deal,
        score,
        reasons,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}