import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplacePropertyEmptyVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplacePropertyEmptyProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplacePropertyEmptyVariants> {
}
export declare const MarketplacePropertyEmpty: React.ForwardRefExoticComponent<MarketplacePropertyEmptyProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplacePropertyEmpty;
