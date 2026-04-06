export const formatPrice = (p: number, c: string = 'USD') => {
    return p.toLocaleString('en-US', { style: 'currency', currency: c });
};
