type BalanceProps = {
    value: number;
    symbol: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
export declare function Balance({ value, symbol, className, onClick, }: BalanceProps): import("react/jsx-runtime").JSX.Element;
export {};
