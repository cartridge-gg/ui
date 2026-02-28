import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { ActivityPreposition, CollectibleTag, JoystickIcon, Thumbnail, TransactionIcon, } from "../../../../index";
import ActivityCardRow from "./card-row";
export const ActivityGameCard = ({ action, name, themeColor, logo, website, certified, timestamp, error, loading, variant, className, ...props }) => {
    const Icon = useMemo(() => _jsx(JoystickIcon, { className: "w-full h-full", variant: "solid" }), []);
    const Title = useMemo(() => {
        return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1 shrink min-w-0 text-inherit", style: { color: !loading && !error ? themeColor : undefined }, children: [_jsx(TransactionIcon, { size: "2xs", className: "flex-none" }), _jsx("p", { className: "truncate capitalize", children: action.split("_").join(" ").trim() })] }));
    }, [action]);
    const Preposition = useMemo(() => _jsx(ActivityPreposition, { label: "in" }), []);
    const Game = useMemo(() => {
        return (_jsxs(CollectibleTag, { variant: "dark", className: "gap-1", children: [_jsx(Thumbnail, { icon: logo, variant: "ghost", size: "xs", className: "flex-none" }), _jsx("p", { className: "truncate", children: name })] }));
    }, [logo, name]);
    // const Social = useMemo(() => {
    //   return <ActivitySocialWebsite website={website} certified={certified} />;
    // }, [website, certified]);
    return (_jsx(ActivityCardRow, { icon: Icon, logo: undefined, items: [Title, Preposition, Game], timestamp: timestamp, error: error, loading: loading, variant: variant, className: className, ...props }));
};
export default ActivityGameCard;
//# sourceMappingURL=game-card.js.map