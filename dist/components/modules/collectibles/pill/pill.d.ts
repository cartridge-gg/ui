import { VariantProps } from "class-variance-authority";
export interface CollectiblePillProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectiblePillVariants> {
    label: string;
}
declare const collectiblePillVariants: (props?: ({
    variant?: "default" | "faded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectiblePill({ label, variant, className, ...props }: CollectiblePillProps): import("react/jsx-runtime").JSX.Element;
export default CollectiblePill;
