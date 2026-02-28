import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const marketplacePropertyHeaderVariants = cva("h-9 cursor-pointer", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplacePropertyHeader = React.forwardRef(({ label, count, className, variant, children }, ref) => {
    return (_jsx(Accordion, { ref: ref, type: "single", collapsible: true, children: _jsxs(AccordionItem, { value: "item-1", children: [_jsx("div", { className: cn(marketplacePropertyHeaderVariants({ variant }), className), children: _jsxs(AccordionTrigger, { className: "grow pr-2 flex justify-between items-center", parentClassName: "group px-3 py-2 bg-background-200 hover:bg-background-300 [&[data-state=open]]:bg-background-300 text-foreground-300 hover:text-foreground-200 rounded", wedgeIconSize: "sm", children: [_jsx("p", { className: "text-xs text-foreground-100", children: label }), _jsx("span", { className: "text-xs text-foreground-300 group-hover:text-foreground-200 transition-colors", children: count })] }) }), _jsx(AccordionContent, { className: "pt-2 gap-2", children: children })] }) }));
});
export default MarketplacePropertyHeader;
//# sourceMappingURL=property-header.js.map