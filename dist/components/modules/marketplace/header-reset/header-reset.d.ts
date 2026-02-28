import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const marketplaceHeaderVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface MarketplaceHeaderResetProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof marketplaceHeaderVariants> {
    label?: string;
}
export declare const MarketplaceHeaderReset: React.ForwardRefExoticComponent<MarketplaceHeaderResetProps & React.RefAttributes<HTMLButtonElement>>;
export default MarketplaceHeaderReset;
