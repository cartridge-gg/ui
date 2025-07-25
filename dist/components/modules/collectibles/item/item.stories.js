import { CollectibleItem } from "./item";
const meta = {
    title: "Modules/Collectibles/Item",
    component: CollectibleItem,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        owner: "shinobi",
        quantity: 1,
    },
};
export default meta;
export const Default = {};
export const Listed = {
    args: {
        owner: "shinobi",
        quantity: 1,
        price: "$24",
        expiration: "1mo",
    },
};
//# sourceMappingURL=item.stories.js.map