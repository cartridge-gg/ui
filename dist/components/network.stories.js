import { Network } from "./network";
import { constants } from "starknet";
import { toHex } from "viem";
const meta = {
    title: "Network",
    component: Network,
    tags: ["autodocs"],
};
export default meta;
export const Mainnet = {
    args: {
        chainId: constants.StarknetChainId.SN_MAIN,
    },
};
export const Sepolia = {
    args: {
        chainId: constants.StarknetChainId.SN_SEPOLIA,
    },
};
export const Slot = {
    args: {
        chainId: toHex("WP_RYO"),
    },
};
export const Unknown = {
    args: {
        chainId: toHex("UNKNOWN_CHAIN"),
    },
};
//# sourceMappingURL=network.stories.js.map