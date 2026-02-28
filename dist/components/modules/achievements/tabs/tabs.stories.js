import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementTabs } from "./tabs";
import { TabsContent } from "../../../../index";
const meta = {
    title: "Modules/Achievements/Tabs",
    component: AchievementTabs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(AchievementTabs, { count: 4, total: 10, rank: 16, children: [_jsx(TabsContent, { className: "p-0 mt-0", value: "achievements", children: _jsx("h1", { className: "text-foreground-100 p-4", children: "Achievements content" }) }), _jsx(TabsContent, { className: "p-0 mt-0", value: "leaderboard", children: _jsx("h1", { className: "text-foreground-100 p-4", children: "Leaderboard content" }) })] })),
};
//# sourceMappingURL=tabs.stories.js.map