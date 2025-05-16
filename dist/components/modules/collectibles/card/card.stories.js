import { jsx as _jsx } from "react/jsx-runtime";
import { CollectibleCard } from ".";
import { fn } from "@storybook/test";
import { useState } from "react";
const meta = {
    title: "Modules/Collectibles/Card",
    component: CollectibleCard,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
        title: "Beasts",
        selected: false,
        onSelect: fn(),
    },
};
export default meta;
export const Default = {
    render: function Render(args) {
        const [selected, setSelected] = useState(false);
        return (_jsx("div", { className: "flex gap-2", children: _jsx(CollectibleCard, { ...args, selected: selected, onSelect: () => setSelected(!selected), onClick: selected ? () => setSelected(!selected) : undefined }) }));
    },
};
export const Selectable = {
    render: function Render(args) {
        const [selected, setSelected] = useState(false);
        return (_jsx("div", { className: "flex gap-2", children: _jsx(CollectibleCard, { ...args, selected: selected, onSelect: () => setSelected(!selected), onClick: () => setSelected(!selected) }) }));
    },
};
export const Faded = {
    args: {
        variant: "faded",
    },
};
export const Selected = {
    args: {
        selected: true,
    },
};
export const Unselected = {
    args: {
        selected: false,
    },
};
//# sourceMappingURL=card.stories.js.map