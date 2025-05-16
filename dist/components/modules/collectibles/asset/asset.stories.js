import { CollectibleAsset } from "./asset";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Collectibles/Asset",
    component: CollectibleAsset,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
        title: "Beasts",
        quantity: 9,
        sales: 100,
        onClick: fn(),
    },
};
export default meta;
export const Default = {};
export const Faded = {
    args: {
        variant: "faded",
    },
};
export const Icon = {
    args: {
        icon: "https://placehold.co/100x100",
    },
};
//# sourceMappingURL=asset.stories.js.map