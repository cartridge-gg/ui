import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceFiltersVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceFiltersProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceFiltersVariants> {
}
export declare const MarketplaceFilters: React.ForwardRefExoticComponent<MarketplaceFiltersProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceFilters;
