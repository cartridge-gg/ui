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
        return (_jsx("div", { className: "flex gap-2", children: _jsx(CollectibleCard, { ...args, totalCount: 1, selected: selected, onSelect: () => setSelected(!selected), onClick: selected ? () => setSelected(!selected) : undefined }) }));
    },
};
export const Selectable = {
    render: function Render(args) {
        const [selected, setSelected] = useState(false);
        return (_jsx("div", { className: "flex gap-2", children: _jsx(CollectibleCard, { ...args, totalCount: 2, selected: selected, onSelect: () => setSelected(!selected), onClick: () => setSelected(!selected), price: "$2" }) }));
    },
};
export const Unselectable = {
    args: {
        selectable: false,
        totalCount: 2,
        listingCount: 1,
    },
};
export const Faded = {
    args: {
        variant: "faded",
        totalCount: 2,
        listingCount: 2,
        price: "$2",
        lastSale: "$2",
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
export const Icon = {
    args: {
        icon: "",
        selected: false,
        price: "$2",
        lastSale: "$2",
        totalCount: 2,
        listingCount: 1,
    },
};
export const Price = {
    args: {
        selected: false,
        price: "$2",
        lastSale: "",
    },
};
export const LastSale = {
    args: {
        selected: false,
        price: "",
        lastSale: "$2",
    },
};
export const PriceLastSale = {
    args: {
        selected: false,
        price: {
            value: "100",
            image: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
        },
        lastSale: {
            value: "90",
            image: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
        },
    },
};
export const FooterForced = {
    args: {
        selected: false,
        price: null,
        lastSale: null,
    },
};
//# sourceMappingURL=card.stories.js.map