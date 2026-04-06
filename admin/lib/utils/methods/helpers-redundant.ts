export const formatValue = (v: number) => `$${v.toFixed(2)}`;
export const parseDate = (d: string) => new Date(d).toDateString();
