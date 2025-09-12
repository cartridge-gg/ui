import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPinIcons } from "./pin-icons";
const meta = {
    title: "Modules/Achievements/Pin Icons",
    component: AchievementPinIcons,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        pins: [
            {
                id: "1",
                icon: "fa-seedling",
            },
            {
                id: "2",
                icon: "fa-swords",
            },
        ],
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
const sizes = ["xs", "default", "md"];
export const Default = {
    render: (args) => (_jsx("div", { className: "flex flex-col gap-3", children: variants.map((variant) => (_jsxs("div", { className: "grid grid-cols-4 items-center", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), sizes.map((size) => (_jsx(AchievementPinIcons, { variant: variant, size: size, ...args }, `${variant}-${size}`)))] }, variant))) })),
};
export const Theme = {
    render: (args) => (_jsx("div", { className: "flex flex-col gap-3", children: variants.map((variant) => (_jsxs("div", { className: "grid grid-cols-4 items-center", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), sizes.map((size) => (_jsx(AchievementPinIcons, { variant: variant, size: size, theme: true, ...args }, `${variant}-${size}`)))] }, variant))) })),
};
export const Color = {
    render: (args) => (_jsx("div", { className: "flex flex-col gap-3", children: variants.map((variant) => (_jsxs("div", { className: "grid grid-cols-4 items-center", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), sizes.map((size) => (_jsx(AchievementPinIcons, { variant: variant, size: size, color: "#ff00ff", ...args }, `${variant}-${size}`)))] }, variant))) })),
};
//# sourceMappingURL=pin-icons.stories.js.map