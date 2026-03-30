import { collectibleCardVariants } from "../../../../index";
import { VariantProps } from "class-variance-authority";
export interface InventoryItemCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleCardVariants> {
    title: string;
    images: string[];
    backgroundColor?: string;
    totalCount?: number;
    listingCount?: number;
    selectable?: boolean;
    selected?: boolean;
    onSelect?: () => void;
    onClick?: () => void;
}
export declare function InventoryItemCard({ title, images, backgroundColor, totalCount, listingCount, selectable, selected, onSelect, variant, className, onError, ...props }: InventoryItemCardProps): import("react/jsx-runtime").JSX.Element;
export default InventoryItemCard;
