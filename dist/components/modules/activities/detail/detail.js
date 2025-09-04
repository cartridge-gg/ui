import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
export const activityDetailVariants = cva("flex justify-between items-center gap-3 p-3 select-none", {
    variants: {
        variant: {
            default: "bg-background-200 text-foreground-400",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ActivityDetail = ({ label, status, variant, className, children, }) => {
    return (_jsxs("div", { className: cn(activityDetailVariants({ variant }), className), children: [_jsx("p", { className: "text-sm", children: label }), _jsx("div", { "data-status": status, className: "text-sm text-foreground-100 data-[status=success]:text-constructive-100 data-[status=fail]:text-destructive-100", children: children })] }));
};
export default ActivityDetail;
//# sourceMappingURL=detail.js.map