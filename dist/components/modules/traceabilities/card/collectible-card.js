import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowIcon, MoneyIcon, PaperPlaneIcon, SeedlingIcon, TagIcon, Thumbnail, ThumbnailCollectible, } from "../../../../index";
import { useMemo, useState } from "react";
import TraceabilityCard from "./card";
export const TraceabilityCollectibleCard = ({ username, timestamp, category, collectibleImage, collectibleName, currencyImage, amount, quantity, variant, className, ...props }) => {
    const [hover, setHover] = useState(false);
    const CollectibleIcon = useMemo(() => (_jsx(ThumbnailCollectible, { image: collectibleImage, size: "xxs", className: "border-0 p-0" })), [collectibleImage, hover]);
    const CurrencyIcon = useMemo(() => {
        if (!currencyImage)
            return null;
        return (_jsx(Thumbnail, { icon: currencyImage, size: "xxs", rounded: true, className: "border-0 p-0" }));
    }, [currencyImage, hover]);
    return (_jsx(TraceabilityCard, { username: username, timestamp: timestamp, Icon: _jsx(CategoryIcon, { category: category }), variant: variant, className: className, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props, children: _jsxs(_Fragment, { children: [_jsxs("div", { className: "h-6 flex items-center gap-0.5 bg-translucent-dark-100 p-1 rounded overflow-hidden", children: [CollectibleIcon, _jsx("p", { className: "text-xs text-foreground-100 px-0.5 truncate overflow-hidden", children: quantity ? `${quantity} ${collectibleName}` : collectibleName })] }), amount !== undefined && (_jsxs("div", { className: "flex items-center gap-0.5 bg-translucent-dark-100 p-1 rounded", children: [CurrencyIcon, _jsx("div", { className: "text-xs text-foreground-100 px-0.5 w-full", children: amount.toLocaleString() })] }))] }) }));
};
const CategoryIcon = ({ category, }) => {
    switch (category) {
        case "mint":
            return _jsx(SeedlingIcon, { variant: "solid", size: "xs" });
        case "receive":
            return _jsx(ArrowIcon, { variant: "down", size: "xs" });
        case "send":
            return _jsx(PaperPlaneIcon, { variant: "solid", size: "xs" });
        case "sale":
            return _jsx(MoneyIcon, { variant: "solid", size: "xs" });
        case "list":
            return _jsx(TagIcon, { variant: "solid", size: "xs" });
    }
};
export default TraceabilityCollectibleCard;
//# sourceMappingURL=collectible-card.js.map