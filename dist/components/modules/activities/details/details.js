import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
export const activityDetailsVariants = cva("flex p-3", {
    variants: {
        variant: {
            default: "bg-background-200 text-foreground-400 rounded-t",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ActivityDetails = ({ variant, className, children, }) => {
    return (_jsxs("div", { className: "flex flex-col gap-y-px", children: [_jsx("div", { className: cn(activityDetailsVariants({ variant }), className), children: _jsx("p", { className: "text-xs font-semibold tracking-wider", children: "Details" }) }), children] }));
};
export default ActivityDetails;
//# sourceMappingURL=details.js.map