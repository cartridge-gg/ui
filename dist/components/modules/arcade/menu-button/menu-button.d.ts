import { VariantProps } from "class-variance-authority";
import React from "react";
declare const arcadeMenuButtonVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ArcadeMenuButtonProps extends VariantProps<typeof arcadeMenuButtonVariants> {
    active?: boolean;
    className?: string;
}
export declare const ArcadeMenuButton: React.ForwardRefExoticComponent<ArcadeMenuButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default ArcadeMenuButton;
