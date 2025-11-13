import { constants } from "starknet";
import { hexToString } from "viem";
export function getChainName(chainId) {
    switch (chainId) {
        case constants.StarknetChainId.SN_MAIN:
            return "Starknet";
        case constants.StarknetChainId.SN_SEPOLIA:
            return "Sepolia";
        default:
            try {
                return isSlotChain(chainId) ? "Slot" : hexToString(chainId);
            }
            catch (error) {
                return "Unknown";
            }
    }
}
export function isPublicChain(chainId) {
    return [
        constants.StarknetChainId.SN_MAIN,
        constants.StarknetChainId.SN_SEPOLIA,
    ].includes(chainId);
}
export function isSlotChain(chainId) {
    return hexToString(chainId).startsWith("WP_");
}
//# sourceMappingURL=network.js.map