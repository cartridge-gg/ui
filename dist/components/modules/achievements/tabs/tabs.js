import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsList, AchievementTab, AchievementCounter, LeaderboardCounter, } from "../../../../index";
import { useCallback, useState } from "react";
export const AchievementTabs = ({ count, total, rank, value, className, children, onValueChange, }) => {
    const [active, setActive] = useState("achievements");
    const handleChange = useCallback((value) => {
        setActive(value);
        onValueChange?.(value);
    }, [setActive, onValueChange]);
    return (_jsxs(Tabs, { className: className, value: value, onValueChange: handleChange, children: [_jsxs(TabsList, { className: "h-[45px] grid w-full grid-cols-2 gap-x-4 bg-transparent p-0", children: [_jsx(AchievementTab, { value: "achievements", label: "Achievements", counter: _jsx(AchievementCounter, { count: count, total: total, active: active === "achievements" }), active: active === "achievements" }), _jsx(AchievementTab, { value: "leaderboard", label: "Leaderboard", counter: _jsx(LeaderboardCounter, { rank: rank }), active: active === "leaderboard" })] }), children] }));
};
export default AchievementTabs;
//# sourceMappingURL=tabs.js.map