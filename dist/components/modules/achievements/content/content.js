import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementLabel, AchievementTask, CardContent, } from "../../../../index";
import { useMemo } from "react";
export function AchievementContent({ points, difficulty, icon, title, description, tasks, timestamp, hidden, }) {
    const completed = useMemo(() => {
        return tasks && tasks.every((task) => task.count >= task.total);
    }, [tasks]);
    const show = useMemo(() => {
        return completed || !hidden;
    }, [hidden, completed]);
    return (_jsxs(CardContent, { className: "grow w-full flex flex-col gap-y-3", children: [_jsx(AchievementLabel, { icon: icon, title: show ? (title ?? "") : "Hidden Achievement", points: points, difficulty: difficulty, timestamp: timestamp, completed: completed }), show && _jsx("p", { className: "text-foreground-300 text-xs", children: description }), show &&
                tasks &&
                tasks.map((task) => (_jsx(AchievementTask, { completed: completed, ...task }, task.id)))] }));
}
export default AchievementContent;
//# sourceMappingURL=content.js.map