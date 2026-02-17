import { VariantProps } from "class-variance-authority";
export interface CollectibleFooterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CollectibleFooterVariants> {
    title?: string;
    icon?: string | null;
    totalCount?: number;
    listingCount?: number;
}
declare const CollectibleFooterVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const CollectibleFooter: ({ title, icon, totalCount, listingCount, variant, className, ...props }: CollectibleFooterProps) => import("react/jsx-runtime").JSX.Element;
export default CollectibleFooter;
