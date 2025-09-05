import { VariantProps } from "class-variance-authority";
declare const achievementPinsVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
    size?: "xs" | "default" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AchievementPinIconsProps extends VariantProps<typeof achievementPinsVariants> {
    pins: {
        id: string;
        icon: string;
    }[];
    theme?: boolean;
    className?: string;
    color?: string;
}
export declare const AchievementPinIcons: ({ pins, theme, variant, size, className, color, }: AchievementPinIconsProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementPinIcons;
