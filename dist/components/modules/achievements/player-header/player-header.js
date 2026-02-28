import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { AchievementPlayerLabel } from "../player-label";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
import { FollowerTag } from "../../../../index";
const achievementPlayerHeaderVariants = cva("flex flex-col gap-y-4", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "",
            light: "",
            lighter: "",
            lightest: "",
            ghost: "",
        },
        rank: {
            default: "",
            gold: "",
            silver: "",
            bronze: "",
        },
    },
    defaultVariants: {
        variant: "default",
        rank: "default",
    },
});
export const AchievementPlayerHeader = ({ username, address, points, icon, follower, followerCount, followingCount, followers, compacted, variant, rank, className, ...props }) => {
    return (_jsxs("div", { className: cn(achievementPlayerHeaderVariants({ variant, rank }), className), ...props, children: [_jsx(AchievementPlayerLabel, { username: username, address: address, icon: icon, variant: "default", rank: rank }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "h-6 flex items-center gap-x-2", children: [_jsxs("p", { className: "text-xs text-foreground-300 flex items-center gap-x-1", children: [_jsx("strong", { className: "font-medium text-foreground-100", children: followerCount?.toLocaleString() || 0 }), "Followers"] }), _jsxs("p", { className: "text-xs text-foreground-300 flex items-center gap-x-1", children: [_jsx("strong", { className: "font-medium text-foreground-100", children: followingCount?.toLocaleString() || 0 }), "Following"] }), _jsxs("p", { className: "text-xs text-foreground-300 flex items-center gap-x-1", children: [_jsx("strong", { className: "font-medium text-foreground-100", children: points.toLocaleString() }), "Points"] }), follower && _jsx(FollowerTag, { variant: variant })] }), !compacted && _jsx(FollowerDescription, { followers: followers || [] })] })] }));
};
const FollowerDescription = ({ followers }) => {
    const description = useMemo(() => {
        const names = followers.slice(0, 2);
        if (followers.length > 3) {
            return `Followed by ${names.join(", ")} and ${followers.length - 2} others you follow`;
        }
        else if (followers.length === 3) {
            return `Followed by ${names.join(", ")} and ${followers.length - 2} other you follow`;
        }
        else if (followers.length > 0) {
            return `Followed by ${names.join(" and ")}`;
        }
        else {
            return `Followed by no one you follow`;
        }
    }, [followers]);
    return (_jsx("p", { className: "h-6 flex items-center text-xs text-foreground-300", children: description }));
};
export default AchievementPlayerHeader;
//# sourceMappingURL=player-header.js.map