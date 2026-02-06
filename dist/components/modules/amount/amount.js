import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, Error, Input, Button, PlusIcon, MinusIcon, } from "../../../components";
import { Max } from "./max";
import { Conversion } from "./conversion";
import { Balance } from "./balance";
import { useEffect, useMemo } from "react";
export function Amount({ amount, conversion, balance, symbol, decimals, submitted, onChange, onMax, setError, title = "Amount", label = "Balance", min, max, onPlus, onMinus, }) {
    const error = useMemo(() => {
        if (amount && amount > balance)
            return "Insufficient balance";
        const minAmountStr = decimals > 1 ? `0.${"0".repeat(decimals - 1)}1` : "0";
        if (amount && amount < parseFloat(minAmountStr))
            return `Min value is ${minAmountStr}`;
        if (submitted && !amount)
            return "Invalid amount";
        return "";
    }, [amount, balance, decimals, submitted]);
    useEffect(() => {
        setError(error ? { name: "Error", message: error } : undefined);
    }, [error, setError]);
    return (_jsxs("div", { className: "flex flex-col gap-y-px", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Header, { label: title }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Header, { label: `${label}:` }), _jsx(Balance, { value: balance, symbol: symbol, onClick: onMax })] })] }), _jsxs("div", { className: "flex flex-col gap-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "relative grow", children: [_jsx(Input, { size: "lg", type: "number", className: "h-10 pr-28", placeholder: (0).toLocaleString(), value: amount ?? "", error: error ? { name: "Error", message: "" } : undefined, onChange: onChange }), _jsxs("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-x-3 justify-end", children: [_jsx(Conversion, { value: amount && !error ? conversion : undefined }), _jsx(Max, { onClick: onMax })] })] }), !!onMinus && min !== undefined && (_jsx(Button, { variant: "secondary", className: "h-10 w-10 p-2.5", onClick: onMinus, disabled: (amount || 0) <= min, children: _jsx(MinusIcon, { size: "xs" }) })), !!onPlus && max !== undefined && (_jsx(Button, { variant: "secondary", className: "h-10 w-10 p-2.5", onClick: onPlus, disabled: (amount || 0) >= max, children: _jsx(PlusIcon, { variant: "solid", size: "xs" }) }))] }), _jsx(Error, { label: error })] })] }));
}
//# sourceMappingURL=amount.js.map