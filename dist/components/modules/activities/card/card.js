import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GlobeIcon, VerifiedIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
export const activityCardVariants = cva("select-none rounded p-3 pr-4 flex items-center justify-between gap-4 text-foreground-100 data-[loading]:text-foreground-300 data-[error]:text-destructive-100", {
    variants: {
        variant: {
            default: "bg-background-200 hover:bg-background-300 cursor-pointer",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ActivityCard = ({ Logo, title, subTitle, topic, subTopic, error, loading, variant, className, ...props }) => {
    return (_jsxs("div", { "data-loading": loading, "data-error": error, className: cn(activityCardVariants({ variant }), className), ...props, children: [Logo, _jsxs("div", { className: "flex flex-col gap-0.5 items-stretch grow overflow-hidden", children: [_jsxs("div", { "data-error": error, className: "flex items-center gap-6 justify-between text-sm font-medium capitalize data-[error]:text-destructive-100", children: [_jsx("p", { children: title }), !!topic && _jsx("p", { className: "truncate", children: topic })] }), _jsxs("div", { "data-error": error, className: "flex items-center gap-1 justify-between text-xs text-foreground-300 data-[error]:text-destructive-100", children: [subTitle, !!subTopic && subTopic] })] })] }));
};
export const ActivitySocialWebsite = ({ website, certified, className, }) => {
    const label = useMemo(() => {
        return website.replace(/^.*https?:\/\//, "").replace(/\/$/, "");
    }, [website]);
    const Icon = useMemo(() => {
        if (certified) {
            return _jsx(VerifiedIcon, { size: "xs" });
        }
        return _jsx(GlobeIcon, { variant: "line", size: "xs" });
    }, [certified]);
    return (_jsxs("div", { className: cn("select-none flex gap-x-1 items-center", className), children: [Icon, label && _jsx("p", { className: "text-xs", children: label })] }));
};
export default ActivityCard;
//# sourceMappingURL=card.js.map