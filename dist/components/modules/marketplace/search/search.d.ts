import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceSearchVariants: (props?: ({
    variant?: "default" | "dark" | "darkest" | "darker" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SearchResult {
    image: React.ReactNode;
    label: string;
}
export interface MarketplaceSearchProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceSearchVariants> {
    search: string;
    setSearch: (search: string) => void;
    selected?: SearchResult;
    setSelected?: (result: SearchResult | undefined) => void;
    options: SearchResult[];
}
export declare const MarketplaceSearch: React.ForwardRefExoticComponent<MarketplaceSearchProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceSearch;
