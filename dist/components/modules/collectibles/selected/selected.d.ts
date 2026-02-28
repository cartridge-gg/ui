import { VariantProps } from "class-variance-authority";
export interface CollectibleSelectedProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleSelectedVariants> {
    size?: "xs" | "sm" | "lg" | "xl" | "collectible";
    selected: boolean;
    onSelect?: () => void;
}
declare const collectibleSelectedVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleSelected({ size, selected, onSelect, variant, className, ...props }: CollectibleSelectedProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleSelected;
