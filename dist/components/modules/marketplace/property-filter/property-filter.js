import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React, { useCallback, useEffect } from "react";
const marketplacePropertyFilterVariants = cva("h-8 flex justify-between items-center px-3 py-1.5 rounded cursor-pointer transition-colors duration-150", {
    variants: {
        variant: {
            default: "bg-transparent hover:bg-background-200 text-background-500 data-[selected=true]:text-foreground-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplacePropertyFilter = React.forwardRef(({ label, count, value, setValue, className, variant }, ref) => {
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
    return (_jsxs("div", { ref: ref, "data-selected": selected, className: cn(marketplacePropertyFilterVariants({ variant }), className), onClick: () => handleClick(!selected), children: [_jsxs("div", { className: "flex items-center gap-2", children: [selected ? (_jsx(CheckboxCheckedIcon, { size: "sm" })) : (_jsx(CheckboxUncheckedIcon, { size: "sm" })), _jsx("p", { className: "text-xs text-foreground-100", children: label })] }), _jsx("p", { className: "text-xs text-foreground-100", children: count })] }));
});
export default MarketplacePropertyFilter;
//# sourceMappingURL=property-filter.js.map