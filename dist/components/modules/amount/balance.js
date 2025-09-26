import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../utils";
export function Balance({ value, symbol, className, onClick = () => { }, }) {
    return (_jsx("div", { className: cn("text-xs uppercase font-medium text-foreground-100 cursor-pointer", "hover:underline", className), onClick: onClick, children: `${value.toLocaleString()} ${symbol}` }));
}
//# sourceMappingURL=balance.js.map