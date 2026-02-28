import { Provider } from "starknet";
export type ERC20Metadata = {
    name: string;
    logoUrl?: string;
    symbol: string;
    decimals: number;
    address: string;
    instance: ERC20;
};
export declare const ETH_CONTRACT_ADDRESS: string;
export declare const STRK_CONTRACT_ADDRESS: string;
export declare const USDC_CONTRACT_ADDRESS: string;
export declare const USDT_CONTRACT_ADDRESS: string;
export declare const DAI_CONTRACT_ADDRESS: string;
export declare const EKUBO_CONTRACT_ADDRESS: string;
export declare const LORDS_CONTRACT_ADDRESS: string;
export declare class ERC20 {
    private address;
    private logoUrl?;
    private provider;
    private name?;
    private symbol?;
    private decimals?;
    constructor({ address, provider, logoUrl, }: {
        address: string;
        logoUrl?: string;
        provider: Provider;
    });
    init(): Promise<this>;
    metadata(): ERC20Metadata;
    balanceOf(address: string): Promise<bigint>;
    private callName;
    private callSymbol;
    private callDecimals;
    private parseResult;
}
