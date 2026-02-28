import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle, ExternalIcon, } from "../../../index";
import { formatAddress, StarkscanUrl } from "../../../utils";
export const ERC20Detail = ({ token, isPublicChain = false, chainId, }) => {
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "font-semibold text-xs", children: "Details" }) }), _jsxs(CardContent, { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-foreground-300 font-normal text-sm", children: "Contract Address" }), isPublicChain && chainId ? (_jsxs("a", { href: `${StarkscanUrl(chainId).contract(token.metadata.address)} `, className: "flex items-center gap-1 text-sm", target: "_blank", children: [_jsx("p", { className: "font-medium", children: formatAddress(token.metadata.address, {
                                    size: "sm",
                                    first: 4,
                                    last: 4,
                                }) }), _jsx(ExternalIcon, { size: "sm" })] })) : (_jsx("p", { children: formatAddress(token.metadata.address, { first: 4, last: 4 }) }))] }), _jsxs(CardContent, { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-foreground-300 font-normal text-sm", children: "Token Standard" }), _jsx("p", { className: "font-medium text-sm text-foreground-100", children: "ERC-20" })] })] }));
};
//# sourceMappingURL=detail.js.map