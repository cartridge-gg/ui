import { VariantProps } from "class-variance-authority";
import React from "react";
declare const arcadeTabVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ArcadeTabProps extends VariantProps<typeof arcadeTabVariants> {
    Icon: React.ReactNode;
    value: string;
    label: string;
    active?: boolean;
    className?: string;
    onClick?: () => void;
}
export declare const ArcadeTab: React.ForwardRefExoticComponent<ArcadeTabProps & React.RefAttributes<HTMLButtonElement>>;
export default ArcadeTab;
