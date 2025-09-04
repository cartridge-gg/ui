import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FollowerTab } from "./tab";
import { Tabs, TabsList } from "../../../../index";
const Wrapper = ({ children }) => (_jsx(Tabs, { defaultValue: "followers", children: _jsx(TabsList, { className: "h-auto grid w-full grid-cols-2 gap-x-4 bg-transparent p-0", children: children }) }));
const meta = {
    title: "Modules/Followers/Tab",
    component: FollowerTab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        value: "followers",
        label: "Followers",
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(Wrapper, { children: [_jsx(FollowerTab, { value: "followers", label: "Followers", active: true, counter: 12 }), _jsx(FollowerTab, { value: "following", label: "Following", active: false, counter: 6 })] })),
};
//# sourceMappingURL=tab.stories.js.map