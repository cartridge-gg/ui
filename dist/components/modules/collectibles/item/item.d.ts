import { VariantProps } from "class-variance-authority";
export interface CollectibleItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleItemVariants> {
    owner: string;
    quantity: number;
    price?: string;
    logo?: string;
    expiration?: string;
    action: "list" | "unlist" | "purchase";
    onActionClick: () => void;
}
declare const collectibleItemVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleItem({ owner, quantity, price, logo, expiration, action, onActionClick, variant, className, ...props }: CollectibleItemProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleItem;
