export const formatNumber = (num) => {
    // Handle BigInt by converting to number
    let numericValue;
    if (typeof num === "bigint") {
        numericValue = Number(num);
    }
    else if (typeof num === "string") {
        numericValue = parseFloat(num);
    }
    else {
        numericValue = num;
    }
    if (isNaN(numericValue)) {
        return "0";
    }
    // Use the browser's locale for regional number formatting
    return numericValue.toLocaleString(navigator.language);
};
//# sourceMappingURL=number.js.map