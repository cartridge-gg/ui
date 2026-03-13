import { VariantProps } from "class-variance-authority";
import { activityCardRowVariants } from "./card-row";
export interface ActivityGameCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardRowVariants> {
    action: string;
    name: string;
    themeColor: string;
    logo?: string;
    website?: string;
    certified?: boolean;
    timestamp: number;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityGameCard: ({ action, name, themeColor, logo, website, certified, timestamp, error, loading, variant, className, ...props }: ActivityGameCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityGameCard;
