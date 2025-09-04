import { VariantProps } from "class-variance-authority";
export interface CollectibleHeaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleHeaderVariants> {
    title: string;
    icon?: string | null;
    selectable?: boolean;
    selected?: boolean;
    onSelect?: () => void;
}
declare const collectibleHeaderVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleHeader({ title, icon, selectable, selected, onSelect, variant, className, ...props }: CollectibleHeaderProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleHeader;
