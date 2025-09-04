import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface FollowerActionProps extends HTMLAttributes<HTMLButtonElement | HTMLDivElement>, VariantProps<typeof followerActionVariants> {
    following: boolean;
    unfollowable: boolean;
    loading: boolean;
    disabled: boolean;
}
export declare const followerActionVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerAction: ({ following, unfollowable, loading, disabled, variant, className, onClick, ...props }: FollowerActionProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerAction;
