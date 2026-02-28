import { CollectibleItemAction } from "./item-action";
const meta = {
    title: "Modules/Collectibles/Item Action",
    component: CollectibleItemAction,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        variant: "list",
    },
};
export default meta;
export const List = {};
export const Unlist = {
    args: {
        variant: "unlist",
    },
};
export const Purchase = {
    args: {
        variant: "purchase",
    },
};
//# sourceMappingURL=item-action.stories.js.map