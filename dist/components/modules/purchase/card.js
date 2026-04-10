import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../../utils";
export const PurchaseCard = ({ text, icon, network, networkIcon, className, onClick, ...props }) => {
    return (_jsxs("div", { className: cn("group flex flex-row p-2.5 gap-2 justify-between", "w-full h-[40px]", "rounded", "bg-background-200 hover:bg-background-300", "text-foreground-100 text-normal uppercase tracking-[2.1px]", "cursor-pointer transition-colors ease-in-out", className), onClick: onClick, ...props, children: [_jsxs("div", { className: "flex items-center gap-2", children: [React.cloneElement(icon, {
                        size: "sm",
                    }), _jsx("span", { className: "font-ld text-sm", children: text })] }), network && (_jsxs("div", { className: "flex items-center gap-1 text-foreground-200 text-sm border border-background-300 group-hover:border-background-400 rounded pl-1 pr-2", children: [React.cloneElement(networkIcon, { size: "xs" }), _jsx("span", { className: "font-ld text-xs", children: network })] }))] }));
};
//# sourceMappingURL=card.js.map