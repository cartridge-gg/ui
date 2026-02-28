import { jsx as _jsx } from "react/jsx-runtime";
import { Tabs, TabsList, AchievementTab, AchievementCounter, LeaderboardCounter, } from "../../../../index";
const Wrapper = ({ children }) => (_jsx(Tabs, { defaultValue: "achievements", children: _jsx(TabsList, { className: "h-auto grid w-full grid-cols-2 gap-x-4 bg-transparent p-0", children: children }) }));
const meta = {
    title: "Modules/Achievements/Tab",
    component: AchievementTab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        value: "achievements",
        label: "Achievements",
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(Wrapper, { children: _jsx(AchievementTab, { value: "achievements", label: "Achievements", active: true, counter: _jsx(AchievementCounter, { count: 4, total: 10 }) }) })),
};
export const Inactive = {
    render: () => (_jsx(Wrapper, { children: _jsx(AchievementTab, { value: "leaderboard", label: "Leaderboard", active: false, counter: _jsx(LeaderboardCounter, { rank: 16 }) }) })),
};
//# sourceMappingURL=tab.stories.js.map