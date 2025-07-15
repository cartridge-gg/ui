import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckboxIcon, Thumbnail } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useCallback } from "react";
const collectibleHeaderVariants = cva("group h-9 relative flex gap-2 px-1.5 py-1.5 justify-between items-center text-sm font-medium transition-all duration-150", {
    variants: {
        variant: {
            default: "bg-background-200 group-hover:bg-background-300 text-foreground-100",
            faded: "bg-background-100 group-hover:bg-background-200 text-foreground-100",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleHeader({ title, icon, selectable, selected, onSelect, variant, className, ...props }) {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect?.();
    }, [onSelect]);
    return (_jsxs("div", { className: cn(collectibleHeaderVariants({ variant }), className, icon === undefined && "pl-2.5"), ...props, children: [_jsxs("div", { className: "flex items-center gap-1.5 overflow-hidden", children: [_jsx(Thumbnail, { variant: "light", size: "sm", icon: icon === null ? undefined : icon, className: icon === undefined ? "hidden" : "" }), _jsx("p", { className: cn("truncate", (selected || selectable) && "pr-6", icon === undefined && "pl-2.5"), children: title })] }), selected && (_jsx("div", { className: "absolute right-[9px] top-1/2 -translate-y-1/2 text-foreground-100 cursor-pointer", onClick: handleClick, children: _jsx(CheckboxIcon, { variant: "line", size: "sm" }) })), selectable && !selected && (_jsx("div", { className: "absolute right-[9px] top-1/2 -translate-y-1/2 text-background-500 hover:text-foreground-200 cursor-pointer", onClick: handleClick, children: _jsx(CheckboxIcon, { variant: "unchecked-line", size: "sm" }) }))] }));
}
export default CollectibleHeader;
//# sourceMappingURL=header.js.map