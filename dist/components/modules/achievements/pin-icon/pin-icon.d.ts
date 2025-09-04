import { VariantProps } from "class-variance-authority";
declare const achievementPinIconVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
    size?: "default" | "xs" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AchievementPinIconProps extends VariantProps<typeof achievementPinIconVariants> {
    icon?: string;
    empty?: boolean;
    theme?: boolean;
    className?: string;
    color?: string;
}
export declare const AchievementPinIcon: ({ icon, empty, theme, variant, size, className, color, }: AchievementPinIconProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementPinIcon;
