import { VariantProps } from "class-variance-authority";
export interface CollectiblePreviewProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectiblePreviewVariants> {
    images: string[];
    totalCount?: number;
    listingCount?: number;
}
declare const collectiblePreviewVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const CollectiblePreview: ({ images, totalCount, listingCount, variant, size, className, onError, ...props }: CollectiblePreviewProps) => import("react/jsx-runtime").JSX.Element;
export default CollectiblePreview;
