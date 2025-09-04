import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface FollowerSocialRowProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof followerSocialRowVariants> {
    username: string;
    following: boolean;
    unfollowable: boolean;
    onSocialClick: () => void;
    points?: number;
    loading?: boolean;
    disabled?: boolean;
}
export declare const followerSocialRowVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerSocialRow: ({ username, following, unfollowable, points, loading, disabled, onSocialClick, variant, className, ...props }: FollowerSocialRowProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerSocialRow;
