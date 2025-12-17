import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface FollowerFollowingProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof followerFollowingVariants> {
}
export declare const followerFollowingVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerFollowing: ({ variant, className, ...props }: FollowerFollowingProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerFollowing;
