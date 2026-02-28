import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPlayerAvatar, AchievementPlayerBadge, PlusIcon, SeedlingIcon, SparklesIcon, } from "../../../index";
import { cn } from "../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
const accountSearchResultVariants = cva("h-12 px-3 py-1 flex gap-1 items-center select-none cursor-pointer transition-colors duration-150 relative", {
    variants: {
        variant: {
            default: "bg-background-200 hover:bg-background-300 text-foreground-100",
            selected: "bg-background-400 text-foreground-100",
            "create-new": "bg-background-200 hover:bg-background-300 text-foreground-100",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const AccountSearchResultItem = React.forwardRef(({ result, isSelected, className, ...props }, ref) => {
    const selectedVariant = isSelected
        ? "selected"
        : result.type === "create-new"
            ? "create-new"
            : "default";
    if (result.type === "create-new") {
        return (_jsxs("div", { ref: ref, className: cn("h-12 px-3 py-1 flex items-center gap-1.5 select-none cursor-pointer transition-colors duration-150", isSelected
                ? "bg-background-400"
                : "bg-background-200 hover:bg-background-300", className), ...props, children: [_jsx(AchievementPlayerBadge, { rank: "empty", icon: _jsx(PlusIcon, { variant: "line", className: "text-foreground-100" }), variant: "ghost", size: "lg", className: "!w-8 !h-8", badgeClassName: "text-foreground-400" }), _jsx("p", { className: "flex-1 justify-center text-foreground-100 text-sm font-normal leading-tight", children: result.username }), _jsx("div", { className: "flex items-start gap-2.5 p-2", children: _jsxs("div", { className: "p-1 bg-background-300 rounded inline-flex justify-center items-center gap-0.5", children: [_jsx("div", { className: "flex justify-start items-center gap-0.5", children: _jsx(SeedlingIcon, { variant: "solid", className: "text-primary", size: "xs" }) }), _jsx("div", { className: "px-0.5 flex justify-center items-center gap-2.5", children: _jsx("p", { className: "text-center justify-center text-primary text-xs font-normal leading-none", children: "Create New" }) })] }) })] }));
    }
    return (_jsxs("div", { ref: ref, className: cn(accountSearchResultVariants({ variant: selectedVariant }), className), ...props, children: [_jsx(AchievementPlayerBadge, { icon: _jsx(AchievementPlayerAvatar, { username: result.username, className: "!h-5 !w-5" }), variant: "ghost", size: "lg", className: "!w-8 !h-8" }), _jsxs("div", { className: "flex flex-row items-center justify-between gap-1 flex-1", children: [_jsx("p", { className: "text-sm font-normal px-0.5 truncate", children: result.username }), result.points ? (_jsx("div", { className: "flex items-start gap-2.5 p-2", children: _jsxs("div", { className: "flex items-center justify-center gap-0.5 p-1 bg-background-300 rounded text-foreground-100", children: [_jsx(SparklesIcon, { variant: "solid", size: "xs", className: "text-foreground-100" }), _jsx("div", { className: "flex items-center gap-1", children: _jsx("p", { className: "text-xs font-medium text-foreground-100", children: result.points?.toLocaleString() || 0 }) })] }) })) : null] })] }));
});
AccountSearchResultItem.displayName = "AccountSearchResultItem";
export default AccountSearchResultItem;
//# sourceMappingURL=account-search-result.js.map