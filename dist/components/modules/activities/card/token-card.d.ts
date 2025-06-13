import { VariantProps } from "class-variance-authority";
import { activityCardVariants } from "./card";
export interface ActivityTokenCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardVariants> {
    amount: string;
    address: string;
    value: string;
    image: string;
    action: "send" | "receive" | "mint";
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityTokenCard: ({ amount, address, value, image, action, error, loading, variant, className, ...props }: ActivityTokenCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityTokenCard;
