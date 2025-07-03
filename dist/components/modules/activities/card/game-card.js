import { jsx as _jsx } from "react/jsx-runtime";
import { JoystickIcon, Thumbnail, ThumbnailsSubIcon } from "../../../../index";
import { useMemo, useState } from "react";
import ActivityCard, { ActivitySocialWebsite, } from "./card";
export const ActivityGameCard = ({ title, website, image, error, loading, certified, variant, className, ...props }) => {
    const [hover, setHover] = useState(false);
    const Icon = useMemo(() => _jsx(JoystickIcon, { className: "w-full h-full", variant: "solid" }), []);
    const Logo = useMemo(() => (_jsx(Thumbnail, { icon: image, subIcon: _jsx(ThumbnailsSubIcon, { variant: hover ? "lighter" : "light", Icon: Icon }), error: error, loading: loading, size: "lg", variant: hover ? "lighter" : "light" })), [image, error, loading, hover, Icon]);
    const Social = useMemo(() => {
        return _jsx(ActivitySocialWebsite, { website: website, certified: certified });
    }, [website, certified]);
    const formattedTitle = useMemo(() => {
        return title.replace("_", " ").trim();
    }, [title]);
    return (_jsx(ActivityCard, { Logo: Logo, title: formattedTitle, subTitle: Social, error: error, loading: loading, variant: variant, className: className, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...props }));
};
export default ActivityGameCard;
//# sourceMappingURL=game-card.js.map