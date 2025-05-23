import { VariantProps } from "class-variance-authority";
export interface CollectibleAssetProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleAssetVariants> {
    title: string;
    image: string;
    count?: number;
    quantity?: number;
    sales?: number;
    icon?: string | null;
    onSelect?: () => void;
}
declare const collectibleAssetVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleAsset({ title, image, count, quantity, sales, icon, variant, className, ...props }: CollectibleAssetProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleAsset;
