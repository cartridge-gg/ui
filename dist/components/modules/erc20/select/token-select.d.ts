import { Select } from "../../../../components/primitives/select";
export type Balance = {
    amount: number;
    value: number;
    change: number;
};
export type ERC20Metadata = {
    name: string;
    symbol: string;
    decimals: number;
    address: string;
    image: string | undefined;
};
export type Token = {
    balance: Balance;
    metadata: ERC20Metadata;
};
interface TokenSelectProps {
    tokens: Token[];
    defaultToken?: Token;
    onSelect: (token: Token) => void;
}
export declare const TokenSelect: ({ tokens, defaultToken, onSelect, ...props }: TokenSelectProps & React.ComponentProps<typeof Select>) => import("react/jsx-runtime").JSX.Element;
export {};
