import { jsx as _jsx } from "react/jsx-runtime";
import { CollectibleSelected } from "../../../../index";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
const collectibleHeaderVariants = cva("group h-9 absolute w-full flex gap-2 px-1.5 py-1.5 justify-between items-center text-sm font-medium transition-all duration-150 z-10 bg-transparent", {
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
export function CollectibleHeader({ selectable, selected, onSelect, variant, className, ...props }) {
    return (_jsx("div", { className: cn(collectibleHeaderVariants({ variant }), className), ...props, children: (selected || selectable) && (_jsx(CollectibleSelected, { className: "absolute top-0 right-0", selected: selected ?? false, onSelect: onSelect })) }));
}
export default CollectibleHeader;
//# sourceMappingURL=header.js.map