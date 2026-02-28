import { VariantProps } from "class-variance-authority";
export type Property = {
    name: string;
    value: string | number | null | undefined;
};
export interface CollectiblePropertiesProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectiblePropertiesVariants> {
    properties: Property[];
}
declare const collectiblePropertiesVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleProperties({ properties, variant, className, ...props }: CollectiblePropertiesProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleProperties;
