import { VariantProps } from "class-variance-authority";
import { activityCardRowVariants } from "./card-row";
export interface ActivityAchievementCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardRowVariants> {
    topic: string;
    points: number;
    image: string;
    themeColor: string;
    logo?: string;
    certified?: boolean;
    website?: string;
    timestamp: number;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityAchievementCard: ({ topic, points, image, themeColor, logo, certified, website, timestamp, error, loading, variant, className, ...props }: ActivityAchievementCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityAchievementCard;
