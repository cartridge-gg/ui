import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectiblePreview, CollectibleTag, StackDiamondIcon, TagIcon, } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { CollectibleHeader } from "../header";
import { useState } from "react";
const collectibleAssetVariants = cva("relative rounded overflow-hidden cursor-pointer", {
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
export function CollectibleAsset({ title, image, count, quantity, sales, icon, variant, className, ...props }) {
    const [hover, setHover] = useState(false);
    return (_jsxs("div", { "data-hover": hover, className: cn(collectibleAssetVariants({ variant }), className), onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props, children: [_jsx(CollectibleHeader, { title: title, icon: icon, label: count ? `${count}` : undefined, hover: hover, variant: variant }), _jsx(CollectiblePreview, { image: image, hover: hover, size: "sm" }), _jsxs("div", { className: "flex gap-1 items-center justify-end absolute bottom-1 right-1", children: [!!quantity && (_jsx(CollectibleTag, { label: `${quantity}`, children: _jsx(StackDiamondIcon, { variant: "solid", size: "sm" }) })), !!sales && (_jsx(CollectibleTag, { label: `${sales}`, children: _jsx(TagIcon, { variant: "solid", size: "sm" }) }))] })] }));
}
export default CollectibleAsset;
//# sourceMappingURL=asset.js.map