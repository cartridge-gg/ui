import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowIcon, PaperPlaneIcon, SparklesIcon, ThumbnailCollectible, ThumbnailsSubIcon, } from "../../../../index";
import { useMemo, useState } from "react";
import ActivityCard from "./card";
import { formatAddress } from "../../../../utils";
import { getChecksumAddress } from "starknet";
export const ActivityCollectibleCard = ({ name, address, collection, image, action, error, loading, variant, className, ...props }) => {
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
                return loading ? "Sending" : "Sent";
            case "receive":
                return loading ? "Receiving" : "Received";
            default:
                return loading ? "Minting" : "Minted";
        }
    }, [loading, action]);
    const Logo = useMemo(() => (_jsx(ThumbnailCollectible, { image: image, subIcon: _jsx(ThumbnailsSubIcon, { variant: hover ? "lighter" : "light", Icon: Icon }), error: error, loading: loading, variant: hover ? "lighter" : "light", size: "lg" })), [image, error, loading, hover, Icon]);
    const Address = useMemo(() => {
        switch (action) {
            case "send":
                return (_jsx("p", { children: `To ${formatAddress(getChecksumAddress(address), {
                        size: "xs",
                    })}` }));
            default:
                return (_jsx("p", { children: `From ${formatAddress(getChecksumAddress(address), {
                        size: "xs",
                    })}` }));
        }
    }, [address, action]);
    const Collection = useMemo(() => {
        return _jsx("p", { children: collection });
    }, [collection]);
    return (_jsx(ActivityCard, { Logo: Logo, title: title, subTitle: Address, topic: name, subTopic: Collection, error: error, loading: loading, variant: variant, className: className, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props }));
};
export default ActivityCollectibleCard;
//# sourceMappingURL=collectible-card.js.map