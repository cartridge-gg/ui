import { VariantProps } from "class-variance-authority";
import { traceabilityCardVariants } from "./card";
export interface TraceabilityCollectibleCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof traceabilityCardVariants> {
    username: string;
    timestamp: number;
    category: "send" | "receive" | "mint" | "sale" | "list";
    collectibleImage: string;
    collectibleName: string;
    currencyImage?: string;
    amount?: number;
    quantity?: number;
    className?: string;
}
export declare const TraceabilityCollectibleCard: ({ username, timestamp, category, collectibleImage, collectibleName, currencyImage, amount, quantity, variant, className, ...props }: TraceabilityCollectibleCardProps) => import("react/jsx-runtime").JSX.Element;
export default TraceabilityCollectibleCard;
