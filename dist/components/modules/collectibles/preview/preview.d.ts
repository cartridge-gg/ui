import { VariantProps } from "class-variance-authority";
export interface CollectiblePreviewProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectiblePreviewVariants> {
    title?: string;
    icon?: string | null;
    images: string[];
    totalCount?: number;
    listingCount?: number;
    backgroundColor?: string;
}
declare const collectiblePreviewVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const CollectiblePreview: ({ title, icon, images, totalCount, listingCount, backgroundColor, variant, size, className, onError, ...props }: CollectiblePreviewProps) => import("react/jsx-runtime").JSX.Element;
export default CollectiblePreview;
