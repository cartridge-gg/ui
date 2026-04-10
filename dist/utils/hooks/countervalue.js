import { useMemo } from "react";
import { usePriceByAddressesQuery, usePricePeriodByAddressesQuery, } from "../api/cartridge";
function formatValue(balance, amount, decimals) {
    const amountValue = parseFloat(amount) / 10 ** decimals;
    const value = parseFloat(balance) * amountValue;
    // Round and remove insignificant trailing zeros
    const rounded = parseFloat(value.toFixed(2));
    const formatted = value === rounded ? `$${value}` : `~$${rounded}`;
    return {
        value,
        formatted,
    };
}
export function useCountervalue({ tokens, }, options) {
    const addresses = useMemo(() => tokens.map((token) => token.address), [tokens]);
    const { data: priceData, ...restPriceData } = usePriceByAddressesQuery({
        addresses: addresses,
    }, options);
    const { start, end } = useMemo(() => {
        const now = Math.floor(Date.now() / 1000);
        const yesterday = now - 24 * 60 * 60;
        return {
            start: yesterday,
            end: yesterday + 3600,
        };
    }, []);
    const { data: pricePeriodData, ...restPricePeriodData } = usePricePeriodByAddressesQuery({
        addresses,
        start,
        end,
    }, options);
    const countervalues = useMemo(() => {
        return tokens.map(({ balance, address }) => {
            const currentPrice = priceData?.priceByAddresses?.find((price) => BigInt(price.base) === BigInt(address));
            const periodPrice = pricePeriodData?.pricePeriodByAddresses?.find((price) => BigInt(price.base) === BigInt(address));
            if (!currentPrice || !periodPrice) {
                return;
            }
            const { value: currentValue, formatted: currentFormatted } = formatValue(balance, currentPrice.amount, currentPrice.decimals);
            const { value: periodValue, formatted: periodFormatted } = formatValue(balance, periodPrice.amount, periodPrice.decimals);
            return {
                address,
                balance,
                current: {
                    value: currentValue,
                    formatted: currentFormatted,
                },
                period: {
                    value: periodValue,
                    formatted: periodFormatted,
                },
            };
        });
    }, [options?.enabled, priceData, pricePeriodData, tokens]);
    return { countervalues, ...restPriceData, ...restPricePeriodData };
}
//# sourceMappingURL=countervalue.js.map