import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CalendarIcon, Separator, SparklesIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { getDate } from "../../../../utils";
export function AchievementPoints({ points, timestamp, }) {
    return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: cn("flex items-center gap-1", timestamp ? "text-foreground-400" : "text-foreground-300"), children: [_jsx(SparklesIcon, { size: "xs", variant: timestamp ? "line" : "solid" }), _jsx("p", { className: cn("text-xs", timestamp && "line-through"), children: points.toLocaleString() })] }), timestamp && (_jsx(Separator, { className: "bg-background-400 h-2 ml-0.5", orientation: "vertical" })), timestamp && _jsx(Timestamp, { timestamp: timestamp })] }));
}
function Timestamp({ timestamp }) {
    return (_jsxs("div", { className: "flex items-center gap-1 text-foreground-400", children: [_jsx(CalendarIcon, { size: "xs", variant: "line" }), _jsx("p", { className: "text-xs", children: getDate(timestamp * 1000) })] }));
}
export default AchievementPoints;
//# sourceMappingURL=points.js.map