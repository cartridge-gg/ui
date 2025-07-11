import { VariantProps } from "class-variance-authority";
import { activityCardVariants } from "./card";
export interface ActivityCollectibleCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardVariants> {
    name: string;
    address: string;
    collection: string;
    image: string;
    action: "send" | "receive" | "mint";
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityCollectibleCard: ({ name, address, collection, image, action, error, loading, variant, className, ...props }: ActivityCollectibleCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityCollectibleCard;
