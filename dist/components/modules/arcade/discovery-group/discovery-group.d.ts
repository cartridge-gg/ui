import { ArcadeDiscoveryEventProps, ArcadeGameHeaderProps } from "../../../../index";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
interface ArcadeDiscoveryGroupProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof arcadeDiscoveryGroupVariants> {
    game: ArcadeGameHeaderProps;
    events: ArcadeDiscoveryEventProps[];
    loading?: boolean;
    rounded?: boolean;
}
export declare const arcadeDiscoveryGroupVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const ArcadeDiscoveryGroup: ({ game, events, loading, rounded, variant, className, color, }: ArcadeDiscoveryGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
