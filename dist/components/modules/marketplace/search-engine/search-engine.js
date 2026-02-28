import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, SearchIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import React, { useEffect, useState } from "react";
const marketplaceSearchEngineVariants = cva("pr-9 caret-foreground-100", {
    variants: {
        variant: {
            darkest: "bg-spacer-100 hover:bg-spacer-100 focus-visible:bg-spacer-100 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
            darker: "bg-background-100 hover:bg-background-100 focus-visible:bg-background-100 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
            dark: "bg-background-125 hover:bg-background-125 focus-visible:bg-background-125 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
            default: "bg-background-150 hover:bg-background-150 focus-visible:bg-background-150 border border-background-200 hover:border-background-300 focus-visible:border-background-300 focus-visible:border-bg-background-300",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const MarketplaceSearchEngine = React.forwardRef(({ search, setSearch, cards, className, variant, ...props }, ref) => {
    const containerRef = React.useRef(null);
    const [focus, setFocus] = useState(false);
    const [paddingLeft, setPaddingLeft] = useState(0);
    useEffect(() => {
        if (!containerRef.current)
            return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.target === containerRef.current) {
                    const size = entry.contentRect.width;
                    setPaddingLeft(size);
                }
            }
        });
        observer.observe(containerRef.current);
        return () => {
            observer.disconnect();
        };
    }, [containerRef, setPaddingLeft]);
    return (_jsxs("div", { ref: ref, className: "relative", ...props, children: [_jsx(Input, { className: cn(marketplaceSearchEngineVariants({ variant }), className), style: {
                    paddingLeft: `${paddingLeft + 16}px`,
                }, type: "text", placeholder: "Search", value: search, onChange: (e) => setSearch(e.target.value), onFocus: () => setFocus(true), onBlur: () => setFocus(false) }), _jsx("div", { ref: containerRef, className: cn("absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-2", (!cards || cards.length === 0) && "hidden"), children: (cards || []).map((card) => (_jsx("div", { className: "max-w-24 md:max-w-32", children: card }, `${card}`))) }), _jsx(SearchIcon, { "data-focused": focus, "data-content": search.length > 0 && !focus, className: cn("absolute right-2 top-1/2 -translate-y-1/2 transition-colors duration-100", "text-foreground-400 data-[content=true]:text-foreground-300 data-[focused=true]:text-foreground-100 ") })] }));
});
export default MarketplaceSearchEngine;
//# sourceMappingURL=search-engine.js.map