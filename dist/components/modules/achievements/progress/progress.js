import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProgressBar, SparklesIcon, TrophyIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const achievementProgressVariants = cva("p-3 flex items-center gap-x-3", {
    variants: {
        variant: {
            darkest: "bg-background-100",
            darker: "bg-background-100",
            dark: "bg-background-100",
            default: "bg-background-200",
            light: "bg-background-200",
            lighter: "bg-background-200",
            lightest: "bg-background-200",
            ghost: "bg-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function AchievementProgress({ count, total, points, completed, variant, className, color, }) {
    return (_jsxs("div", { className: cn(achievementProgressVariants({ variant }), className), children: [_jsxs("div", { className: "flex gap-x-1", children: [_jsx(TrophyIcon, { variant: "solid", size: "xs", className: "text-foreground-300" }), _jsxs("p", { className: "text-foreground-300 text-xs font-medium", children: [count.toLocaleString(), " of ", total.toLocaleString()] })] }), _jsx(ProgressBar, { count: count, total: total, completed: !!completed, className: className, color: color }), _jsxs("div", { className: "flex gap-x-1", children: [_jsx(SparklesIcon, { variant: "solid", size: "xs", className: "text-foreground-300" }), _jsx("p", { className: "text-foreground-300 text-xs font-medium", children: points.toLocaleString() })] })] }));
}
export default AchievementProgress;
//# sourceMappingURL=progress.js.map