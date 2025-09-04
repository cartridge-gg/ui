import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface FollowerUnfollowProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof followerUnfollowVariants> {
    loading: boolean;
    disabled: boolean;
}
export declare const followerUnfollowVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerUnfollow: ({ loading, disabled, variant, className, ...props }: FollowerUnfollowProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerUnfollow;
