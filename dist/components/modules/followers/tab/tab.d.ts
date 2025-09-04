import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
interface FollowerTabProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof followerTabVariants> {
    value: string;
    label: string;
    active: boolean;
    counter: number;
}
export declare const followerTabVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const FollowerTab: ({ value, label, active, counter, variant, className, }: FollowerTabProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerTab;
