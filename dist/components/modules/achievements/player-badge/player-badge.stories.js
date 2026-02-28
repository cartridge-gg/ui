import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPlayerBadge } from "./player-badge";
const meta = {
    title: "Modules/Achievements/Player Badge",
    component: AchievementPlayerBadge,
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
const sizes = ["xl", "2xl", "3xl"];
const ranks = ["bronze", "silver", "gold"];
export const Default = {
    render: (args) => {
        return (_jsx("div", { className: "flex flex-col gap-3", children: variants.map((variant) => (_jsxs("div", { className: "grid grid-cols-4 items-center gap-6", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), ranks.map((rank) => (_jsx("div", { className: "flex gap-3", children: sizes.map((size) => (_jsx(AchievementPlayerBadge, { ...args, variant: variant, size: size, rank: rank }, `${variant}-${rank}-${size}`))) }, `${variant}-${rank}`)))] }, variant))) }));
    },
};
//# sourceMappingURL=player-badge.stories.js.map