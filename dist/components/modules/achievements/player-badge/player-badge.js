import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BronzeIcon, DefaultIcon, GoldIcon, SilverIcon, } from "../../../../components/icons";
import { AchievementPlayerAvatar, Thumbnail } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
export const achievementPlayerBadgeVariants = cva("relative flex justify-center items-center h-12 w-12", {
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
        size: {
            xl: "",
            "2xl": "",
            "3xl": "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "xl",
    },
});
export const AchievementPlayerBadge = ({ username, icon, variant, rank, size, className, children, ...props }) => {
    const BadgeIcon = useMemo(() => {
        switch (rank) {
            case "gold":
                return (_jsx(GoldIcon, { className: "absolute text-primary", size: size ?? "xl" }));
            case "silver":
                return (_jsx(SilverIcon, { className: "absolute text-primary", size: size ?? "xl" }));
            case "bronze":
                return (_jsx(BronzeIcon, { className: "absolute text-primary", size: size ?? "xl" }));
            case "default":
            default:
                return (_jsx(DefaultIcon, { className: "absolute text-primary", size: size ?? "xl" }));
        }
    }, [rank, size]);
    const ThumbnailIcon = useMemo(() => {
        if (icon)
            return icon;
        return (_jsx(AchievementPlayerAvatar, { username: username ?? "", className: "h-full w-full" }));
    }, [icon, username]);
    return (_jsxs("div", { className: cn(achievementPlayerBadgeVariants({ variant, rank }), className), ...props, children: [_jsx(Thumbnail, { icon: ThumbnailIcon, variant: variant, size: size === "3xl" ? "xl" : size === "2xl" ? "lg" : "md", className: "rounded-full", centered: true, rounded: true }), BadgeIcon, children] }));
};
export default AchievementPlayerBadge;
//# sourceMappingURL=player-badge.js.map