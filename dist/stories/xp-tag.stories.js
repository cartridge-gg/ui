import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XPTag } from "../components/primitives/toast/specialized-toasts";
const meta = {
    title: "Primitives/Toast/Supporting/XP Tag",
    component: XPTag,
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
        amount: { control: "number" },
        isMainnet: { control: "boolean" },
    },
};
export default meta;
export const MainnetXP = {
    args: {
        amount: 100,
        isMainnet: true,
    },
};
export const TestnetXP = {
    args: {
        amount: 100,
        isMainnet: false,
    },
};
export const LargeAmount = {
    args: {
        amount: 1500,
        isMainnet: true,
    },
};
export const SmallAmount = {
    args: {
        amount: 25,
        isMainnet: false,
    },
};
export const Comparison = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-white text-sm font-semibold mb-2", children: "Mainnet vs Testnet" }), _jsxs("div", { className: "flex gap-4 items-center", children: [_jsxs("div", { className: "text-center", children: [_jsx(XPTag, { amount: 100, isMainnet: true }), _jsx("p", { className: "text-white text-xs mt-1", children: "Mainnet" })] }), _jsxs("div", { className: "text-center", children: [_jsx(XPTag, { amount: 100, isMainnet: false }), _jsx("p", { className: "text-white text-xs mt-1", children: "Testnet" })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-white text-sm font-semibold mb-2", children: "Different Amounts" }), _jsxs("div", { className: "flex gap-4 items-center", children: [_jsx(XPTag, { amount: 25, isMainnet: true }), _jsx(XPTag, { amount: 100, isMainnet: true }), _jsx(XPTag, { amount: 250, isMainnet: true }), _jsx(XPTag, { amount: 1000, isMainnet: true })] })] })] })),
};
//# sourceMappingURL=xp-tag.stories.js.map