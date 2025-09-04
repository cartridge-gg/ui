import { ConnectionTooltip } from "./tooltip";
import { fn } from "@storybook/test";
import { constants } from "starknet";
const meta = {
    title: "Modules/Connection/Tooltip Trigger",
    component: ConnectionTooltip,
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
        hideUsername: false,
        hideNetwork: false,
        onFollowersClick: fn(),
        onFollowingsClick: fn(),
        onClick: fn(),
    },
};
export default meta;
export const Default = {};
export const HiddenUsername = {
    args: {
        hideUsername: true,
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
export const DisabledFollowers = {
    args: {
        onFollowersClick: undefined,
        onFollowingsClick: undefined,
    },
};
//# sourceMappingURL=tooltip.stories.js.map