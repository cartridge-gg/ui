import { VariantProps } from "class-variance-authority";
export interface CollectibleCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleCardVariants> {
    title: string;
    image: string;
    icon?: string;
    totalCount?: number;
    listingCount?: number;
    price?: string | {
        value: string;
        image: string;
    } | null;
    lastSale?: string | {
        value: string;
        image: string;
    } | null;
    selectable?: boolean;
    selected?: boolean;
    onSelect?: () => void;
}
declare const collectibleCardVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleCard({ title, image, icon, totalCount, listingCount, price, lastSale, selectable, selected, onSelect, variant, className, ...props }: CollectibleCardProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleCard;
