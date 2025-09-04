import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React, { useCallback, useEffect } from "react";
const marketplacePropertyFilterVariants = cva("h-8 flex justify-between items-center px-3 py-1.5 rounded cursor-pointer transition-colors duration-150", {
    variants: {
        variant: {
            default: "bg-transparent hover:bg-background-200 text-background-500 data-[selected=true]:text-foreground-200 data-[disabled=true]:text-foreground-400 data-[disabled=true]:cursor-default",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplacePropertyFilter = React.forwardRef(({ label, count, value, setValue, disabled, className, variant }, ref) => {
    const [selected, setSelected] = React.useState(!!value);
    const handleClick = useCallback((value) => {
        setSelected(value);
        if (!setValue)
            return;
        setValue(value);
    }, [setValue, setSelected]);
    useEffect(() => {
        if (value !== undefined) {
            setSelected(value);
        }
    }, [value]);
    return (_jsxs("div", { ref: ref, "data-selected": selected, "data-disabled": disabled, className: cn(marketplacePropertyFilterVariants({ variant }), className), onClick: () => !disabled && handleClick(!selected), children: [_jsxs("div", { className: "flex items-center gap-2", children: [selected ? (_jsx(CheckboxCheckedIcon, { "data-disabled": disabled, size: "sm", className: "text-foreground-400 data-[disabled=true]:text-background-500" })) : (_jsx(CheckboxUncheckedIcon, { "data-disabled": disabled, size: "sm", className: "text-foreground-400 data-[disabled=true]:text-background-500" })), _jsx("p", { "data-disabled": disabled, className: "text-xs text-foreground-100 data-[disabled=true]:text-foreground-400", children: label })] }), _jsx("p", { "data-disabled": disabled, className: "text-xs text-foreground-100 data-[disabled=true]:text-foreground-400", children: count })] }));
});
export default MarketplacePropertyFilter;
//# sourceMappingURL=property-filter.js.map