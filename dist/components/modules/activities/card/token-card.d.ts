import { VariantProps } from "class-variance-authority";
import { activityCardRowVariants } from "./card-row";
export interface ActivityTokenCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardRowVariants> {
    address: string;
    username?: string;
    amount: string;
    value?: string;
    image?: string;
    symbol?: string;
    swappedAmount?: string;
    swappedImage?: string;
    swappedSymbol?: string;
    logo?: string;
    action: "send" | "receive" | "mint" | "burn" | "swap";
    timestamp: number;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityTokenCard: ({ address, username, amount, value, image, symbol, swappedAmount, swappedImage, swappedSymbol, logo, action: actionProp, timestamp, error, loading, variant, className, ...props }: ActivityTokenCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityTokenCard;
