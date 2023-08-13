export function getYears(oldestYear) {
  const currentYear = new Date().getFullYear();

  const yearsArray = [];
  for (let year = oldestYear; year <= currentYear; year++) {
    yearsArray.push(year);
  }
  return yearsArray;
}
export const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
