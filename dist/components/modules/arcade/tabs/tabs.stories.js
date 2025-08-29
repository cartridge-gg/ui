import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArcadeTabs } from "./tabs";
import { fn } from "@storybook/test";
import { TabsContent } from "../../../../index";
const meta = {
    title: "Modules/Arcade/Tabs",
    component: ArcadeTabs,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        onTabClick: fn(),
    },
};
export default meta;
export const Default = {
    render: (args) => (_jsxs(ArcadeTabs, { ...args, children: [_jsx(TabsContent, { value: "inventory", children: "Inventory content" }), _jsx(TabsContent, { value: "achievements", children: "Achievements content" }), _jsx(TabsContent, { value: "leaderboard", children: "Leaderboard content" }), _jsx(TabsContent, { value: "guilds", children: "Guilds content" }), _jsx(TabsContent, { value: "activity", children: "Activity content" }), _jsx(TabsContent, { value: "metrics", children: "Metrics content" }), _jsx(TabsContent, { value: "about", children: "About content" }), _jsx(TabsContent, { value: "marketplace", children: "Marketplace content" }), _jsx(TabsContent, { value: "items", children: "Items content" }), _jsx(TabsContent, { value: "holders", children: "Holders content" })] })),
};
export const Game = {
    args: {
        defaultValue: "activity",
        order: ["activity", "leaderboard", "marketplace", "guilds", "about"],
    },
};
export const Marketplace = {
    args: {
        defaultValue: "activity",
        order: ["activity", "items", "holders"],
    },
};
export const Player = {
    args: {
        defaultValue: "inventory",
        order: ["inventory", "achievements", "activity"],
    },
};
//# sourceMappingURL=tabs.stories.js.map