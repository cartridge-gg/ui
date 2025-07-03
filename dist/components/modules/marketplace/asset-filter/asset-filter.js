import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MarketplaceRadialItem } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React, { useCallback } from "react";
const marketplaceAssetFilterVariants = cva("flex flex-col gap-2 px-2", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceAssetFilter = React.forwardRef(({ value = 0, setValue, className, variant }, ref) => {
    const [active, setActive] = React.useState(value);
    const handleClick = useCallback((value) => {
        setActive(value);
        if (!setValue)
            return;
        setValue(value);
    }, [setValue, setActive]);
    return (_jsxs("div", { ref: ref, className: cn(marketplaceAssetFilterVariants({ variant }), className), children: [_jsx(MarketplaceRadialItem, { label: "Buy Now", active: active === 0, onClick: () => handleClick(0) }), _jsx(MarketplaceRadialItem, { label: "Show All", active: active === 1, onClick: () => handleClick(1) })] }));
});
export default MarketplaceAssetFilter;
//# sourceMappingURL=asset-filter.js.map