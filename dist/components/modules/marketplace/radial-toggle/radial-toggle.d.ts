import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceRadialToggleVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceRadialToggleProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceRadialToggleVariants> {
    active?: boolean;
}
export declare const MarketplaceRadialToggle: React.ForwardRefExoticComponent<MarketplaceRadialToggleProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceRadialToggle;
