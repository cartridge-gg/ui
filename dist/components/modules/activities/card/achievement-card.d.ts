import { VariantProps } from "class-variance-authority";
import { activityCardVariants } from "./card";
export interface ActivityAchievementCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardVariants> {
    title: string;
    topic: string;
    points: number;
    website: string;
    image: string;
    error?: boolean;
    loading?: boolean;
    certified?: boolean;
    className?: string;
}
export declare const ActivityAchievementCard: ({ title, topic, points, website, image, error, loading, certified, variant, className, ...props }: ActivityAchievementCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityAchievementCard;
