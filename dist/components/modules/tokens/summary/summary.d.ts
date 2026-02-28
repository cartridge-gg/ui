import { VariantProps } from "class-variance-authority";
export interface TokenSummaryProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">, VariantProps<typeof tokenSummaryVariants> {
    title?: string | React.ReactNode;
}
declare const tokenSummaryVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const TokenSummary: ({ title, variant, className, children, ...props }: TokenSummaryProps) => import("react/jsx-runtime").JSX.Element;
export default TokenSummary;
