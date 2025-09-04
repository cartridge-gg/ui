import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThumbnailCollectible } from "./collectible";
import { PaperPlaneIcon } from "../../../../components/icons";
import { ThumbnailsSubIcon } from "../sub-icon";
const meta = {
    title: "Modules/Thumbnails/Collectible",
    component: ThumbnailCollectible,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
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
const sizes = ["xs", "sm", "md", "lg", "xl"];
export const Default = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(ThumbnailCollectible, { image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", size: size, variant: variant }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(ThumbnailCollectible, { image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", size: size, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }, size))) })),
};
export const Fallback = {
    render: () => (_jsx("div", { className: "flex flex-col gap-3 ", children: sizes.map((size) => (_jsxs("div", { className: "flex gap-3 ", children: [variants.map((variant) => (_jsx(ThumbnailCollectible, { image: "", size: size, variant: variant }, `${size}-${variant}`))), ["lg", "xl"].includes(size) && (_jsx(ThumbnailCollectible, { image: "", size: size, subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }), size: size }) }, `${size}-subicon`))] }, size))) })),
};
export const Loading = {
    render: () => _jsx(ThumbnailCollectible, { image: "", size: "xl", loading: true }),
};
export const Error = {
    render: () => _jsx(ThumbnailCollectible, { image: "", size: "xl", error: true }),
};
//# sourceMappingURL=collectible.stories.js.map