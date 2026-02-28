import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TabsTrigger, UsersIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
export const followerTabVariants = cva("h-10 group select-none rounded-none cursor-pointer flex justify-between items-center border-b px-3 py-2.5 gap-4 grow data-[state=active]:shadow-none data-[state=active]:rounded data-[state=active]:cursor-default data-[state=active]:text-foreground-100 data-[state=active]:hover:text-foreground-100", {
    variants: {
        variant: {
            darkest: "bg-background-100 border-background-200 text-foreground-300 hover:text-foreground-200 data-[state=active]:bg-background-200",
            darker: "bg-background-100 border-background-200 text-foreground-300 hover:text-foreground-200 data-[state=active]:bg-background-200",
            dark: "bg-background-100 border-background-200 text-foreground-300 hover:text-foreground-200 data-[state=active]:bg-background-200",
            default: "bg-background-100 border-background-200 text-foreground-300 hover:text-foreground-200 data-[state=active]:bg-background-200",
            light: "bg-background-100 border-background-200 text-foreground-300 hover:text-foreground-200 data-[state=active]:bg-background-200",
            lighter: "bg-background-100 border-background-200 text-foreground-300 hover:text-foreground-200 data-[state=active]:bg-background-200",
            lightest: "bg-background-100 border-background-200 text-foreground-300 hover:text-foreground-200 data-[state=active]:bg-background-200",
            ghost: "border-background-transparent text-foreground-300 hover:text-foreground-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const FollowerTab = ({ value, label, active, counter, variant, className, }) => {
    return (_jsxs(TabsTrigger, { "data-state": active ? "active" : "inactive", value: value, className: cn(followerTabVariants({ variant }), className), children: [_jsx("p", { className: "text-sm font-medium", children: label }), _jsxs("div", { className: cn("px-2 py-1 flex items-center rounded-full bg-background-200 text-foreground-300 group-hover:text-foreground-200 transition-colors", active &&
                    "bg-background-300 text-foreground-100 group-hover:text-foreground-100"), children: [_jsx(UsersIcon, { variant: "solid", size: "xs" }), _jsx("p", { className: "px-0.5 text-xs font-semibold tracking-wider", children: counter })] })] }));
};
export default FollowerTab;
//# sourceMappingURL=tab.js.map