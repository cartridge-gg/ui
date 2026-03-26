import { VariantProps } from "class-variance-authority";
export interface CollectibleTagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleTagVariants> {
    label?: string;
    hover?: boolean;
}
declare const collectibleTagVariants: (props?: ({
    variant?: "default" | "dark" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleTag({ label, variant, className, children, ...props }: CollectibleTagProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleTag;
