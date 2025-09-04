import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
interface ArcadeGameSelectProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof arcadeGameSelectVariants> {
    name: string;
    logo?: string;
    cover?: string;
    points?: number;
    active?: boolean;
}
export declare const arcadeGameSelectVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const ArcadeGameSelect: ({ name, logo, cover, points, active, variant, className, ...props }: ArcadeGameSelectProps) => import("react/jsx-runtime").JSX.Element;
export default ArcadeGameSelect;
