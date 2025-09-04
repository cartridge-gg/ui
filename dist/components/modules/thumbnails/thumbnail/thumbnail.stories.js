import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Thumbnail } from "./thumbnail";
import { ThumbnailsSubIcon } from "../sub-icon";
import { ArgentIcon, DepositIcon, PaperPlaneIcon } from "../../../../components/icons";
const meta = {
    title: "Modules/Thumbnails/Thumbnail",
    component: Thumbnail,
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
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
export const Default = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png", size: size, variant: variant }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png", size: size, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const Transdark = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png", transdark: true, size: size, variant: variant }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png", transdark: true, size: size, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const Translight = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png", translight: true, size: size, variant: variant }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png", translight: true, size: size, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const Rounded = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo", size: size, variant: variant, rounded: true }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo", size: size, rounded: true, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const Component = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: _jsx(DepositIcon, { variant: "solid", className: "w-full h-full" }), size: size, variant: variant, centered: true }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: _jsx(DepositIcon, { variant: "solid", className: "w-full h-full" }), size: size, centered: true, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const ComponentRounded = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: _jsx(ArgentIcon, { className: "w-full h-full" }), size: size, variant: variant, rounded: true, centered: true }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: _jsx(ArgentIcon, { className: "w-full h-full" }), size: size, rounded: true, centered: true, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const FontAwesome = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "fa-seedling", size: size, variant: variant, className: "text-primary", centered: true }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "fa-seedling", size: size, className: "text-primary", centered: true, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const Fallback = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "", size: size, variant: variant }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "", size: size, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const Loading = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "", size: size, variant: variant, loading: true }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "", size: size, loading: true, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }))) })),
};
export const Error = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(Thumbnail, { icon: "", size: size, variant: variant, error: true }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(Thumbnail, { icon: "", size: size, error: true, subIcon: ["lg", "xl", "xxl"].includes(size) && (_jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size })) }, `${size}-subicon`))] }))) })),
};
//# sourceMappingURL=thumbnail.stories.js.map