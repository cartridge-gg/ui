import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton, Thumbnail } from "../../../index";
export const ERC20Header = ({ token }) => {
    return (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Thumbnail, { icon: token.metadata.image, size: "lg", rounded: true }), _jsxs("div", { className: "flex flex-col gap-0.5", children: [token.balance === undefined ? (_jsx(Skeleton, { className: "h-[20px] w-[120px] rounded" })) : (_jsx("p", { className: "text-semibold text-lg/[22px]", children: `${token.balance.amount.toLocaleString(undefined, { maximumFractionDigits: 5 })} ${token.metadata.symbol}` })), !!token.balance.value && (_jsx("p", { className: "text-foreground-300 text-xs", children: `$${token.balance.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}` }))] })] }));
};
//# sourceMappingURL=header.js.map