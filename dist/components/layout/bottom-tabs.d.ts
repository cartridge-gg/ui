import { VariantProps } from "class-variance-authority";
export declare const layoutBottomTabsVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface LayoutBottomTabsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof layoutBottomTabsVariants> {
}
export declare function LayoutBottomTabs({ className, variant, size, ...props }: LayoutBottomTabsProps): import("react/jsx-runtime").JSX.Element;
export {};
