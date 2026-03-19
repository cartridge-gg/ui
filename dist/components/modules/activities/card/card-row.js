import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorAlertIcon, SpinnerIcon, Thumbnail } from "../../../../index";
import { cn, getDuration } from "../../../../utils";
import { cva } from "class-variance-authority";
import React from "react";
import { useMemo } from "react";
export const activityCardRowVariants = cva("select-none rounded px-3 py-2.5 flex gap-0.5 text-sm items-center justify-between text-foreground-100 data-[loading]:text-foreground-300 data-[error]:text-destructive-100", {
    variants: {
        variant: {
            default: "bg-background-200 hover:bg-background-300 cursor-pointer",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ActivityCardRow = ({ icon, logo, items, timestamp, error, loading, variant, className, ...props }) => {
    const currentTimestamp = useMemo(() => new Date().getTime(), []);
    return (_jsxs("div", { "data-loading": loading, "data-error": error, className: cn(activityCardRowVariants({ variant }), className), ...props, children: [_jsx("div", { className: "w-6 h-6 p-0 flex-none", children: icon }), items
                .filter(Boolean)
                .map((item, index) => typeof item === "string" ? (_jsx("p", { children: item }, `item-${index}`)) : React.isValidElement(item) ? (React.cloneElement(item, { key: `item-${index}` })) : null), _jsx("div", { className: "flex-grow" }), _jsx("div", { className: "text-sm text-foreground-400 mx-1 mb-[1px]", children: getDuration(currentTimestamp - timestamp) }), error ? (_jsx(ErrorAlertIcon, { className: "w-6 h-6 flex-none", variant: "error" })) : loading ? (_jsx(SpinnerIcon, { className: "w-6 h-6 flex-none animate-spin" })) : (logo && (_jsx("div", { className: "w-6 h-6 flex-none", children: _jsx(Thumbnail, { icon: logo, size: "sm" }) })))] }));
};
export const ActivityPreposition = ({ label, }) => {
    if (!label) {
        return null;
    }
    return (_jsx("div", { className: "text-sm text-foreground-400 mx-1 mb-[1px]", children: label }));
};
export default ActivityCardRow;
//# sourceMappingURL=card-row.js.map