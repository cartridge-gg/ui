import { constants } from "starknet";
export declare const StarkscanUrl: (chainId: constants.StarknetChainId) => {
    transaction: (hash: string, fragment?: string) => string;
    contract: (address: string, fragment?: string) => string;
    message: (address: string, fragment?: string) => string;
    block: (id: string, fragment?: string) => string;
    event: (address: string, fragment?: string) => string;
    class: (address: string, fragment?: string) => string;
};
export declare const VoyagerUrl: (chainId: constants.StarknetChainId) => {
    transaction: (hash: string, fragment?: string) => string;
    contract: (address: string, fragment?: string) => string;
    message: (address: string, fragment?: string) => string;
    block: (id: string, fragment?: string) => string;
    event: (address: string, fragment?: string) => string;
    class: (address: string, fragment?: string) => string;
};
