type AmountProps = {
    amount: number | undefined;
    conversion: string | undefined;
    balance: number;
    symbol: string;
    decimals: number;
    submitted: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMax: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    setError: (error: Error | undefined) => void;
    title?: string;
    label?: string;
    min?: number;
    max?: number;
    onPlus?: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    onMinus?: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
};
export declare function Amount({ amount, conversion, balance, symbol, decimals, submitted, onChange, onMax, setError, title, label, min, max, onPlus, onMinus, }: AmountProps): import("react/jsx-runtime").JSX.Element;
export {};
