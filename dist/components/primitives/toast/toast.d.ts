import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const toastVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface CloseButtonProps {
    variant?: "default" | "translucent";
    className?: string;
    toastId?: string;
}
export declare const CloseButton: React.NamedExoticComponent<CloseButtonProps>;
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
    showClose?: boolean;
    toastId?: string;
    toasterId?: string;
    safeToClose?: boolean;
    iconUrl?: string;
}
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
export {};
