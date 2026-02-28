import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardContent } from "../../../../index";
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
export const TokenSummary = ({ title, variant, className, children, ...props }) => {
    return (_jsxs("div", { className: cn(tokenSummaryVariants({ variant }), className), ...props, style: { scrollbarWidth: "none" }, children: [title && (_jsx(CardContent, { className: "text-foreground-400", children: title })), children] }));
};
export default TokenSummary;
//# sourceMappingURL=summary.js.map