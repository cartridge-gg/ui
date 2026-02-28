import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
export interface AchievementPlayerBadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof achievementPlayerBadgeVariants> {
    username?: string;
    icon?: React.ReactNode;
    badgeClassName?: string;
}
export declare const achievementPlayerBadgeVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
    rank?: "default" | "gold" | "silver" | "empty" | "bronze" | null | undefined;
    size?: "xs" | "sm" | "lg" | "default" | "2xs" | "xl" | "2xl" | "3xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const AchievementPlayerBadge: ({ username, icon, variant, rank, size, className, badgeClassName, children, ...props }: AchievementPlayerBadgeProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementPlayerBadge;
