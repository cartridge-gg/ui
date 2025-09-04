import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TabsTrigger } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const arcadeTabVariants = cva("flex justify-center items-center text-foreground-300 hover:text-foreground-200 data-[active=true]:text-primary transition-colors", {
    variants: {
        variant: {
            default: "",
        },
        size: {
            default: "p-2 pt-[10px] gap-1 text-sm",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export const ArcadeTab = React.forwardRef(({ Icon, value, label, active, className, variant, size, onClick, ...props }, ref) => {
    return (_jsxs(TabsTrigger, { value: value, className: cn("p-0 flex flex-col items-center cursor-pointer select-none transition-colors", className), onClick: onClick, ref: ref, ...props, children: [_jsxs("div", { "data-active": active, className: cn(arcadeTabVariants({ variant, size })), children: [Icon, _jsx("p", { className: "font-normal", children: label })] }), _jsx("div", { "data-active": active, className: cn("rounded-full bg-primary h-0.5 w-full translate-y-[1px] text-primary", active ? "opacity-100" : "opacity-0") })] }));
});
export default ArcadeTab;
//# sourceMappingURL=tab.js.map