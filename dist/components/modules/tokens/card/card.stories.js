import { TokenCard } from "./";
const meta = {
    title: "Modules/Tokens/Card",
    component: TokenCard,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        title: "Ether",
        amount: "0.01 ETH",
        image: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo",
    },
};
export default meta;
export const Default = {};
export const WithValue = {
    args: {
        value: "$31.40",
    },
};
export const Increasing = {
    args: {
        value: "$31.40",
        change: "+$1.78",
    },
};
export const Decreasing = {
    args: {
        value: "$31.40",
        change: "-$1.78",
    },
};
//# sourceMappingURL=card.stories.js.map