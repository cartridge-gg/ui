import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BronzeIcon, DefaultIcon, GoldIcon, SilverIcon, } from "../../../../components/icons";
import { EmptyPfpIcon } from "../../../../components/icons/badge/empty";
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
            empty: "",
            default: "",
            gold: "",
            silver: "",
            bronze: "",
        },
        size: {
            "2xs": "",
            xs: "",
            sm: "",
            default: "",
            lg: "",
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
export const AchievementPlayerBadge = ({ username, icon, variant, rank, size, className, badgeClassName, children, ...props }) => {
    const BadgeIcon = useMemo(() => {
        switch (rank) {
            case "empty":
                return (_jsx(EmptyPfpIcon, { className: cn("absolute text-primary", badgeClassName), size: size ?? "xl" }));
            case "gold":
                return (_jsx(GoldIcon, { className: cn("absolute text-primary", badgeClassName), size: size ?? "xl" }));
            case "silver":
                return (_jsx(SilverIcon, { className: cn("absolute text-primary", badgeClassName), size: size ?? "xl" }));
            case "bronze":
                return (_jsx(BronzeIcon, { className: cn("absolute text-primary", badgeClassName), size: size ?? "xl" }));
            case "default":
            default:
                return (_jsx(DefaultIcon, { className: cn("absolute text-primary", badgeClassName), size: size ?? "xl" }));
        }
    }, [rank, size, badgeClassName]);
    const ThumbnailIcon = useMemo(() => {
        if (icon)
            return icon;
        return (_jsx(AchievementPlayerAvatar, { username: username ?? "", className: "h-full w-full" }));
    }, [icon, username]);
    return (_jsxs("div", { className: cn(achievementPlayerBadgeVariants({ variant, rank }), className), ...props, children: [_jsx(Thumbnail, { icon: ThumbnailIcon, variant: variant, size: size === "3xl"
                    ? "xl"
                    : size === "2xl"
                        ? "lg"
                        : size === "lg"
                            ? "sm"
                            : "md", className: "rounded-full", centered: true, rounded: true }), BadgeIcon, children] }));
};
export default AchievementPlayerBadge;
//# sourceMappingURL=player-badge.js.map