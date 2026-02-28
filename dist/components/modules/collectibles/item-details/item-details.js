import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPlayerAvatar, Thumbnail } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const collectibleItemDetailsVariants = cva("h-10 px-3 py-2.5 rounded flex justify-between items-center gap-2 text-sm w-full overflow-hidden", {
    variants: {
        variant: {
            default: "bg-background-150",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleItemDetails({ owner, quantity, price, logo, expiration, variant, className, ...props }) {
    return (_jsxs("div", { className: cn(collectibleItemDetailsVariants({ variant }), className), ...props, children: [_jsxs("div", { className: "flex gap-1 grow overflow-hidden", children: [_jsx(AchievementPlayerAvatar, { username: owner, size: "sm", className: "min-w-6" }), _jsx("p", { className: "text-sm truncate", children: owner })] }), _jsxs("div", { className: "flex justify-end items-center gap-2 min-w-40 overflow-hidden", children: [_jsx("p", { className: "min-w-10", children: quantity }), _jsxs("div", { className: "min-w-14 flex gap-1 items-center", children: [logo && _jsx(Thumbnail, { icon: logo, size: "xs", rounded: true, centered: true }), _jsx("p", { className: cn(!price ? "text-foreground-400" : ""), children: price || "--" })] }), _jsx("p", { className: cn("min-w-12", !expiration && "text-foreground-400"), children: expiration || "--" })] })] }));
}
export default CollectibleItemDetails;
//# sourceMappingURL=item-details.js.map