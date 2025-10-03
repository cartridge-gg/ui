import { jsx as _jsx } from "react/jsx-runtime";
import { ArcadeTab } from "./tab";
import { SparklesIcon } from "../../../../components/icons";
import { Tabs, TabsList } from "../../../../index";
const Wrapper = ({ children }) => (_jsx(Tabs, { className: "p-0", defaultValue: "assets", children: _jsx(TabsList, { className: "p-0", children: children }) }));
const meta = {
    title: "Modules/Arcade/Tab",
    component: ArcadeTab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(Wrapper, { children: _jsx(ArcadeTab, { Icon: _jsx(SparklesIcon, { variant: "solid", size: "default" }), value: "assets", label: "Assets", variant: "default" }) })),
};
export const Active = {
    render: () => (_jsx(Wrapper, { children: _jsx(ArcadeTab, { Icon: _jsx(SparklesIcon, { variant: "solid", size: "default" }), value: "assets", label: "Assets", active: true, variant: "default" }) })),
};
//# sourceMappingURL=tab.stories.js.map