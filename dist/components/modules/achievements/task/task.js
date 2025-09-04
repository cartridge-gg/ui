import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProgressBar, AchievementTaskHeader, AchievementTaskStatus, } from "../../../../index";
export function AchievementTask({ count, total, description, completed, }) {
    return (_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(AchievementTaskHeader, { count: count, total: total, description: description }), _jsxs("div", { className: "flex gap-3", children: [_jsx(ProgressBar, { count: count, total: total, completed: !!completed }), _jsx(AchievementTaskStatus, { count: count, total: total })] })] }));
}
export default AchievementTask;
//# sourceMappingURL=task.js.map