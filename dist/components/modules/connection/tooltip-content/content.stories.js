import { ConnectionTooltipContent } from "./content";
import { fn } from "@storybook/test";
import { constants } from "starknet";
const meta = {
    title: "Modules/Connection/Tooltip Content",
    component: ConnectionTooltipContent,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        username: "shinobi",
        address: "0x1234567890123456789012345678901234567890",
        chainId: constants.StarknetChainId.SN_MAIN,
        followers: 32,
        followings: 32,
        onFollowersClick: fn(),
        onFollowingsClick: fn(),
        onClick: fn(),
    },
};
export default meta;
export const Starknet = {};
export const Sepolia = {
    args: {
        chainId: constants.StarknetChainId.SN_SEPOLIA,
    },
};
export const Slot = {
    args: {
        chainId: "0x57505f534c4f54",
    },
};
export const Default = {
    args: {
        chainId: "0x44454641554c54",
    },
};
export const HiddenNetwork = {
    args: {
        hideNetwork: true,
    },
};
export const HiddenFollowers = {
    args: {
        followers: undefined,
        followings: undefined,
    },
};
//# sourceMappingURL=content.stories.js.map