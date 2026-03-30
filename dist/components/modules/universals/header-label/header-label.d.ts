import { VariantProps } from "class-variance-authority";
declare const headerLabelVariants: (props?: ({
    variant?: "default" | "ghost" | null | undefined;
    size?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface UniversalHeaderLabelProps extends VariantProps<typeof headerLabelVariants> {
    label: string;
    icon?: string | React.ReactNode;
    className?: string;
}
export declare const UniversalHeaderLabel: ({ label, icon, className, variant, size, }: UniversalHeaderLabelProps) => import("react/jsx-runtime").JSX.Element;
export default UniversalHeaderLabel;
