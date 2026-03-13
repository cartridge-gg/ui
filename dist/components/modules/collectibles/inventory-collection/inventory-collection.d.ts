import { collectibleCardVariants } from "../../../../index";
import { VariantProps } from "class-variance-authority";
export interface InventoryCollectionCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleCardVariants> {
    title: string;
    images: string[];
    icon: string | null;
    backgroundColor?: string;
    totalCount?: number;
    onSelect?: () => void;
    onClick?: () => void;
}
export declare function InventoryCollectionCard({ title, images, icon, backgroundColor, totalCount, onSelect, variant, className, onError, ...props }: InventoryCollectionCardProps): import("react/jsx-runtime").JSX.Element;
export default InventoryCollectionCard;
