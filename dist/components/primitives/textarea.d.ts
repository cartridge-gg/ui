import * as React from "react";
import { VariantProps } from "class-variance-authority";
export declare const textareaVariants: (props?: ({
    variant?: "username" | "default" | null | undefined;
    size?: "default" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, VariantProps<typeof textareaVariants> {
    error?: Error;
    isLoading?: boolean;
    onClear?: () => void;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
