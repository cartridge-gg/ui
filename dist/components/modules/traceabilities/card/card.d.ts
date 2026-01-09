import { VariantProps } from "class-variance-authority";
export declare const traceabilityCardVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TraceabilityCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof traceabilityCardVariants> {
    username: string;
    timestamp: number;
    Icon: React.ReactNode;
}
export declare const TraceabilityCard: ({ username, timestamp, Icon, variant, className, children, ...props }: TraceabilityCardProps) => import("react/jsx-runtime").JSX.Element;
export default TraceabilityCard;
