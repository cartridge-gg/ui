import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface FollowerTagProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof followerTagVariants> {
}
export declare const followerTagVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerTag: ({ variant, className, ...props }: FollowerTagProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerTag;
