export type FormatAddressOptions = {
    first?: number;
    last?: number;
    size?: FormatAddressSize;
    padding?: boolean;
};
type FormatAddressSize = "xs" | "sm" | "base" | "lg" | "full";
export declare function formatAddress(addr: string, { first, last, size, padding }?: FormatAddressOptions): string;
export {};
