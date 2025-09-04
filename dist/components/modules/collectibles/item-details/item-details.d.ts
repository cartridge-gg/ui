import { VariantProps } from "class-variance-authority";
export interface CollectibleItemDetailsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleItemDetailsVariants> {
    owner: string;
    quantity: number;
    price?: string;
    logo?: string;
    expiration?: string;
}
declare const collectibleItemDetailsVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleItemDetails({ owner, quantity, price, logo, expiration, variant, className, ...props }: CollectibleItemDetailsProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleItemDetails;
