import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LayoutBottomTabs, layoutBottomTabsVariants } from "./index";
import { BottomTab } from "../../index";
import { ChestIcon, ClockIcon, PulseIcon, SwordsIcon, TrophyIcon, UsersIcon, } from "../icons";
import { cn } from "../../utils";
const meta = {
    title: "Layout/BottomTabs",
    component: LayoutBottomTabs,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
};
export default meta;
export const Default = {
    args: {
        children: (_jsxs("div", { className: cn(layoutBottomTabsVariants(), "px-0 py-0 border-t-0 shadow-none"), children: [_jsx(BottomTab, { children: _jsx(PulseIcon, { variant: "solid", size: "lg" }) }), _jsx(BottomTab, { status: "active", children: _jsx(ChestIcon, { variant: "solid", size: "lg" }) }), _jsx(BottomTab, { children: _jsx(TrophyIcon, { variant: "solid", size: "lg" }) }), _jsx(BottomTab, { children: _jsx(SwordsIcon, { variant: "solid", size: "lg" }) }), _jsx(BottomTab, { children: _jsx(UsersIcon, { variant: "solid", size: "lg" }) }), _jsx(BottomTab, { children: _jsx(ClockIcon, { variant: "solid", size: "lg" }) })] })),
    },
};
//# sourceMappingURL=bottom-tabs.stories.js.map