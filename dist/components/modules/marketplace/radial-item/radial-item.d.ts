import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceMarketplaceRadialItemVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceRadialItemProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceMarketplaceRadialItemVariants> {
    label: string;
    active?: boolean;
}
export declare const MarketplaceRadialItem: React.ForwardRefExoticComponent<MarketplaceRadialItemProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceRadialItem;
