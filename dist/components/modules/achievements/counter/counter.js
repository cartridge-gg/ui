import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
export const AchievementCounter = ({ count, total, active, className, }) => {
    return (_jsx("div", { className: cn("flex items-center justify-center gap-1.5 px-2 py-1 text-sm rounded-full", active ? "bg-background-300" : "bg-background-200", className), children: _jsx("p", { className: cn("text-xs tracking-wider text-foreground-300 font-semibold", active && "text-foreground-100"), children: `${count}/${total}` }) }));
};
export default AchievementCounter;
//# sourceMappingURL=counter.js.map