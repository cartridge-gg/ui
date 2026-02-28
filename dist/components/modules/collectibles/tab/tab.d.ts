import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
interface CollectibleTabProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleTabVariants> {
    value: string;
    label: string;
    active: boolean;
    Icon?: React.ReactNode;
}
export declare const collectibleTabVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const CollectibleTab: ({ value, label, active, Icon, variant, className, }: CollectibleTabProps) => import("react/jsx-runtime").JSX.Element;
export default CollectibleTab;
