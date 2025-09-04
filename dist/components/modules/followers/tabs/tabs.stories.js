import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FollowerTabs } from "./tabs";
import { TabsContent } from "../../../../index";
const meta = {
    title: "Modules/Followers/Tabs",
    component: FollowerTabs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(FollowerTabs, { defaultValue: "followers", followers: 12, following: 6, children: [_jsx(TabsContent, { className: "p-0 mt-0", value: "followers", children: _jsx("h1", { className: "text-foreground-100 p-4", children: "Followers content" }) }), _jsx(TabsContent, { className: "p-0 mt-0", value: "following", children: _jsx("h1", { className: "text-foreground-100 p-4", children: "Following content" }) })] })),
};
//# sourceMappingURL=tabs.stories.js.map