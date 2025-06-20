import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArcadeHeader } from "./header";
import { BellIcon, Button, DotsIcon, SpaceInvaderIcon } from "../../../../index";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Arcade/Header",
    component: ArcadeHeader,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        backgrounds: {
            values: [{ name: "dark", value: "#363636" }],
            default: "dark",
        },
    },
    args: {},
};
export default meta;
const children = (_jsxs(_Fragment, { children: [_jsxs(Button, { className: "lowercase font-inter flex gap-1.5 px-3 py-2.5", variant: "secondary", onClick: fn(), children: [_jsx(SpaceInvaderIcon, { variant: "solid", size: "sm" }), _jsx("p", { className: "text-sm", children: "Shinobi" })] }), _jsxs(Button, { className: "lowercase font-inter flex gap-1.5 p-2", variant: "secondary", onClick: fn(), children: [_jsx(BellIcon, { variant: "solid", size: "default" }), _jsx("p", { className: "text-sm bg-background-300 rounded-full px-1.5 py-0.5", children: "3" })] }), _jsx(Button, { variant: "icon", size: "icon", onClick: fn(), children: _jsx(DotsIcon, { size: "default" }) })] }));
export const Default = {};
export const DefaultVisitor = {
    args: {
        children: _jsx(Button, { onClick: fn(), children: "Connect" }),
    },
};
export const DefaultUser = {
    args: {
        children,
    },
};
export const Theme = {
    args: {
        cover: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
    },
};
export const ThemeVisitor = {
    args: {
        cover: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
        children: _jsx(Button, { onClick: fn(), children: "Connect" }),
    },
};
export const ThemeUser = {
    args: {
        cover: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
        children,
    },
};
//# sourceMappingURL=header.stories.js.map