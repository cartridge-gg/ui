import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "sonner";
import { InventoryCollectionCard } from ".";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Collectibles/Inventory Collection Card",
    component: InventoryCollectionCard,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        icon: "https://static.cartridge.gg/presets/loot-survivor/icon.png",
        images: [
            "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
        ],
        title: "Beasts",
        totalCount: 1,
        onSelect: fn(),
        onClick: () => toast.success("Clicked"),
    },
};
export default meta;
export const Beasts = {
    render: function Render(args) {
        const [selected, setSelected] = useState(false);
        return (_jsx("div", { className: "flex gap-2", children: _jsx(InventoryCollectionCard, { ...args, onSelect: () => setSelected(!selected), onClick: selected
                    ? () => setSelected(!selected)
                    : () => toast.success("Clicked"), totalCount: 45 }) }));
    },
};
export const GoldenTokens = {
    args: {
        images: [
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image",
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image",
        ],
        title: "Golden Token",
        totalCount: 7,
    },
};
export const Karats = {
    args: {
        icon: null,
        images: [
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x07d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image",
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image",
        ],
        title: "Karat",
        totalCount: 12,
    },
};
export const Bloberts = {
    args: {
        icon: "https://static.cartridge.gg/presets/blob-arena-amma/icon.png",
        images: [
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x00539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image",
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image",
        ],
        title: "Bloberts",
        backgroundColor: "#C67927",
        totalCount: 2,
    },
};
export const Duelists = {
    args: {
        icon: "https://static.cartridge.gg/presets/pistols/icon.png",
        images: ["https://static.cartridge.gg/presets/pistols/icon.png"],
        title: "Pistols at Dawn Duelists",
        backgroundColor: "#57493e",
        totalCount: 52,
    },
};
export const Realms = {
    args: {
        icon: "https://static.cartridge.gg/presets/eternum/icon.svg",
        images: [
            "https://i2c.seadn.io/ethereum/d3933cfbb2474902842b104762383dda/fd5d0cc3cf57ff9f86a223a19c967a/8bfd5d0cc3cf57ff9f86a223a19c967a.png?h=250&w=250",
        ],
        title: "Realms (for Adventurers)",
        // backgroundColor: "#ffffff",
        totalCount: 13,
    },
};
export const DopeWarsGear = {
    args: {
        icon: "https://static.cartridge.gg/presets/dope-wars/icon.png",
        images: [
            "https://i2c.seadn.io/optimism/26a71dbabaa64eb1aeb71d8f6c1a2dda/56830db117391bf9dac042ce4a675d/0a56830db117391bf9dac042ce4a675d.gif?h=250&w=250",
            "https://static.cartridge.gg/presets/dope-wars/icon.png",
        ],
        title: "Dope Wars Gear",
        backgroundColor: "#ff6163",
        totalCount: 13,
    },
};
export const BadUrl = {
    args: {
        icon: "/this_icon_does_not_exist.png",
        images: ["/this_image_does_not_exist.png"],
    },
};
export const BadUrlWithFallback = {
    args: {
        icon: "/this_icon_does_not_exist.png",
        images: [
            "/this_image_does_not_exist.png",
            "https://static.cartridge.gg/presets/loot-survivor/icon.png",
        ],
    },
};
export const IpfsUnpinnedFile = {
    args: {
        images: [
            "https://ipfs.io/ipfs/QmWqqT4awbuzaHM7e5EBf9GGzNDQRz4WauUDSctVe9ZeBW",
        ],
    },
};
//# sourceMappingURL=inventory-collection.stories.js.map