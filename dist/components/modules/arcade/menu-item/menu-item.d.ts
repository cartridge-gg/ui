import { VariantProps } from "class-variance-authority";
import React from "react";
declare const arcadeMenuItemVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ArcadeMenuItemProps extends VariantProps<typeof arcadeMenuItemVariants> {
    Icon: React.ReactNode;
    value: string;
    label: string;
    active?: boolean;
    className?: string;
    onClick?: () => void;
}
export declare const ArcadeMenuItem: React.ForwardRefExoticComponent<ArcadeMenuItemProps & React.RefAttributes<HTMLButtonElement>>;
export default ArcadeMenuItem;
