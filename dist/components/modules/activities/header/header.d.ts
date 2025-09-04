import { VariantProps } from "class-variance-authority";
export declare const activityHeaderVariants: (props?: ({
    variant?: "default" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ActivityHeaderProps extends VariantProps<typeof activityHeaderVariants> {
    Logo: React.ReactNode;
    title: string;
    topic?: string;
    subTopic?: string | React.ReactNode;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityHeader: ({ Logo, title, topic, subTopic, error, loading, variant, className, }: ActivityHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityHeader;
