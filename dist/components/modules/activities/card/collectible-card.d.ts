import { VariantProps } from "class-variance-authority";
import { activityCardRowVariants } from "./card-row";
export interface ActivityCollectibleCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardRowVariants> {
    name: string;
    address: string;
    username?: string;
    collection?: string;
    image?: string;
    logo?: string;
    orderAmount?: string;
    orderImage?: string;
    orderSymbol?: string;
    action: "send" | "receive" | "mint" | "burn" | "list" | "sell";
    timestamp: number;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityCollectibleCard: ({ name, address, username, collection, image, logo, orderAmount, orderImage, orderSymbol, action: actionProp, timestamp, error, loading, variant, className, ...props }: ActivityCollectibleCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityCollectibleCard;
