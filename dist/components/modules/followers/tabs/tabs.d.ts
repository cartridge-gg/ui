import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface FollowerTabsProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof followerTabsVariants> {
    followers: number;
    following: number;
    value?: string;
    onValueChange?: (value: string) => void;
}
export declare const followerTabsVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerTabs: ({ followers, following, value, onValueChange, variant, className, children, }: FollowerTabsProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerTabs;
