import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
export function AchievementIcon({ icon, completed }) {
    return (_jsx("div", { className: cn("w-8 h-8 flex items-center justify-center", completed ? "text-primary" : "text-foreground-300"), children: _jsx("div", { className: cn("h-6 w-6", icon || "fa-trophy", "fa-solid") }) }));
}
export default AchievementIcon;
//# sourceMappingURL=icon.js.map