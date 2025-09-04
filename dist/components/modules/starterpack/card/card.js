import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { GiftIcon, CheckIcon } from "../../../../components/icons";
import { cn } from "../../../../utils";
import { CardListItem } from "../../../../components/primitives";
export const StarterpackCard = React.forwardRef(({ item, isClaimed = false, className, ...props }, ref) => {
    return (_jsx(CardListItem, { ref: ref, ...props, className: "flex flex-row items-center py-2 px-3 bg-background-200", children: _jsxs("div", { className: cn("flex flex-row items-center gap-3 text-foreground-100", isClaimed ? "text-foreground-400" : "text-foreground-100", className), children: [isClaimed ? (_jsx(CheckIcon, { className: "bg-background-300 rounded-full p-0.5" })) : (_jsx(GiftIcon, { variant: "solid", className: "bg-background-300 rounded-full p-0.5" })), _jsx("p", { className: "font-medium text-sm", children: item })] }) }));
});
//# sourceMappingURL=card.js.map