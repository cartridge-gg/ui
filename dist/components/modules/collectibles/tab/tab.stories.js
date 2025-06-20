import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectibleTab } from "./tab";
import { BookIcon, PulseIcon, Tabs, TabsList } from "../../../../index";
const Wrapper = ({ children }) => (_jsx(Tabs, { defaultValue: "collectibles", children: _jsx(TabsList, { className: "h-auto grid w-full grid-cols-2 gap-x-4 bg-transparent p-0", children: children }) }));
const meta = {
    title: "Modules/Collectibles/Tab",
    component: CollectibleTab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        value: "collectibles",
        label: "Collectibles",
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(Wrapper, { children: [_jsx(CollectibleTab, { value: "details", label: "Details", active: true, Icon: _jsx(BookIcon, { variant: "solid", size: "sm" }) }), _jsx(CollectibleTab, { value: "activity", label: "Activity", active: false, Icon: _jsx(PulseIcon, { variant: "solid", size: "sm" }) })] })),
};
//# sourceMappingURL=tab.stories.js.map