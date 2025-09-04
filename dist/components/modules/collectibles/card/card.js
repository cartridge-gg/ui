import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectibleCardFooter, CollectiblePreview } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { CollectibleHeader } from "../header";
const collectibleCardVariants = cva("group relative grow rounded overflow-hidden cursor-pointer border-transparent border-[2px] data-[selected=true]:border-foreground-100", {
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
export function CollectibleCard({ title, image, icon, totalCount, listingCount, price, lastSale, selectable = true, selected, onSelect, variant, className, ...props }) {
    return (_jsxs("div", { "data-selected": selected, className: cn(collectibleCardVariants({ variant }), className), ...props, children: [_jsx(CollectibleHeader, { title: title, icon: icon, selectable: !selected && selectable, selected: selected, onSelect: onSelect, variant: variant }), _jsx(CollectiblePreview, { image: image, size: "sm", totalCount: totalCount, listingCount: listingCount }), _jsx(CollectibleCardFooter, { price: price, lastSale: lastSale, variant: variant })] }));
}
export default CollectibleCard;
//# sourceMappingURL=card.js.map