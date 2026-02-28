import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceSearchCardVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceSearchCardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceSearchCardVariants> {
    image: React.ReactNode;
    label: string;
}
export declare const MarketplaceSearchCard: React.ForwardRefExoticComponent<MarketplaceSearchCardProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceSearchCard;
