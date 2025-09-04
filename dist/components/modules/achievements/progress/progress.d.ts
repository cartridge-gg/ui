import { VariantProps } from "class-variance-authority";
export interface AchievementProgressProps extends VariantProps<typeof achievementProgressVariants> {
    count: number;
    total: number;
    points: number;
    completed?: boolean;
    className?: string;
    color?: string;
}
declare const achievementProgressVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function AchievementProgress({ count, total, points, completed, variant, className, color, }: AchievementProgressProps): import("react/jsx-runtime").JSX.Element;
export default AchievementProgress;
