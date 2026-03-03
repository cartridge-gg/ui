import { VariantProps } from "class-variance-authority";
export declare const thumbnailVariants: (props?: ({
    variant?: "default" | "light" | "dark" | "ghost" | "darkest" | "darker" | "lighter" | "lightest" | null | undefined;
    size?: "xs" | "sm" | "lg" | "xl" | "md" | "xxs" | "xxl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ThumbnailProps extends VariantProps<typeof thumbnailVariants> {
    icon?: string | React.ReactNode;
    subIcon?: React.ReactNode;
    rounded?: boolean;
    centered?: boolean;
    loading?: boolean;
    error?: boolean;
    transdark?: boolean;
    translight?: boolean;
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    className?: string;
}
export declare const Thumbnail: ({ icon, subIcon, rounded, centered, loading, error, transdark, translight, objectFit, variant, size, className, }: ThumbnailProps) => import("react/jsx-runtime").JSX.Element;
export default Thumbnail;
