import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
export const traceabilityCardVariants = cva("select-none rounded p-3 pr-4 flex items-center justify-between gap-4 text-foreground-100 data-[loading]:text-foreground-300 data-[error]:text-destructive-100", {
    variants: {
        variant: {
            default: "bg-background-200 hover:bg-background-300 cursor-pointer",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const TraceabilityCard = ({ Logo, title, from, to, count, error, loading, variant, className, ...props }) => {
    return (_jsxs("div", { "data-loading": loading, "data-error": error, className: cn(traceabilityCardVariants({ variant }), className), ...props, children: [Logo, _jsxs("div", { className: "flex flex-col gap-0.5 items-stretch grow overflow-hidden", children: [_jsxs("div", { "data-error": error, className: "flex items-center gap-6 justify-between text-sm font-medium capitalize data-[error]:text-destructive-100", children: [_jsx("p", { children: title }), count && _jsx("p", { children: count })] }), _jsxs("div", { "data-error": error, className: "flex items-center gap-1 justify-between text-xs text-foreground-300 data-[error]:text-destructive-100", children: [_jsx("p", { children: from }), _jsx("p", { children: to })] })] })] }));
};
export default TraceabilityCard;
//# sourceMappingURL=card.js.map