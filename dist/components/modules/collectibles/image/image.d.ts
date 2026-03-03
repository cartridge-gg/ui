import { VariantProps } from "class-variance-authority";
export interface CollectibleImageProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleImageVariants> {
    images: string[];
    loadingSpinner?: boolean;
    loadingSkeleton?: boolean;
    onLoaded?: () => void;
}
declare const collectibleImageVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const CollectibleImage: ({ title, images, loadingSpinner, loadingSkeleton, onLoaded, variant, className, onError, ...props }: CollectibleImageProps) => import("react/jsx-runtime").JSX.Element;
export default CollectibleImage;
