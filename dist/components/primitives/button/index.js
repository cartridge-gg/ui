import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils";
import { Spinner } from "../../../components/spinner";
import { buttonVariants } from "./utils";
import { ExternalIcon } from "../../../components/icons";
export const Button = React.forwardRef(({ className, variant, size, asChild = false, isLoading, isActive, quantity, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (_jsxs(Comp, { className: cn(buttonVariants({
            variant,
            size,
            status: isActive ? "active" : undefined,
            className,
        })), ref: ref, disabled: disabled || isLoading, ...props, children: [isLoading ? _jsx(Spinner, {}) : children, variant === "link" && !isLoading && _jsx(ExternalIcon, { size: "sm" }), quantity !== undefined && (_jsx("span", { className: "opacity-50 font-[inherit] text-[inherit] tracking-[inherit]", children: quantity }))] }));
});
Button.displayName = "Button";
//# sourceMappingURL=index.js.map