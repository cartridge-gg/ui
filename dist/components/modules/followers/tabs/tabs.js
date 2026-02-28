import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FollowerTab, Tabs, TabsList } from "../../../../index";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
export const followerTabsVariants = cva("grid w-full grid-cols-2 gap-x-4 p-0 h-10", {
    variants: {
        variant: {
            darkest: "bg-transparent",
            darker: "bg-transparent",
            dark: "bg-transparent",
            default: "bg-transparent",
            light: "bg-transparent",
            lighter: "bg-transparent",
            lightest: "bg-transparent",
            ghost: "bg-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const FollowerTabs = ({ followers, following, value, onValueChange, variant, className, children, }) => {
    return (_jsxs(Tabs, { className: className, value: value, onValueChange: onValueChange, children: [_jsxs(TabsList, { className: cn(followerTabsVariants({ variant })), children: [_jsx(FollowerTab, { value: "followers", label: "Followers", counter: followers, active: value === "followers" }), _jsx(FollowerTab, { value: "following", label: "Following", counter: following, active: value === "following" })] }), children] }));
};
export default FollowerTabs;
//# sourceMappingURL=tabs.js.map