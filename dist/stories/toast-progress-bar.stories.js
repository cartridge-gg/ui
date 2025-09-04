import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToastProgressBar } from "../components/primitives/toast/specialized-toasts";
const meta = {
    title: "Primitives/Toast/Supporting/Toast Progress Bar",
    component: ToastProgressBar,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#353535" },
                { name: "light", value: "#ffffff" },
            ],
        },
    },
    argTypes: {
        progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
        variant: {
            control: "select",
            options: ["achievement", "error"],
        },
    },
    decorators: [
        (Story) => (_jsx("div", { className: "w-[360px]", children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const AchievementProgress = {
    args: {
        progress: 66.7,
        variant: "achievement",
    },
};
export const ErrorProgress = {
    args: {
        progress: 66.7,
        variant: "error",
    },
};
export const EmptyProgress = {
    args: {
        progress: 0,
        variant: "achievement",
    },
};
export const FullProgress = {
    args: {
        progress: 100,
        variant: "achievement",
    },
};
export const ProgressComparison = {
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-white text-sm font-semibold mb-2", children: "Achievement Progress" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "w-[360px]", children: [_jsx(ToastProgressBar, { progress: 25, variant: "achievement" }), _jsx("p", { className: "text-white text-xs mt-1", children: "25%" })] }), _jsxs("div", { className: "w-[360px]", children: [_jsx(ToastProgressBar, { progress: 50, variant: "achievement" }), _jsx("p", { className: "text-white text-xs mt-1", children: "50%" })] }), _jsxs("div", { className: "w-[360px]", children: [_jsx(ToastProgressBar, { progress: 75, variant: "achievement" }), _jsx("p", { className: "text-white text-xs mt-1", children: "75%" })] }), _jsxs("div", { className: "w-[360px]", children: [_jsx(ToastProgressBar, { progress: 100, variant: "achievement" }), _jsx("p", { className: "text-white text-xs mt-1", children: "100%" })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-white text-sm font-semibold mb-2", children: "Error Progress" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "w-[360px]", children: [_jsx(ToastProgressBar, { progress: 25, variant: "error" }), _jsx("p", { className: "text-white text-xs mt-1", children: "25%" })] }), _jsxs("div", { className: "w-[360px]", children: [_jsx(ToastProgressBar, { progress: 50, variant: "error" }), _jsx("p", { className: "text-white text-xs mt-1", children: "50%" })] }), _jsxs("div", { className: "w-[360px]", children: [_jsx(ToastProgressBar, { progress: 75, variant: "error" }), _jsx("p", { className: "text-white text-xs mt-1", children: "75%" })] })] })] })] })),
};
//# sourceMappingURL=toast-progress-bar.stories.js.map