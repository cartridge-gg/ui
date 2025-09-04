import { constants } from "starknet";
const STARKSCAN_URL = {
    [constants.StarknetChainId.SN_MAIN]: "https://starkscan.co",
    [constants.StarknetChainId.SN_SEPOLIA]: "https://sepolia.starkscan.co",
};
const VOYAGER_URL = {
    [constants.StarknetChainId.SN_MAIN]: "https://voyager.online",
    [constants.StarknetChainId.SN_SEPOLIA]: "https://sepolia.voyager.online",
};
export const StarkscanUrl = (chainId) => ({
    transaction: (hash, fragment) => `${STARKSCAN_URL[chainId]}/tx/${hash}${fragment ? `#${fragment}` : ""}`,
    contract: (address, fragment) => `${STARKSCAN_URL[chainId]}/contract/${address}${fragment ? `#${fragment}` : ""}`,
    message: (address, fragment) => `${STARKSCAN_URL[chainId]}/message/${address}${fragment ? `#${fragment}` : ""}`,
    block: (id, fragment) => `${STARKSCAN_URL[chainId]}/block/${id}${fragment ? `#${fragment}` : ""}`,
    event: (address, fragment) => `${STARKSCAN_URL[chainId]}/event/${address}${fragment ? `#${fragment}` : ""}`,
    class: (address, fragment) => `${STARKSCAN_URL[chainId]}/class/${address}${fragment ? `#${fragment}` : ""}`,
});
export const VoyagerUrl = (chainId) => ({
    transaction: (hash, fragment) => `${VOYAGER_URL[chainId]}/tx/${hash}${fragment ? `#${fragment}` : ""}`,
    contract: (address, fragment) => `${VOYAGER_URL[chainId]}/contract/${address}${fragment ? `#${fragment}` : ""}`,
    message: (address, fragment) => `${VOYAGER_URL[chainId]}/message/${address}${fragment ? `#${fragment}` : ""}`,
    block: (id, fragment) => `${VOYAGER_URL[chainId]}/block/${id}${fragment ? `#${fragment}` : ""}`,
    event: (address, fragment) => `${VOYAGER_URL[chainId]}/event/${address}${fragment ? `#${fragment}` : ""}`,
    class: (address, fragment) => `${VOYAGER_URL[chainId]}/class/${address}${fragment ? `#${fragment}` : ""}`,
});
//# sourceMappingURL=explorer.js.map