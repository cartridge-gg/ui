import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EmptyStateAchievementIcon, EmptyStateActivityIcon, EmptyStateGuildIcon, EmptyStateIcon, EmptyStateInventoryIcon, EmptyStateLeaderboardIcon, } from "../../index";
import { cn } from "../../utils";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { EmptyStateDiscoverIcon } from "../icons/utility/empty-state-discover";
import { EmptyStateClaimIcon } from "../icons/utility/empty-state-claim";
export const emptyVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
});
export function Empty({ title = "Something went wrong", icon, variant, className, ...props }) {
    const Icon = useMemo(() => {
        switch (icon) {
            case "activity":
                return _jsx(EmptyStateActivityIcon, { className: "h-[135px] w-[135px]" });
            case "achievement":
                return _jsx(EmptyStateAchievementIcon, { className: "h-[135px] w-[135px]" });
            case "guild":
                return _jsx(EmptyStateGuildIcon, { className: "h-[135px] w-[135px]" });
            case "inventory":
                return _jsx(EmptyStateInventoryIcon, { className: "h-[135px] w-[135px]" });
            case "discover":
                return _jsx(EmptyStateDiscoverIcon, { className: "h-[135px] w-[135px]" });
            case "leaderboard":
                return _jsx(EmptyStateLeaderboardIcon, { className: "h-[135px] w-[135px]" });
            case "claim":
                return _jsx(EmptyStateClaimIcon, { className: "h-[135px] w-[135px]" });
            default:
                return _jsx(EmptyStateIcon, { className: "h-[135px] w-[135px]" });
        }
    }, [icon]);
    return (_jsx("div", { className: cn(emptyVariants({ variant }), className), ...props, children: _jsxs("div", { className: "h-full flex flex-col gap-2 justify-center items-center select-none rounded px-16 py-4", style: {
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23242824' stroke-width='2' stroke-dasharray='3%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            }, children: [Icon, _jsx("p", { className: "text-sm text-background-500 text-center px-4", children: title })] }) }));
}
//# sourceMappingURL=empty.js.map