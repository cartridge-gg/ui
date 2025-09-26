export const formatNumber = (num) => {
    const numericValue = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(numericValue)) {
        return '0';
    }
    // Use the browser's locale for regional number formatting
    return numericValue.toLocaleString(navigator.language);
};
//# sourceMappingURL=number.js.map