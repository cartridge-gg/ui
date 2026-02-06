import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPlayerAvatar } from "../../../../index";
import { cn } from "../../../../utils";
export const LeaderboardUsername = ({ username, icon, highlight, className, }) => {
    return (_jsxs("div", { className: cn("flex gap-1", highlight ? "text-primary" : "text-foreground-100", className), children: [_jsx("div", { className: "h-5 w-5 flex items-center justify-center", children: icon ? (_jsx("div", { className: cn("h-4 w-4 fa-solid", icon) })) : (_jsx(AchievementPlayerAvatar, { username: username, size: "sm" })) }), _jsx("p", { className: "text-sm truncate max-w-28 lg:max-w-none lg:truncate-none", children: username })] }));
};
export default LeaderboardUsername;
//# sourceMappingURL=username.js.map