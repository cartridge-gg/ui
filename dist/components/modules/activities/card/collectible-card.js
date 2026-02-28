import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { ArrowIcon, ThumbnailCollectible, PaperPlaneIcon, SeedlingIcon, FireIcon, TagIcon, MoneyIcon, ActivityPreposition, AchievementPlayerAvatar, WalletIcon, Thumbnail, CollectibleTag, } from "../../../../index";
import ActivityCardRow from "./card-row";
import { formatAddress } from "../../../../utils";
export const ActivityCollectibleCard = ({ name, address, username, collection, image, logo, orderAmount, orderImage, orderSymbol, action: actionProp, timestamp, error, loading, variant, className, ...props }) => {
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
            case "list":
                return _jsx(TagIcon, { variant: "solid", className: "w-full h-full" });
            case "sell":
                return _jsx(MoneyIcon, { variant: "solid", className: "w-full h-full" });
            default:
                return undefined;
        }
    }, [action]);
    const TokenImage = useMemo(() => (_jsx(ThumbnailCollectible, { image: image ?? "", variant: "ghost", size: "sm", className: "flex-none" })), [image]);
    const Token = useMemo(() => {
        return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-0 text-inherit", children: [TokenImage, _jsx("p", { className: "truncate shrink", children: name })] }));
    }, [TokenImage, name]);
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
            case "list":
            case "sell":
                return _jsx(ActivityPreposition, { label: "for" });
            default:
                return undefined;
        }
    }, [action]);
    const OrderTokenImage = useMemo(() => orderImage ? (_jsx(Thumbnail, { icon: orderImage, variant: "ghost", size: "xs", className: "flex-none", rounded: true })) : undefined, [orderImage]);
    const Subject = useMemo(() => {
        switch (action) {
            case "send":
            case "receive":
                return username ? (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-0", children: [_jsx(AchievementPlayerAvatar, { size: "xs", className: "flex-none", username: username }), _jsx("p", { className: "truncate", children: username })] })) : (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-0", children: [_jsx(WalletIcon, { variant: "solid", size: "xs" }), _jsx("p", { className: "truncate", children: formatAddress(address, { size: "xs" }) })] }));
            case "list":
            case "sell":
                return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink", children: [OrderTokenImage, _jsx("p", { children: orderAmount }), OrderTokenImage ? undefined : (_jsx("p", { children: orderSymbol?.toUpperCase() || "TOKEN" }))] }));
            default:
                return undefined;
        }
    }, [address, action]);
    return (_jsx(ActivityCardRow, { icon: Icon, logo: logo, items: [Token, Preposition, Subject], timestamp: timestamp, error: error, loading: loading, variant: variant, className: className, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props }));
};
export default ActivityCollectibleCard;
//# sourceMappingURL=collectible-card.js.map