import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceSearchResultsVariants: (props?: ({
    variant?: "default" | "dark" | "darkest" | "darker" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceSearchResultsProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceSearchResultsVariants> {
}
export declare const MarketplaceSearchResults: React.ForwardRefExoticComponent<MarketplaceSearchResultsProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceSearchResults;
