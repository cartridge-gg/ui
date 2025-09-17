import { VariantProps } from "class-variance-authority";
export interface CollectiblePropertyProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectiblePropertyVariants> {
    name: string;
    value: string;
}
declare const collectiblePropertyVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleProperty({ name, value, variant, className, ...props }: CollectiblePropertyProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleProperty;
