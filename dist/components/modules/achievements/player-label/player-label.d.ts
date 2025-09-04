import { VariantProps } from "class-variance-authority";
export interface AchievementPlayerLabelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof achievementPlayerLabelVariants> {
    username: string;
    address: string;
    icon?: string;
}
declare const achievementPlayerLabelVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
    rank?: "default" | "gold" | "silver" | "bronze" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const AchievementPlayerLabel: ({ username, address, icon, variant, rank, className, ...props }: AchievementPlayerLabelProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementPlayerLabel;
