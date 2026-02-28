import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceAssetFilterVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceAssetFilterProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceAssetFilterVariants> {
    value?: 0 | 1;
    setValue?: (value: number) => void;
}
export declare const MarketplaceAssetFilter: React.ForwardRefExoticComponent<MarketplaceAssetFilterProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceAssetFilter;
