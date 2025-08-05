import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
export const activityHeaderVariants = cva("flex flex-col items-center gap-6 text-foreground-200 data-[loading]:text-foreground-300 data-[error]:text-destructive-100", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "",
            light: "",
            lighter: "",
            lightest: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ActivityHeader = ({ Logo, title, topic, subTopic, error, loading, variant, className, }) => {
    return (_jsxs("div", { "data-loading": loading, "data-error": error, className: cn(activityHeaderVariants({ variant }), className), children: [_jsx("p", { className: "text-lg/[22px] font-semibold", children: title }), Logo, _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("p", { "data-error": error, "data-loading": loading, className: "text-2xl/[29px] font-semibold text-foreground-100 data-[error]:text-destructive-100 data-[loading]:text-foreground-300", children: topic }), _jsx("p", { "data-error": error, "data-loading": loading, className: "text-sm text-foreground-300 data-[error]:text-destructive-100 data-[loading]:text-foreground-300", children: error ? "Failed" : subTopic })] })] }));
};
export default ActivityHeader;
//# sourceMappingURL=header.js.map