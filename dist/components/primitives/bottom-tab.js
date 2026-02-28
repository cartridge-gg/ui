import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
const bottomTabVariants = cva("flex flex-col items-center", {
    variants: {
        variant: {
            default: "grow text-foreground-300 hover:text-foreground-200 cursor-pointer",
        },
        size: {
            default: "h-16",
        },
        status: {
            active: "text-primary hover:text-primary",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export function BottomTab({ className, variant, status, ...props }) {
    return (_jsxs("div", { className: cn(bottomTabVariants({ variant, status }), className), children: [_jsx("div", { className: cn("bg-primary h-[2px] w-full rounded-full", status !== "active" && "opacity-0") }), _jsx("div", { className: "grow w-full flex items-center justify-center", ...props })] }));
}
//# sourceMappingURL=bottom-tab.js.map