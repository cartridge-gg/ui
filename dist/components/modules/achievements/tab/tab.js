import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TabsTrigger } from "../../../../index";
import { cn } from "../../../../utils";
import React from "react";
export const AchievementTab = ({ value, label, active, counter, className, }) => {
    if (!counter)
        return null;
    return (_jsxs(TabsTrigger, { "data-state": active ? "active" : "inactive", value: value, className: cn("select-none cursor-pointer flex justify-between items-center bg-background-100 border-b border-background-200 px-3 py-2.5 gap-4 grow text-foreground-300 hover:text-foreground-200", "data-[state=active]:bg-background-200 data-[state=active]:rounded data-[state=active]:cursor-default data-[state=active]:shadow-none", "data-[state=active]:text-foreground-100 data-[state=active]:hover:text-foreground-100", className), children: [_jsx("p", { className: "text-sm", children: label }), React.cloneElement(counter, {
                active,
            })] }));
};
export default AchievementTab;
//# sourceMappingURL=tab.js.map