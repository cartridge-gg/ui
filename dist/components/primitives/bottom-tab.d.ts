import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const bottomTabVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "default" | null | undefined;
    status?: "active" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BottomTabProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bottomTabVariants> {
}
export declare function BottomTab({ className, variant, status, ...props }: BottomTabProps): import("react/jsx-runtime").JSX.Element;
export {};
