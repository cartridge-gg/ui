import { VariantProps } from "class-variance-authority";
export interface CollectibleItemsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleItemsVariants> {
}
declare const collectibleItemsVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleItems({ variant, className, children, ...props }: CollectibleItemsProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleItems;
