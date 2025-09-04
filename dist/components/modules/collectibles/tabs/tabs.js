import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookIcon, CollectibleTab, ListIcon, PulseIcon, Tabs, TabsList, } from "../../../../index";
import { cn } from "../../../../utils";
import { useCallback, useState } from "react";
import { cva } from "class-variance-authority";
export const collectibleTabsVariants = cva("w-full gap-x-3 p-0 h-10", {
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
export const CollectibleTabs = ({ variant, className, children, order, }) => {
    const [value, setValue] = useState(order.length > 0 ? order[0] : "details");
    const getIcon = useCallback((value) => {
        switch (value) {
            case "details":
                return _jsx(BookIcon, { variant: "solid", size: "sm" });
            case "items":
                return _jsx(ListIcon, { variant: "solid", size: "sm" });
            case "activity":
                return _jsx(PulseIcon, { variant: "solid", size: "sm" });
            default:
                return null;
        }
    }, [value]);
    return (_jsxs(Tabs, { className: className, value: value, onValueChange: (value) => setValue(value), children: [_jsx("div", { className: "sticky top-0 pb-4 bg-background-100 z-50", children: _jsx(TabsList, { className: cn(collectibleTabsVariants({ variant })), children: order.map((tab) => (_jsx(CollectibleTab, { value: tab, label: tab, active: value === tab, Icon: getIcon(tab) }, tab))) }) }), children] }));
};
export default CollectibleTabs;
//# sourceMappingURL=tabs.js.map