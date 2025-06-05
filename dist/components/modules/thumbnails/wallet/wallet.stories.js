import { jsx as _jsx } from "react/jsx-runtime";
import { ThumbnailWallet } from "./wallet";
const meta = {
    title: "Modules/Thumbnails/Wallet",
    component: ThumbnailWallet,
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
];
const sizes = ["sm", "md", "lg", "xl"];
export const Default = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3 ", children: variants.map((variant) => (_jsx(ThumbnailWallet, { variant: variant, size: size }, `${size}-${variant}`))) }, size))) })),
};
export const ArgentX = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3 ", children: variants.map((variant) => (_jsx(ThumbnailWallet, { variant: variant, size: size, brand: "argentx" }, `${size}-${variant}`))) }, size))) })),
};
export const Braavos = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3 ", children: variants.map((variant) => (_jsx(ThumbnailWallet, { variant: variant, size: size, brand: "braavos" }, `${size}-${variant}`))) }, size))) })),
};
export const OpenZeppelin = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3 ", children: variants.map((variant) => (_jsx(ThumbnailWallet, { variant: variant, size: size, brand: "openzeppelin" }, `${size}-${variant}`))) }, size))) })),
};
export const Controller = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsx("div", { className: "flex gap-3 ", children: variants.map((variant) => (_jsx(ThumbnailWallet, { variant: variant, size: size, brand: "controller" }, `${size}-${variant}`))) }, size))) })),
};
//# sourceMappingURL=wallet.stories.js.map