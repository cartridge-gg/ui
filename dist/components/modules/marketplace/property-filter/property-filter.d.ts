import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplacePropertyFilterVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplacePropertyFilterProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplacePropertyFilterVariants> {
    label: string;
    count: number;
    value?: boolean;
    setValue?: (value: boolean) => void;
    disabled?: boolean;
}
export declare const MarketplacePropertyFilter: React.ForwardRefExoticComponent<MarketplacePropertyFilterProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplacePropertyFilter;
