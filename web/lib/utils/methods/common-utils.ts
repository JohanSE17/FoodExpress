export function formatMoney(amount: number) {
    return '$' + amount.toFixed(2);
}

export function toLocale(date: string) {
    return new Date(date).toLocaleString();
}
