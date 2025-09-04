import { VariantProps } from "class-variance-authority";
declare const thumbnailsSubIconVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
    size?: "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ThumbnailsSubIconProps extends VariantProps<typeof thumbnailsSubIconVariants> {
    Icon: React.ReactNode;
    className?: string;
}
export declare const ThumbnailsSubIcon: ({ Icon, variant, size, className, }: ThumbnailsSubIconProps) => import("react/jsx-runtime").JSX.Element;
export default ThumbnailsSubIcon;
