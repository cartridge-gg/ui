import { CollectibleItemDetails } from "./item-details";
const meta = {
    title: "Modules/Collectibles/Item Details",
    component: CollectibleItemDetails,
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
//# sourceMappingURL=item-details.stories.js.map