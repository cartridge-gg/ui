import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const tokenSummaryVariants = cva("rounded overflow-y-scroll w-full flex flex-col gap-y-px", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const TokenSummary = ({ variant, className, children, ...props }) => {
    return (_jsx("div", { className: cn(tokenSummaryVariants({ variant }), className), ...props, style: { scrollbarWidth: "none" }, children: children }));
};
export default TokenSummary;
//# sourceMappingURL=summary.js.map