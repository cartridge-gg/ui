import { VariantProps } from "class-variance-authority";
export interface CollectibleCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleCardVariants> {
    title: string;
    images: string[];
    icon?: string | null;
    backgroundColor?: string;
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
    clickable?: boolean;
    onSelect?: () => void;
    onClick?: () => void;
}
export declare const collectibleCardVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleCard({ title, images, icon, backgroundColor, totalCount, listingCount, price, lastSale, selectable, selected, clickable, onSelect, variant, className, onError, ...props }: CollectibleCardProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleCard;
