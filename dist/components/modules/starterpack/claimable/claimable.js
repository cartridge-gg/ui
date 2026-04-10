import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardListContent, CardTitle, } from "../../../../components/primitives";
import { cn } from "../../../../utils";
import React from "react";
import { StarterpackCard } from "../card";
export const StarterpackClaimable = React.forwardRef(({ items, isClaimed = false, className, ...props }, ref) => {
    return (_jsxs(Card, { className: cn(className), ...props, ref: ref, children: [_jsx(CardHeader, { className: "py-2.5 px-3", children: _jsxs(CardTitle, { className: "normal-case font-semibold text-xs w-full flex items-center justify-between", children: [_jsx("span", { children: isClaimed ? "Claimed" : "Claimable" }), _jsx("div", { className: "bg-background-300 py-0.5 px-1.5 rounded-full", children: _jsxs("span", { className: "text-foreground-300", children: [items.length, " total"] }) })] }) }), _jsx(CardListContent, { children: items.map((item, i) => (_jsx(StarterpackCard, { item: item, isClaimed: isClaimed }, i))) })] }));
});
StarterpackClaimable.displayName = "StarterPackClaimable";
//# sourceMappingURL=claimable.js.map