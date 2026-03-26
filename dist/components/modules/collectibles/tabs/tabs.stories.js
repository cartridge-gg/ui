import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectibleTabs } from "./tabs";
import { TabsContent } from "../../../../index";
const meta = {
    title: "Modules/Collectibles/Tabs",
    component: CollectibleTabs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(CollectibleTabs, { order: ["details", "items", "activity"], children: [_jsx(TabsContent, { className: "p-0 mt-0", value: "details", children: _jsx("h1", { className: "text-foreground-100 p-4", children: "Details content" }) }), _jsx(TabsContent, { className: "p-0 mt-0", value: "items", children: _jsx("h1", { className: "text-foreground-100 p-4", children: "Items content" }) }), _jsx(TabsContent, { className: "p-0 mt-0", value: "activity", children: _jsx("h1", { className: "text-foreground-100 p-4", children: "Activity content" }) })] })),
};
//# sourceMappingURL=tabs.stories.js.map