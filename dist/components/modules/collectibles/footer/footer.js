import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectibleTag, TagIcon, Thumbnail } from "../../../../index";
import { cva } from "class-variance-authority";
import { cn, formatNumber } from "../../../../utils";
const CollectibleFooterVariants = cva("w-full h-[48px] p-[12px]", {
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
export const CollectibleFooter = ({ title, icon, totalCount, listingCount, variant, className, ...props }) => {
    return (_jsx("div", { className: cn(CollectibleFooterVariants({ variant }), className), style: {
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent)",
        }, ...props, children: _jsxs("div", { className: "flex items-center gap-[6px]", children: [icon !== undefined && (_jsx(Thumbnail, { className: "w-[20px] h-[20px] bg-translucent-light-100", variant: "light", size: "sm", icon: icon })), !!listingCount && (_jsx(TagIcon, { className: "min-w-[24px] items-center", variant: "solid", size: "sm" })), !!title && _jsx("p", { className: "truncate", children: title }), _jsx("div", { className: "flex-grow" }), !!totalCount && (_jsx(CollectibleTag, { className: "bg-translucent-light-100", label: `${formatNumber(totalCount)}x` }))] }) }));
};
export default CollectibleFooter;
//# sourceMappingURL=footer.js.map