import { AchievementContentProps, AchievementPinProps, Metadata, Socials } from "../../../../index";
import { VariantProps } from "class-variance-authority";
export interface AchievementSummaryProps extends VariantProps<typeof achievementSummaryVariants> {
    achievements: {
        id: string;
        content: AchievementContentProps;
        pin?: AchievementPinProps;
    }[];
    metadata: Metadata;
    socials?: Socials;
    active?: boolean;
    className?: string;
    color?: string;
}
declare const achievementSummaryVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const AchievementSummary: ({ achievements, metadata, socials, active, className, color, variant, }: AchievementSummaryProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementSummary;
