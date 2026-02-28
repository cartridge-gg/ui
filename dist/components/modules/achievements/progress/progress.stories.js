import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementProgress } from "./progress";
const meta = {
    title: "Modules/Achievements/Progress",
    component: AchievementProgress,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        count: 4,
        total: 9,
        points: 690,
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
    render: (args) => (_jsx("div", { className: "flex flex-col gap-4", children: variants.map((variant) => (_jsxs("div", { className: "grid grid-cols-4 items-center", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), _jsx("div", { className: "col-span-3", children: _jsx(AchievementProgress, { ...args, variant: variant }, variant) })] }, variant))) })),
};
export const Empty = {
    args: {
        count: 0,
        points: 0,
    },
};
export const Complete = {
    args: {
        count: 9,
        total: 9,
        points: 690,
        completed: true,
    },
};
export const Verbose = {
    args: {
        count: 400,
        total: 9000,
        points: 1234567890,
    },
};
export const Ghost = {
    args: {
        variant: "ghost",
    },
};
//# sourceMappingURL=progress.stories.js.map