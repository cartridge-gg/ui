import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ControllerAccountIcon, ArgentIcon, BraavosIcon, OpenZeppelinIcon, WalletIcon, WalletType, } from "../../../components";
import { formatAddress } from "../../../utils";
import { useCallback } from "react";
export const Preview = ({ address, wallet, onClick, onMouseEnter, onMouseLeave, name, }) => {
    const getIcon = useCallback((wallet) => {
        switch (wallet) {
            case WalletType.Controller:
                return _jsx(ControllerAccountIcon, { className: "h-8 w-8" });
            case WalletType.ArgentX:
                return _jsx(ArgentIcon, { className: "h-8 w-8" });
            case WalletType.Braavos:
                return _jsx(BraavosIcon, { className: "h-8 w-8" });
            case WalletType.OpenZeppelin:
                return _jsx(OpenZeppelinIcon, { className: "h-8 w-8" });
            default:
                return _jsx(WalletIcon, { variant: "solid", className: "h-8 w-8" });
        }
    }, []);
    return (_jsxs("div", { className: "bg-spacer h-16 rounded-md flex items-center gap-x-3 px-2.5 py-3 cursor-pointer w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]", onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, children: [_jsx("div", { className: "h-10 w-10 rounded-full overflow-hidden bg-background flex items-center justify-center", children: getIcon(wallet) }), name ? (_jsxs("div", { className: "flex flex-col items-start gap-y-0.5", children: [_jsx("p", { className: "font-medium text-sm", children: name }), _jsx("p", { className: "font-normal text-xs text-foreground-400", children: formatAddress(address, { size: "xs", padding: true }) })] })) : (_jsx("div", { className: "flex flex-col items-start gap-x-2", children: _jsx("p", { className: "font-medium text-sm", children: formatAddress(address, { size: "sm", padding: true }) }) }))] }));
};
//# sourceMappingURL=preview.js.map