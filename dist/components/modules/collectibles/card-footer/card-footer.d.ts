import { VariantProps } from "class-variance-authority";
export interface CollectibleCardFooterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleCardFooterVariants> {
    price?: string | {
        value: string;
        image: string;
    } | null;
    lastSale?: string | {
        value: string;
        image: string;
    } | null;
}
declare const collectibleCardFooterVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleCardFooter({ price, lastSale, variant, className, ...props }: CollectibleCardFooterProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleCardFooter;
