import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CollectibleSelected } from "./selected";
import { CheckboxIcon } from "../../../../index";
const meta = {
    title: "Modules/Collectibles/Selected",
    component: CollectibleSelected,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        size: "sm",
    },
};
export default meta;
export const Default = {
    render: function Render(args) {
        const [selected, setSelected] = useState(false);
        return (_jsx("div", { className: "flex gap-2", children: _jsx(CollectibleSelected, { ...args, size: "xl", selected: selected, onSelect: () => setSelected(!selected) }) }));
    },
};
export const NormalSize = {
    render: function Render(args) {
        const [selected, setSelected] = useState(false);
        return (_jsx("div", { className: "flex gap-2", children: _jsx(CollectibleSelected, { ...args, size: "sm", selected: selected, onSelect: () => setSelected(!selected) }) }));
    },
};
export const Faded = {
    render: function Render(args) {
        const [selected, setSelected] = useState(false);
        return (_jsx("div", { className: "flex gap-2", children: _jsx(CollectibleSelected, { ...args, size: "sm", selected: selected, onSelect: () => setSelected(!selected), variant: "faded" }) }));
    },
};
const variants = [
    "solid",
    "line",
    "minus-solid",
    "minus-line",
    "plus-solid",
    "plus-line",
    "unchecked-solid",
    "unchecked-line",
    "check",
];
export const CheckboxIconVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex justify-center items-end gap-4", children: ["xs:", variants.map((variant) => (_jsx(CheckboxIcon, { variant: variant, size: "xs" }, variant)))] }), _jsxs("div", { className: "flex justify-center items-end gap-4", children: ["sm:", variants.map((variant) => (_jsx(CheckboxIcon, { variant: variant, size: "sm" }, variant)))] }), _jsxs("div", { className: "flex justify-center items-end gap-4", children: ["lg:", variants.map((variant) => (_jsx(CheckboxIcon, { variant: variant, size: "lg" }, variant)))] }), _jsxs("div", { className: "flex justify-center items-end gap-4", children: ["xl:", variants.map((variant) => (_jsx(CheckboxIcon, { variant: variant, size: "xl" }, variant)))] })] })),
};
//# sourceMappingURL=selected.stories.js.map