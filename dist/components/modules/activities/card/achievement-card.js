import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SparklesIcon, Thumbnail, ThumbnailsSubIcon, TrophyIcon, } from "../../../../index";
import { cn } from "../../../../utils";
import { useMemo } from "react";
import ActivityCard, { ActivitySocialWebsite, } from "./card";
export const ActivityAchievementCard = ({ title, topic, points, website, image, error, loading, certified, variant, className, ...props }) => {
    const Icon = useMemo(() => (_jsx(TrophyIcon, { className: "w-full h-full text-foreground-100", variant: "solid" })), []);
    const Logo = useMemo(() => (_jsx(Thumbnail, { icon: image, subIcon: _jsx(ThumbnailsSubIcon, { variant: "light", Icon: Icon }), error: error, loading: loading, size: "lg", variant: "light", className: cn(!error && !loading && "text-primary") })), [image, error, loading, Icon]);
    const Social = useMemo(() => {
        return _jsx(ActivitySocialWebsite, { website: website, certified: certified });
    }, [website, certified]);
    const Points = useMemo(() => {
        return (_jsxs("div", { className: "flex items-center gap-1 text-inherit", children: [_jsx(SparklesIcon, { variant: "solid", size: "xs" }), _jsx("span", { children: points })] }));
    }, [points]);
    return (_jsx(ActivityCard, { Logo: Logo, title: title, subTitle: Social, topic: topic, subTopic: Points, error: error, loading: loading, variant: variant, className: cn("hover:bg-background-200 cursor-default", className), ...props }));
};
export default ActivityAchievementCard;
//# sourceMappingURL=achievement-card.js.map