import { VariantProps } from "class-variance-authority";
export interface TokenSummaryProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tokenSummaryVariants> {
}
declare const tokenSummaryVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const TokenSummary: ({ variant, className, children, ...props }: TokenSummaryProps) => import("react/jsx-runtime").JSX.Element;
export default TokenSummary;
