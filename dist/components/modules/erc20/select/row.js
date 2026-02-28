import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SelectItem, Thumbnail } from "../../../../index";
import { cn } from "../../../../utils";
export const TokenSelectRow = ({ className, token, currentToken, }) => {
    return (_jsx(SelectItem, { simplified: true, value: token.metadata.address, "data-active": token.metadata.address === currentToken.metadata.address, className: cn("group hover:bg-background-300 hover:text-foreground-100 border-b border-border cursor-pointer data-[active=true]:bg-background-200 data-[active=true]:hover:bg-background-300 data-[active=true]:text-foreground-100 rounded-none", className), children: _jsxs("div", { className: "flex items-center gap-2", children: [token.metadata.image ? (_jsx(Thumbnail, { icon: token.metadata.image, rounded: true, size: "sm", variant: "light", className: "group-hover:bg-background-400" })) : (_jsx("div", { className: "w-5 h-5 bg-gray-200 rounded-full flex-shrink-0" })), _jsx("span", { className: "font-medium text-sm", children: token.metadata.symbol })] }) }));
};
//# sourceMappingURL=row.js.map