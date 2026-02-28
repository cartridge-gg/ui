import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Thumbnail } from "../../../index";
import { cn } from "../../../utils";
export const PurchaseCard = ({ text, icon, network, networkIcon, className, ...props }) => {
    return (_jsxs("div", { className: cn("group flex flex-row gap-2 bg-background-200 hover:bg-background-300 rounded-lg p-3 justify-between cursor-pointer", className), ...props, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Thumbnail, { icon: icon, size: "md", className: "bg-background-300 group-hover:bg-background-400", rounded: true }), _jsx("span", { children: text })] }), network && (_jsxs("div", { className: "flex items-center gap-1 text-foreground-200 text-sm border border-background-300 group-hover:border-background-400 rounded pl-1 pr-2", children: [_jsx(Thumbnail, { icon: networkIcon, size: "xs", className: "text-foreground-200 p-0 group-hover:bg-background-300", rounded: true }), network] }))] }));
};
//# sourceMappingURL=card.js.map