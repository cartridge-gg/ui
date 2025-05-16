import { VariantProps } from "class-variance-authority";
import { traceabilityCardVariants } from "./card";
export interface TraceabilityCollectibleCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof traceabilityCardVariants> {
    from: string;
    to: string;
    image: string;
    action: "send" | "receive" | "mint";
    amount?: number;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const TraceabilityCollectibleCard: ({ from, to, amount, image, action, error, loading, variant, className, ...props }: TraceabilityCollectibleCardProps) => import("react/jsx-runtime").JSX.Element;
export default TraceabilityCollectibleCard;
