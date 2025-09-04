import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ControllerAccountIcon, ArgentIcon, BraavosIcon, OpenZeppelinIcon, WalletIcon, WalletType, } from "../../../components";
import { cn } from "../../../utils";
import { useCallback } from "react";
export const Selection = ({ label, wallet }) => {
    const getIcon = useCallback((wallet) => {
        switch (wallet) {
            case WalletType.Controller:
                return _jsx(ControllerAccountIcon, { className: "h-4 w-4" });
            case WalletType.ArgentX:
                return _jsx(ArgentIcon, { className: "h-4 w-4" });
            case WalletType.Braavos:
                return _jsx(BraavosIcon, { className: "h-4 w-4" });
            case WalletType.OpenZeppelin:
                return _jsx(OpenZeppelinIcon, { className: "h-4 w-4" });
            default:
                return _jsx(WalletIcon, { variant: "solid", className: "h-4 w-4" });
        }
    }, []);
    return (_jsxs("div", { className: cn("flex items-center gap-x-1 select-none", !label && "hidden"), children: [_jsx("div", { className: "w-4 h-4 flex items-center justify-center", children: getIcon(wallet) }), _jsx("p", { className: "text-xs font-medium", children: label })] }));
};
//# sourceMappingURL=selection.js.map