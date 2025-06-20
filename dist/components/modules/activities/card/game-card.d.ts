import { VariantProps } from "class-variance-authority";
import { activityCardVariants } from "./card";
export interface ActivityGameCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardVariants> {
    title: string;
    website: string;
    image: string;
    error?: boolean;
    loading?: boolean;
    certified?: boolean;
    className?: string;
}
export declare const ActivityGameCard: ({ title, website, image, error, loading, certified, variant, className, ...props }: ActivityGameCardProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityGameCard;
