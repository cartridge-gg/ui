import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const collectibleItemsVariants = cva("flex flex-col items-stretch gap-3 select-none", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleItems({ variant, className, children, ...props }) {
    return (_jsxs("div", { className: cn(collectibleItemsVariants({ variant }), className), ...props, children: [_jsxs("div", { className: "px-3 py-1 flex justify-between items-center gap-2 text-foreground-400 font-semibold text-xs tracking-wider pr-16", children: [_jsx("p", { className: "grow", children: "Owner" }), _jsxs("div", { className: "flex justify-end gap-2 min-w-36", children: [_jsx("p", { className: "min-w-10", children: "Qty" }), _jsx("p", { className: "min-w-14", children: "Price" }), _jsx("p", { className: "min-w-12", children: "Expires" })] })] }), children] }));
}
export default CollectibleItems;
//# sourceMappingURL=items.js.map