import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FollowerTag } from "./tag";
const meta = {
    title: "Modules/Followers/Tag",
    component: FollowerTag,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
const variants = [
    "darkest",
    "darker",
    "dark",
    "default",
    "light",
    "lighter",
    "lightest",
    "ghost",
];
export const Default = {
    render: (args) => (_jsx("div", { className: "flex flex-col gap-y-2", children: variants.map((variant) => (_jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsx("p", { className: "text-xs font-medium capitalize", children: variant }), _jsx(FollowerTag, { ...args, variant: variant })] }, variant))) })),
};
//# sourceMappingURL=tag.stories.js.map