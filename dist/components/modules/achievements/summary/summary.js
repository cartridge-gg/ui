import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArcadeGameHeader, AchievementProgress, Card, CardContent, } from "../../../../index";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
const achievementSummaryVariants = cva("border border-transparent", {
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
    },
    defaultVariants: {
        variant: "default",
    },
});
export const AchievementSummary = ({ achievements, metadata, socials, active, className, color, variant, }) => {
    const { points, count } = useMemo(() => {
        let points = 0;
        let count = 0;
        achievements.forEach((a) => {
            if (a.content.tasks?.every((t) => t.count >= t.total)) {
                points += a.content.points;
                count++;
            }
        });
        return { points, count };
    }, [achievements]);
    return (_jsxs(Card, { className: achievementSummaryVariants({ variant }), children: [_jsx(ArcadeGameHeader, { achievements: achievements, metadata: metadata, socials: socials, variant: variant, active: active, className: className, color: color }), _jsx(CardContent, { className: "p-0", children: _jsx(AchievementProgress, { count: count, total: achievements.length, points: points, variant: variant, completed: true, className: className, color: color }) })] }));
};
export default AchievementSummary;
//# sourceMappingURL=summary.js.map