import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
export interface AchievementPlayerBadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof achievementPlayerBadgeVariants> {
    username?: string;
    icon?: React.ReactNode;
}
export declare const achievementPlayerBadgeVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
    rank?: "default" | "gold" | "silver" | "bronze" | null | undefined;
    size?: "xl" | "2xl" | "3xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const AchievementPlayerBadge: ({ username, icon, variant, rank, size, className, children, ...props }: AchievementPlayerBadgeProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementPlayerBadge;
