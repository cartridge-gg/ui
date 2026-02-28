import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectibleCardFooter, CollectiblePreview } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { CollectibleHeader } from "../header";
export const collectibleCardVariants = cva("group relative grow rounded overflow-hidden border-transparent border-[2px] data-[selected=true]:border-foreground-100 data-[selected=true]:rounded-[10px]", {
    variants: {
        variant: {
            default: "",
            faded: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleCard({ title, images, icon, backgroundColor, totalCount, listingCount, price, lastSale, selectable = false, selected, clickable = false, onSelect, variant, className, onError, ...props }) {
    return (_jsxs("div", { "data-selected": selected, className: cn(collectibleCardVariants({ variant }), props.onClick !== undefined || clickable
            ? "cursor-pointer"
            : "cursor-default", className), ...props, children: [_jsx(CollectibleHeader, { selectable: selectable, selected: selected, onSelect: onSelect, variant: variant }), _jsx(CollectiblePreview, { title: title, icon: icon, images: images, size: "sm", totalCount: totalCount, listingCount: listingCount, onError: onError, backgroundColor: backgroundColor }), _jsx(CollectibleCardFooter, { price: price, lastSale: lastSale, variant: variant })] }));
}
export default CollectibleCard;
//# sourceMappingURL=card.js.map