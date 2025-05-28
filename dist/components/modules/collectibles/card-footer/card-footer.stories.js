import { CollectibleCardFooter } from "../../../../index";
const meta = {
    title: "Modules/Collectibles/Card Footer",
    component: CollectibleCardFooter,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        price: "$2",
        lastSale: "$2",
    },
};
export default meta;
export const Default = {};
export const PriceLess = {
    args: {
        price: undefined,
        lastSale: "$2",
    },
};
export const SaleLess = {
    args: {
        price: "$2",
        lastSale: undefined,
    },
};
//# sourceMappingURL=card-footer.stories.js.map