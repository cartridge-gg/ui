import { jsx as _jsx } from "react/jsx-runtime";
import { AchievementPinIcon } from "./pin-icon";
const meta = {
    title: "Modules/Achievements/Pin Icon",
    component: AchievementPinIcon,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        icon: "fa-seedling",
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
    render: (args) => (_jsx("div", { className: "flex flex-col gap-3", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3", children: variants.map((variant) => (_jsx(AchievementPinIcon, { variant: variant, size: size, ...args }, `${variant}-${size}`))) }, size))) })),
};
export const Theme = {
    render: (args) => (_jsx("div", { className: "flex flex-col gap-3", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3", children: variants.map((variant) => (_jsx(AchievementPinIcon, { variant: variant, size: size, theme: true, ...args }, `${variant}-${size}`))) }, size))) })),
};
export const Empty = {
    render: (args) => (_jsx("div", { className: "flex flex-col gap-3", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3", children: variants.map((variant) => (_jsx(AchievementPinIcon, { variant: variant, size: size, empty: true, ...args }, `${variant}-${size}`))) }, size))) })),
};
export const Missing = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3", children: variants.map((variant) => (_jsx(AchievementPinIcon, { variant: variant, size: size, icon: undefined }, `${variant}-${size}`))) }, size))) })),
};
//# sourceMappingURL=pin-icon.stories.js.map