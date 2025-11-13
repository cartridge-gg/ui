import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { useMemo } from "react";
export function AchievementTaskHeader({ count, total, description, }) {
    const Icon = useMemo(() => {
        if (count >= total) {
            return CheckboxCheckedIcon;
        }
        return CheckboxUncheckedIcon;
    }, [count, total]);
    return (_jsxs("div", { className: "flex items-center gap-x-2", children: [_jsx(Icon, { className: "min-w-4 text-foreground-300", size: "xs" }), _jsx("p", { className: cn("text-xs text-foreground-300", count >= total && "line-through opacity-50"), children: description })] }));
}
export default AchievementTaskHeader;
//# sourceMappingURL=task-header.js.map