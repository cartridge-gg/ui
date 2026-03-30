import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { AchievementPlayerAvatar, ActivityPreposition, ArrowIcon, CoinsIcon, CollectibleTag, FireIcon, PaperPlaneIcon, SeedlingIcon, Thumbnail, TransferIcon, WalletIcon, } from "../../../../index";
import ActivityCardRow from "./card-row";
import { formatAddress } from "../../../../utils";
export const ActivityTokenCard = ({ address, username, amount, value, image, symbol, swappedAmount, swappedImage, swappedSymbol, logo, action: actionProp, timestamp, error, loading, variant, className, ...props }) => {
    const [_hover, setHover] = useState(false);
    const action = useMemo(() => actionProp === "receive" && BigInt(address) == 0n
        ? "mint"
        : actionProp === "send" && BigInt(address) == 0n
            ? "burn"
            : actionProp, [actionProp, address]);
    const Icon = useMemo(() => {
        switch (action) {
            case "send":
                return _jsx(PaperPlaneIcon, { variant: "solid", className: "w-full h-full" });
            case "receive":
                return _jsx(ArrowIcon, { variant: "down", className: "w-full h-full" });
            case "mint":
                return _jsx(SeedlingIcon, { variant: "solid", className: "w-full h-full" });
            case "burn":
                return _jsx(FireIcon, { variant: "solid", className: "w-full h-full" });
            case "swap":
                return _jsx(TransferIcon, { className: "w-full h-full" });
            default:
                return undefined;
        }
    }, [action]);
    const TokenImage = useMemo(() => image ? (_jsx(Thumbnail, { icon: image, variant: "ghost", size: "xs", className: "flex-none", rounded: true })) : (_jsx(CoinsIcon, { variant: "solid", size: "xs", className: "flex-none" })), [image]);
    const Token = useMemo(() => {
        return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-0", children: [TokenImage, _jsxs("p", { className: "truncate", children: [amount, " ", symbol?.toUpperCase() || ""] })] }));
    }, [TokenImage, amount, symbol]);
    const SwappedTokenImage = useMemo(() => swappedImage ? (_jsx(Thumbnail, { icon: swappedImage, variant: "ghost", size: "xs", rounded: true })) : (_jsx(CoinsIcon, { variant: "solid", size: "xs", className: "flex-none" })), [swappedImage]);
    const Preposition = useMemo(() => {
        switch (action) {
            case "send":
                return _jsx(ActivityPreposition, { label: "to" });
            case "receive":
                return _jsx(ActivityPreposition, { label: "from" });
            case "mint":
                return _jsx(ActivityPreposition, { label: "minted" });
            case "burn":
                return _jsx(ActivityPreposition, { label: "burned" });
            case "swap":
                return _jsx(ActivityPreposition, { label: "for" });
            default:
                return undefined;
        }
    }, [action]);
    const Subject = useMemo(() => {
        switch (action) {
            case "send":
            case "receive":
                return username ? (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-[60px]", children: [_jsx(AchievementPlayerAvatar, { size: "xs", className: "flex-none", username: username }), _jsx("p", { className: "truncate", children: username })] })) : (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-[60px]", children: [_jsx(WalletIcon, { variant: "solid", size: "xs", className: "flex-none" }), _jsx("p", { className: "truncate", children: formatAddress(address, { size: "xs" }) })] }));
            case "swap":
                return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink", children: [SwappedTokenImage, _jsxs("p", { className: "truncate", children: [swappedAmount, " ", swappedSymbol?.toUpperCase() || ""] })] }));
            default:
                return undefined;
        }
    }, [address, action]);
    return (_jsx(ActivityCardRow, { icon: Icon, logo: logo, items: [Token, Preposition, Subject], timestamp: timestamp, error: error, loading: loading, variant: variant, className: className, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props }));
};
export default ActivityTokenCard;
//# sourceMappingURL=token-card.js.map