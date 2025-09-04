import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceHeaderVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceHeaderProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceHeaderVariants> {
    label: string;
}
export declare const MarketplaceHeader: React.ForwardRefExoticComponent<MarketplaceHeaderProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceHeader;
