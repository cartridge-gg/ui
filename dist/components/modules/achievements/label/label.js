import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { AchievementIcon } from "../icon";
import { AchievementPoints } from "../points";
export function AchievementLabel({ title, points, difficulty, icon, timestamp, completed, }) {
    return (_jsxs("div", { className: "flex items-stretch gap-x-3", children: [_jsx(AchievementIcon, { icon: icon, completed: completed }), _jsxs("div", { className: "grow flex flex-col items-stretch", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx(AchievementTitle, { title: title, completed: completed }), _jsx(AchievementPoints, { points: points, timestamp: timestamp })] }), _jsx("p", { className: "text-foreground-300 text-[10px]/[12px]", children: `${difficulty}% of players earned` })] })] }));
}
export function AchievementTitle({ title, completed, }) {
    return (_jsx("p", { className: cn("text-sm font-medium", completed ? "text-foreground-100" : "text-foreground-300"), children: title }));
}
export default AchievementLabel;
//# sourceMappingURL=label.js.map