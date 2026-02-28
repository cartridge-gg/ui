import * as React from "react";
import { VariantProps } from "class-variance-authority";
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    containerClassName?: string;
    error?: Error;
    isLoading?: boolean;
    onClear?: () => void;
}
export declare const inputVariants: (props?: ({
    variant?: "username" | "default" | null | undefined;
    size?: "lg" | "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ErrorProps = {
    label?: string;
    className?: string;
};
export declare function ErrorMessage({ label, className }: ErrorProps): import("react/jsx-runtime").JSX.Element;
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
