import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Thumbnail } from "../../../../index";
import { cn } from "../../../../utils";
import { useMemo, useState } from "react";
import { ActivityCard, } from "../../../../components/modules/activities/card";
export const TokenCard = ({ image, title, amount, value, change, variant, className, ...props }) => {
    const [hover, setHover] = useState(false);
    const Logo = useMemo(() => (_jsx(Thumbnail, { icon: image, size: "lg", variant: hover ? "lighter" : "light", rounded: true })), [image, hover]);
    const style = useMemo(() => {
        if (change?.includes("+")) {
            return {
                backgroundImage: `linear-gradient(to right,transparent,color-mix(in srgb, var(--constructive-100) 3%, transparent))`,
            };
        }
        if (change?.includes("-")) {
            return {
                backgroundImage: `linear-gradient(to right,transparent,color-mix(in srgb, var(--destructive-100) 3%, transparent))`,
            };
        }
        return {};
    }, [change]);
    const Change = useMemo(() => {
        if (change?.includes("+")) {
            return _jsx("p", { className: "text-constructive-100", children: change });
        }
        if (change?.includes("-")) {
            return _jsx("p", { className: "text-destructive-100", children: change });
        }
        return _jsx(_Fragment, {});
    }, [change]);
    return (_jsx(ActivityCard, { Logo: Logo, title: title, subTitle: amount, topic: value, subTopic: Change, variant: variant, className: cn("rounded-none", className), style: style, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props }));
};
export default TokenCard;
//# sourceMappingURL=card.js.map