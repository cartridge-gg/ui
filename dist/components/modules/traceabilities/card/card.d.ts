import { VariantProps } from "class-variance-authority";
export declare const traceabilityCardVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TraceabilityCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof traceabilityCardVariants> {
    Logo: React.ReactNode;
    title: string;
    from: string;
    to: string;
    count?: number;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const TraceabilityCard: ({ Logo, title, from, to, count, error, loading, variant, className, ...props }: TraceabilityCardProps) => import("react/jsx-runtime").JSX.Element;
export default TraceabilityCard;
