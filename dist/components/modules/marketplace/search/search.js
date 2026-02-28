import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MarketplaceSearchCard, MarketplaceSearchResult, MarketplaceSearchResults, MarketplaceSearchEngine, } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React, { useCallback, useMemo } from "react";
const marketplaceSearchVariants = cva("flex flex-col gap-0.5", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceSearch = React.forwardRef(({ search, setSearch, selected, setSelected, options, className, variant, ...props }, ref) => {
    const clearSelection = useCallback(() => {
        if (!setSelected)
            return;
        setSelected(undefined);
    }, [setSelected]);
    const card = useMemo(() => {
        if (!selected)
            return undefined;
        return (_jsx(MarketplaceSearchCard, { image: selected.image, label: selected.label, onClick: () => clearSelection() }));
    }, [selected, variant, clearSelection]);
    const handleClick = useCallback(({ image, label }) => {
        if (!setSelected)
            return;
        setSelected({ image, label });
        setSearch("");
    }, [setSelected, setSearch]);
    return (_jsxs("div", { ref: ref, className: cn(marketplaceSearchVariants({ variant }), className), ...props, children: [_jsx(MarketplaceSearchEngine, { search: search, setSearch: setSearch, cards: [card], variant: variant }), _jsx(MarketplaceSearchResults, { variant: variant, children: options &&
                    options.length > 0 &&
                    options.map(({ image, label }, index) => (_jsx(MarketplaceSearchResult, { image: image, label: label, variant: variant, onClick: () => handleClick({ image, label }) }, index))) })] }));
});
export default MarketplaceSearch;
//# sourceMappingURL=search.js.map