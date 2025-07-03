import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const collectibleCardFooterVariants = cva("px-3 py-2 flex flex-col gap-0.5 text-foreground-400 data-[hidden=true]:hidden", {
    variants: {
        variant: {
            default: "bg-background-200 group-hover:bg-background-300",
            faded: "bg-background-100 group-hover:bg-background-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleCardFooter({ price, lastSale, variant, className, ...props }) {
    return (_jsxs("div", { "data-hidden": !price && !lastSale, className: cn(collectibleCardFooterVariants({ variant }), className), ...props, children: [_jsxs("div", { className: "flex justify-between items-center text-[10px]/3", children: [_jsx("p", { children: "Price" }), _jsx("p", { children: "Last Sale" })] }), _jsxs("div", { className: "flex justify-between items-center text-sm font-medium", children: [_jsx("p", { className: price ? "text-foreground-100" : "", children: price ? price : "--" }), _jsx("p", { children: lastSale ? lastSale : "--" })] })] }));
}
export default CollectibleCardFooter;
//# sourceMappingURL=card-footer.js.map