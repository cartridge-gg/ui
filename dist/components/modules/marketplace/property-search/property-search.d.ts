import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplacePropertySearchVariants: (props?: ({
    variant?: "default" | "dark" | "darkest" | "darker" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplacePropertySearchProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplacePropertySearchVariants> {
    search: string;
    setSearch: (search: string) => void;
}
export declare const MarketplacePropertySearch: React.ForwardRefExoticComponent<MarketplacePropertySearchProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplacePropertySearch;
