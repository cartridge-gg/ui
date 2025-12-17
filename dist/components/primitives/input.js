import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { AlertIcon } from "../../components/icons";
import { cn } from "../../utils";
import { Clear } from "./clear";
import { cva } from "class-variance-authority";
export const inputVariants = cva("flex w-full rounded-md border px-4 font-mono ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [&::-webkit-inner-spin-button]:appearance-none caret-primary", {
    variants: {
        variant: {
            default: "border bg-background-200 border-background-300 text-foreground-100 hover:border-background-400 focus-visible:border-primary focus-visible:bg-background-300 placeholder:text-foreground-400",
            username: "border bg-background-200 border-background-300 text-foreground-100 placeholder:text-foreground-400 focus-visible:border-primary",
        },
        size: {
            default: "h-10 text-sm/[18px]",
            lg: "h-12 text-[15px]/5",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export function ErrorMessage({ label, className }) {
    return (_jsxs("div", { className: cn("flex items-center gap-x-1 text-destructive-100 select-none text-sm/[18px]", !label && "hidden", className), children: [_jsx(AlertIcon, { className: "h-5 w-5" }), _jsx("p", { className: "text-sm", children: label })] }));
}
export const Input = React.forwardRef(({ error, isLoading, onClear, variant, size, containerClassName, className, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    return (_jsxs("div", { className: cn("flex flex-col gap-y-3", containerClassName), children: [_jsxs("div", { className: "relative", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), children: [_jsx("input", { ref: ref, type: type, className: cn(inputVariants({ variant, size, className }), !!props.value && !!onClear && "pr-12", !!error &&
                            "border-destructive-100 hover:border-destructive-100 focus-visible:border-destructive-100"), ...props }), (isFocused || isHovered) && !!props.value && !!onClear && (_jsx("div", { className: "absolute right-1.5 top-1/2 -translate-y-1/2", children: _jsx(Clear, { isLoading: !!isLoading, onClear: onClear }) }))] }), !!error && _jsx(ErrorMessage, { label: error.message })] }));
});
Input.displayName = "Input";
//# sourceMappingURL=input.js.map