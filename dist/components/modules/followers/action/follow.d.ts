import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface FollowerFollowProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof followerFollowVariants> {
    loading: boolean;
    disabled: boolean;
}
export declare const followerFollowVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerFollow: ({ variant, className, loading, disabled, ...props }: FollowerFollowProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerFollow;
