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
        price: "24",
        logo: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo",
        expiration: "1mo",
    },
};
//# sourceMappingURL=item.stories.js.map