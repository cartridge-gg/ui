import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowIcon, PaperPlaneIcon, SparklesIcon, ThumbnailCollectible, ThumbnailsSubIcon, } from "../../../../index";
import { useMemo, useState } from "react";
import TraceabilityCard from "./card";
export const TraceabilityCollectibleCard = ({ from, to, amount, image, action, error, loading, variant, className, ...props }) => {
    const [hover, setHover] = useState(false);
    const Icon = useMemo(() => {
        switch (action) {
            case "send":
                return _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" });
            case "receive":
                return _jsx(ArrowIcon, { variant: "down", className: "w-full h-full" });
            default:
                return _jsx(SparklesIcon, { className: "w-full h-full", variant: "solid" });
        }
    }, [action]);
    const title = useMemo(() => {
        switch (action) {
            case "send":
            case "receive":
                return loading ? "Transfering" : "Transfer";
            default:
                return loading ? "Minting" : "Mint";
        }
    }, [loading, action]);
    const Logo = useMemo(() => (_jsx(ThumbnailCollectible, { image: image, subIcon: _jsx(ThumbnailsSubIcon, { variant: hover ? "lighter" : "light", Icon: Icon }), error: error, loading: loading, variant: hover ? "lighter" : "light", size: "lg" })), [image, error, loading, hover, Icon]);
    const { fromAddress, toAddress } = useMemo(() => {
        const fromAddress = `From: ${from}`;
        const toAddress = `To: ${to}`;
        return { fromAddress, toAddress };
    }, [from, to]);
    return (_jsx(TraceabilityCard, { Logo: Logo, title: title, count: amount, from: fromAddress, to: toAddress, error: error, loading: loading, variant: variant, className: className, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props }));
};
export default TraceabilityCollectibleCard;
//# sourceMappingURL=collectible-card.js.map