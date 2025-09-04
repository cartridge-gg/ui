import { VariantProps } from "class-variance-authority";
declare const headerIconVariants: (props?: ({
    variant?: "default" | "ghost" | null | undefined;
    size?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface UniversalHeaderIconProps extends VariantProps<typeof headerIconVariants> {
    icon: string | React.ReactNode;
    className?: string;
}
export declare const UniversalHeaderIcon: ({ icon, variant, size, className, }: UniversalHeaderIconProps) => import("react/jsx-runtime").JSX.Element;
export default UniversalHeaderIcon;
