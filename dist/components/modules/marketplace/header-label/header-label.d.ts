import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceHeaderLabelVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceHeaderLabelProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof marketplaceHeaderLabelVariants> {
    label: string;
}
export declare const MarketplaceHeaderLabel: React.ForwardRefExoticComponent<MarketplaceHeaderLabelProps & React.RefAttributes<HTMLDivElement>>;
export default MarketplaceHeaderLabel;
