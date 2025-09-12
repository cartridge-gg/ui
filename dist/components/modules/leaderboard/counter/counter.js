import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LeaderboardIcon } from "../../../../index";
import { cn } from "../../../../utils";
export const LeaderboardCounter = ({ rank, active, className, }) => {
    return (_jsxs("div", { className: cn("flex items-center justify-center px-2 py-1 text-sm rounded-full", active ? "bg-background-300" : "bg-background-200", className), children: [_jsx(LeaderboardIcon, { variant: "solid", size: "xs", className: active ? "text-foreground-100" : "text-foreground-300" }), _jsx("p", { className: cn("text-xs tracking-wider text-foreground-300 font-semibold px-0.5", active && "text-foreground-100"), children: rank })] }));
};
export default LeaderboardCounter;
//# sourceMappingURL=counter.js.map