import { jsx as _jsx } from "react/jsx-runtime";
import { Progress } from "../../../index";
import { cn } from "../../../utils";
import { useMemo } from "react";
export function ProgressBar({ count, total, completed, className, color, }) {
    const value = useMemo(() => {
        return Math.floor((100 * Math.min(count, total)) / total);
    }, [count, total]);
    return (_jsx("div", { className: "grow flex items-center bg-background-300 rounded-full p-1 ", children: _jsx(Progress, { value: value, color: color, completed: completed, className: cn("grow rounded-full bg-foreground-200 data-[completed=true]:bg-primary", className) }) }));
}
//# sourceMappingURL=progress-bar.js.map