export function formatCurrency(value: number, currency: string = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(value);
}

export function formatDateShort(date: string | Date) {
    const d = new Date(date);
    return d.toLocaleDateString();
}
