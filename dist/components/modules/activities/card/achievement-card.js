import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { cn } from "../../../../utils";
import { CollectibleTag, SparklesIcon, Thumbnail, TrophyIcon } from "../../../../index";
import ActivityCardRow from "./card-row";
export const ActivityAchievementCard = ({ topic, points, image, themeColor, logo, certified, website, timestamp, error, loading, variant, className, ...props }) => {
    const Icon = useMemo(() => (_jsx(TrophyIcon, { className: "w-full h-full text-foreground-100 flex-none", variant: "solid" })), []);
    const Topic = useMemo(() => {
        return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-0 text-inherit", style: { color: !loading && !error ? themeColor : undefined }, children: [_jsx(Thumbnail, { icon: image, variant: "ghost", size: "xs", className: "flex-none text-inherit", rounded: true }), _jsx("p", { className: "truncate shrink", children: topic })] }));
    }, [image, topic]);
    const Points = useMemo(() => {
        return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-0 text-inherit", children: [_jsx(SparklesIcon, { variant: "solid", size: "xs", className: "flex-none" }), _jsx("p", { children: points })] }));
    }, [points]);
    // const Social = useMemo(() => {
    //   return <ActivitySocialWebsite website={website} certified={certified} />;
    // }, [website, certified]);
    return (_jsx(ActivityCardRow, { icon: Icon, logo: logo, items: [Topic, Points], timestamp: timestamp, error: error, loading: loading, variant: variant, className: cn("hover:bg-background-200 cursor-default", className), ...props }));
};
export default ActivityAchievementCard;
//# sourceMappingURL=achievement-card.js.map