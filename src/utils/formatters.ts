export const formatDecimal = (value: number): string => {
  return value.toFixed(1);
};

export const formatNumber = (value: number): string => {
  return value.toLocaleString();
};