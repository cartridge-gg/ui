import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArcadeMenuItem } from "./menu-item";
import { SparklesIcon, SwordsIcon } from "../../../../components/icons";
import { ArcadeMenuButton, Select, SelectContent, Tabs, TabsList, } from "../../../../index";
const meta = {
    title: "Modules/Arcade/Menu Item",
    component: ArcadeMenuItem,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(Tabs, { className: "p-0", defaultValue: "assets", children: _jsx(TabsList, { className: "p-0 h-8", children: _jsxs(Select, { defaultValue: "assets", children: [_jsx(ArcadeMenuButton, {}), _jsxs(SelectContent, { className: "p-0 flex flex-col gap-2 items-stretch", children: [_jsx(ArcadeMenuItem, { Icon: _jsx(SparklesIcon, { variant: "solid", size: "sm" }), value: "assets", label: "Assets", variant: "default" }), _jsx(ArcadeMenuItem, { Icon: _jsx(SwordsIcon, { variant: "solid", size: "sm" }), value: "other", label: "Other", variant: "default" })] })] }) }) })),
};
export const Active = {
    render: () => (_jsx(Tabs, { className: "p-0", defaultValue: "assets", children: _jsx(TabsList, { className: "p-0 h-8", children: _jsxs(Select, { defaultValue: "assets", children: [_jsx(ArcadeMenuButton, { active: true }), _jsxs(SelectContent, { className: "p-0 flex flex-col gap-2 items-stretch", children: [_jsx(ArcadeMenuItem, { Icon: _jsx(SparklesIcon, { variant: "solid", size: "sm" }), value: "assets", label: "Assets", active: true, variant: "default" }), _jsx(ArcadeMenuItem, { Icon: _jsx(SwordsIcon, { variant: "solid", size: "sm" }), value: "other", label: "Other", variant: "default" })] })] }) }) })),
};
//# sourceMappingURL=menu-item.stories.js.map