import { jsx as _jsx } from "react/jsx-runtime";
import { ArgentIcon, BraavosIcon, ControllerIcon, OpenZeppelinIcon, WalletIcon, } from "../../../../index";
import { useMemo } from "react";
import { Thumbnail } from "../thumbnail";
export const ThumbnailWallet = ({ brand, variant, size, className, }) => {
    const Icon = useMemo(() => {
        switch (brand) {
            case "argentx":
                return _jsx(ArgentIcon, { className: "w-full h-full" });
            case "braavos":
                return _jsx(BraavosIcon, { className: "w-full h-full" });
            case "openzeppelin":
                return _jsx(OpenZeppelinIcon, { className: "w-full h-full" });
            case "controller":
                return _jsx(ControllerIcon, { className: "w-full h-full" });
            default:
                return _jsx(WalletIcon, { variant: "solid", className: "w-full h-full" });
        }
    }, [brand]);
    return (_jsx(Thumbnail, { icon: Icon, variant: variant, size: size, className: className, rounded: true, centered: true }));
};
export default ThumbnailWallet;
//# sourceMappingURL=wallet.js.map