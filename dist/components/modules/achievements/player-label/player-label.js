import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CopyAddress } from "../../../../components/copy-address";
import { BronzeTagIcon, GoldTagIcon, SilverTagIcon } from "../../../../components/icons";
import { AchievementPlayerBadge } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
const achievementPlayerLabelVariants = cva("flex items-center gap-x-4", {
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
export const AchievementPlayerLabel = ({ username, address, icon, variant, rank, className, ...props }) => {
    const TagIcon = useMemo(() => {
        switch (rank) {
            case "gold":
                return _jsx(GoldTagIcon, { size: "sm" });
            case "silver":
                return _jsx(SilverTagIcon, { size: "sm" });
            case "bronze":
                return _jsx(BronzeTagIcon, { size: "sm" });
            case "default":
            default:
                return null;
        }
    }, [rank]);
    return (_jsxs("div", { className: cn(achievementPlayerLabelVariants({ variant }), className), ...props, children: [_jsx(AchievementPlayerBadge, { icon: icon, variant: variant, rank: rank, username: username }), _jsxs("div", { className: "flex flex-col gap-y-0.5", children: [_jsxs("div", { className: "flex items-center gap-x-2", children: [_jsx("p", { className: "text-lg/[22px] font-semibold text-foreground-100", children: username }), TagIcon] }), _jsx(CopyAddress, { address: address, size: "xs" })] })] }));
};
export default AchievementPlayerLabel;
//# sourceMappingURL=player-label.js.map