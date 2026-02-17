import { VariantProps } from "class-variance-authority";
declare const thumbnailCollectibleVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
    size?: "xs" | "sm" | "lg" | "xl" | "md" | "xxs" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ThumbnailCollectibleProps extends VariantProps<typeof thumbnailCollectibleVariants> {
    image: string;
    subIcon?: React.ReactNode;
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ThumbnailCollectible: ({ image, subIcon, error, loading, variant, size, className, }: ThumbnailCollectibleProps) => import("react/jsx-runtime").JSX.Element;
export default ThumbnailCollectible;
