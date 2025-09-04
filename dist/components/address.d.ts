import { FormatAddressOptions } from "../utils";
type AddressProps = {
    address: string;
    className?: string;
    copyable?: boolean;
    monospace?: boolean;
    explorerUrl?: string;
} & FormatAddressOptions;
/**
 * A component for consistently rendering Starknet addresses across the application
 */
export declare function Address({ address, className, size, first, last, copyable, monospace, explorerUrl, }: AddressProps): import("react/jsx-runtime").JSX.Element;
export {};
