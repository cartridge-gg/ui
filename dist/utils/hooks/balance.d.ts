import { Provider } from "starknet";
import { ERC20Metadata } from "../erc20";
export type Balance = {
    value: bigint;
    formatted: string;
};
export type ERC20Balance = {
    balance: Balance;
    meta: ERC20Metadata;
};
export type UseERC20BalanceResponse = {
    data: ERC20Balance[];
    isFetching: boolean;
    isLoading: boolean;
};
export declare function useERC20Balance({ address, contractAddress, provider, interval, decimals, }: {
    address?: string;
    contractAddress: string | string[];
    provider?: Provider;
    interval: number | undefined;
    decimals?: number;
}): {
    data: {
        balance: Balance;
        meta: ERC20Metadata;
    }[];
    isFetching: boolean;
    isLoading: boolean;
    error: any;
};
export type FetchState = {
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
export type UseCreditBalanceReturn = {
    balance: Balance;
} & FetchState;
export declare function useCreditBalance({ username, interval, }: {
    username?: string;
    interval: number | undefined;
}): UseCreditBalanceReturn;
