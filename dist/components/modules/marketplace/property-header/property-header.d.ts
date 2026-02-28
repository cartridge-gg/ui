import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplacePropertyHeaderVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplacePropertyHeaderProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplacePropertyHeaderVariants> {
    label: string;
    count: number;
}
export declare const MarketplacePropertyHeader: React.ForwardRefExoticComponent<MarketplacePropertyHeaderProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplacePropertyHeader;
