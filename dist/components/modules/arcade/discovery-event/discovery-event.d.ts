import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
export interface ArcadeDiscoveryEventProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof arcadeDiscoveryEventVariants> {
    name: string;
    timestamp: number;
    Icon?: React.ReactNode;
    achievement?: {
        title: string;
        icon: string;
    };
    loading?: boolean;
    color?: string;
}
export declare const arcadeDiscoveryEventVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const ArcadeDiscoveryEvent: ({ name, timestamp, Icon, achievement, loading, variant, className, color, }: ArcadeDiscoveryEventProps) => import("react/jsx-runtime").JSX.Element;
