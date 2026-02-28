import { VariantProps } from "class-variance-authority";
export declare const activityCardVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ActivityCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">, VariantProps<typeof activityCardVariants> {
    Logo: React.ReactNode;
    title: string | React.ReactNode;
    subTitle: string | React.ReactNode;
    topic?: string;
    subTopic?: string | React.ReactNode;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityCard: ({ Logo, title, subTitle, topic, subTopic, error, loading, variant, className, ...props }: ActivityCardProps) => import("react/jsx-runtime").JSX.Element;
export declare const ActivitySocialWebsite: ({ website, certified, className, }: {
    website: string;
    certified?: boolean;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default ActivityCard;
