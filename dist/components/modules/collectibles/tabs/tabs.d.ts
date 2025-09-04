import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
interface CollectibleTabsProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleTabsVariants> {
    order: ("details" | "items" | "activity")[];
    onValueChange?: (value: string) => void;
}
export declare const collectibleTabsVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const CollectibleTabs: ({ variant, className, children, order, }: CollectibleTabsProps) => import("react/jsx-runtime").JSX.Element;
export default CollectibleTabs;
