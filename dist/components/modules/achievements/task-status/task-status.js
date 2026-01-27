import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckIcon } from "../../../../index";
export function AchievementTaskStatus({ count, total, }) {
    return count >= total ? (_jsxs("div", { className: "flex items-center gap-x-1", children: [_jsx(CheckIcon, { size: "xs", className: "text-foreground-300" }), _jsx("p", { className: "text-xs text-foreground-300", children: total > 1 ? `${count.toLocaleString()}` : "Completed" })] })) : (_jsx("p", { className: "text-xs text-foreground-300", children: `${count.toLocaleString()} of ${total.toLocaleString()}` }));
}
export default AchievementTaskStatus;
//# sourceMappingURL=task-status.js.map