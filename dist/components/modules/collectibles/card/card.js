import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectiblePreview } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { CollectibleHeader } from "../header";
import { useState } from "react";
const collectibleCardVariants = cva("grow rounded overflow-hidden cursor-pointer border-transparent border-[2px] data-[selected=true]:border-foreground-100", {
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
export function CollectibleCard({ title, image, selectable = true, selected, onSelect, variant, className, ...props }) {
    const [hover, setHover] = useState(false);
    return (_jsxs("div", { "data-selected": selected, className: cn(collectibleCardVariants({ variant }), className), onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props, children: [_jsx(CollectibleHeader, { title: title, selectable: !selected && selectable, selected: selected, onSelect: onSelect, hover: hover, variant: variant }), _jsx(CollectiblePreview, { image: image, hover: hover, size: "sm" })] }));
}
export default CollectibleCard;
//# sourceMappingURL=card.js.map