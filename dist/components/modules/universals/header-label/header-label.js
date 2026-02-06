import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UniversalHeaderIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const headerLabelVariants = cva("flex gap-x-4 items-center", {
    variants: {
        variant: {
            default: "text-foreground-100",
            ghost: "",
        },
        size: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export const UniversalHeaderLabel = ({ label, icon, className, variant, size, }) => {
    return (_jsxs("div", { className: cn(headerLabelVariants({ variant, size }), className), children: [_jsx(UniversalHeaderIcon, { icon: icon, variant: variant, size: size }), _jsx("p", { className: "font-semibold text-lg/[22px]", children: label })] }));
};
export default UniversalHeaderLabel;
//# sourceMappingURL=header-label.js.map