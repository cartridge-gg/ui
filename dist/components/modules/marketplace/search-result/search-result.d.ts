import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceSearchResultVariants: (props?: ({
    variant?: "default" | "darkest" | "darker" | "dark" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceSearchResultProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceSearchResultVariants> {
    image: React.ReactNode;
    label: string;
}
export declare const MarketplaceSearchResult: React.ForwardRefExoticComponent<MarketplaceSearchResultProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceSearchResult;
