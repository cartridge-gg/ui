import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceSearchEngineVariants: (props?: ({
    variant?: "default" | "darkest" | "darker" | "dark" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceSearchEngineProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceSearchEngineVariants> {
    search: string;
    setSearch: (search: string) => void;
    cards?: React.ReactNode[];
}
export declare const MarketplaceSearchEngine: React.ForwardRefExoticComponent<MarketplaceSearchEngineProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceSearchEngine;
