import { CopyAddress } from "./copy-address";
const meta = {
    title: "CopyAddress",
    component: CopyAddress,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        address: "0x0000000000000000000000000000000000000000000000000000000000000000",
    },
};
export const Small = {
    args: {
        address: "0x0000000000000000000000000000000000000000000000000000000000000000",
        size: "sm",
    },
};
export const Large = {
    args: {
        address: "0x0000000000000000000000000000000000000000000000000000000000000000",
        size: "lg",
    },
};
export const ExplicitLength = {
    args: {
        address: "0x0000000000000000000000000000000000000000000000000000000000000000",
        first: 10,
        last: 15,
    },
};
//# sourceMappingURL=copy-address.stories.js.map