import { VariantProps } from "class-variance-authority";
export interface CollectibleAssetCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleAssetCardVariants> {
    image: string;
    title: string;
    description: string;
}
declare const collectibleAssetCardVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleAssetCard({ image, title, description, variant, className, ...props }: CollectibleAssetCardProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleAssetCard;
