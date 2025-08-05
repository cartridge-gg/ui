import { CollectibleHeader } from "./header";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Collectibles/Header",
    component: CollectibleHeader,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        title: "Beasts",
        onSelect: fn(),
    },
};
export default meta;
export const Default = {};
export const LongName = {
    args: {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
};
export const Selectable = {
    args: {
        selectable: true,
    },
};
export const Selected = {
    args: {
        selected: true,
    },
};
export const Icon = {
    args: {
        icon: "https://placehold.co/100x100",
    },
};
//# sourceMappingURL=header.stories.js.map