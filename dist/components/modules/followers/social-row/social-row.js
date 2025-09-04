import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
import { AchievementPlayerAvatar, FollowerAction, Separator, SparklesIcon, } from "../../../../index";
export const followerSocialRowVariants = cva("select-none flex justify-between items-center gap-4 h-11 pl-3 pr-1.5 py-2.5", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "bg-background-200",
            light: "",
            lighter: "",
            lightest: "",
            ghost: "bg-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const FollowerSocialRow = ({ username, following, unfollowable, points, loading, disabled, onSocialClick, variant, className, ...props }) => {
    return (_jsxs("div", { className: cn(followerSocialRowVariants({ variant }), className), ...props, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex items-center gap-0.5", children: [_jsx(AchievementPlayerAvatar, { username: username, size: "sm" }), _jsx("p", { className: "text-sm font-medium px-0.5", children: username })] }), _jsx(Separator, { orientation: "vertical", className: cn("w-px h-2 bg-background-400", !points && "hidden") }), _jsxs("div", { className: cn("flex items-center gap-1 text-foreground-300", !points && "hidden"), children: [_jsx(SparklesIcon, { variant: "line", size: "sm" }), _jsx("p", { className: "text-sm font-medium", children: points })] })] }), _jsx(FollowerAction, { following: following, unfollowable: unfollowable, onClick: onSocialClick, variant: variant, loading: !!loading, disabled: !!disabled })] }));
};
export default FollowerSocialRow;
//# sourceMappingURL=social-row.js.map