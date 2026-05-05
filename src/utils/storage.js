export const saveInterest = (deal) => {
  const existing = JSON.parse(localStorage.getItem("interests")) || [];
  localStorage.setItem("interests", JSON.stringify([...existing, deal]));
};

export const getInterests = () => {
  return JSON.parse(localStorage.getItem("interests")) || [];
};