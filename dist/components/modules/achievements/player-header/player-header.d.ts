import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface AchievementPlayerHeaderProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof achievementPlayerHeaderVariants> {
    username: string;
    address: string;
    points: number;
    icon?: string;
    follower?: boolean;
    followerCount?: number;
    followingCount?: number;
    followers?: string[];
    compacted?: boolean;
}
declare const achievementPlayerHeaderVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
    rank?: "default" | "gold" | "silver" | "bronze" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const AchievementPlayerHeader: ({ username, address, points, icon, follower, followerCount, followingCount, followers, compacted, variant, rank, className, ...props }: AchievementPlayerHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementPlayerHeader;
