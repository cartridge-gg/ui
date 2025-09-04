import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SelectItem, TabsTrigger } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React, { useCallback } from "react";
const arcadeMenuItemVariants = cva("rounded-none flex justify-start items-center gap-1 text-foreground-300 bg-background-200 hover:text-foreground-200 hover:bg-background-300 data-[active=true]:text-primary transition-colors cursor-pointer line-clamp-1", {
    variants: {
        variant: {
            default: "",
        },
        size: {
            default: "min-w-[192px] px-2 py-2.5 text-sm",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export const ArcadeMenuItem = React.forwardRef(({ Icon, value, label, active, className, variant, size, onClick, ...props }, ref) => {
    const handleFocus = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    return (_jsx(TabsTrigger, { value: value, className: cn("w-full p-0 flex cursor-pointer select-none transition-colors data-[state=active]:bg-transparent data-[state=active]:shadow-none", className), ref: ref, ...props, children: _jsx(SelectItem, { onSelect: onClick, onFocus: handleFocus, "data-active": active, value: value, simplified: true, className: cn(arcadeMenuItemVariants({ variant, size })), children: _jsxs("div", { className: cn("flex justify-start items-center gap-1"), children: [Icon, _jsx("p", { className: "font-normal", children: label })] }) }) }));
});
export default ArcadeMenuItem;
//# sourceMappingURL=menu-item.js.map