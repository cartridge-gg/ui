import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThumbnailCollectible } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const collectibleAssetCardVariants = cva("w-full px-4 py-3 flex gap-3", {
    variants: {
        variant: {
            default: "bg-background-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleAssetCard({ image, title, description, variant, className, ...props }) {
    return (_jsxs("div", { className: cn(collectibleAssetCardVariants({ variant }), className), ...props, children: [_jsx(ThumbnailCollectible, { image: image, size: "lg" }), _jsxs("div", { className: "flex flex-col gap-0.5 justify-between", children: [_jsx("p", { className: "text-medium text-sm text-foreground-100", children: title }), _jsx("p", { className: "text-foreground-300 text-xs", children: description })] })] }));
}
export default CollectibleAssetCard;
//# sourceMappingURL=card.js.map