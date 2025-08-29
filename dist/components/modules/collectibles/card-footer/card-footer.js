import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Thumbnail } from "../../../../index";
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
    return (_jsxs("div", { "data-hidden": price === undefined && lastSale === undefined, className: cn(collectibleCardFooterVariants({ variant }), className), ...props, children: [_jsxs("div", { className: "flex justify-between items-center text-[10px]/3", children: [_jsx("p", { children: "Price" }), _jsx("p", { children: "Last Sale" })] }), _jsxs("div", { className: "flex justify-between items-center text-sm font-medium", children: [!!price && typeof price === "string" ? (_jsx("p", { className: "text-foreground-100", children: price })) : !!price && typeof price === "object" ? (_jsx(Price, { price: price })) : (_jsx("p", { children: "--" })), !!lastSale && typeof lastSale === "string" ? (_jsx("p", { className: "text-foreground-100", children: lastSale })) : !!lastSale && typeof lastSale === "object" ? (_jsx(Price, { price: lastSale })) : (_jsx("p", { children: "--" }))] })] }));
}
function Price({ price }) {
    return (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Thumbnail, { icon: price.image, variant: "lighter", size: "xs", rounded: true, transdark: true }), _jsx("p", { className: "text-foreground-100", children: price.value })] }));
}
export default CollectibleCardFooter;
//# sourceMappingURL=card-footer.js.map