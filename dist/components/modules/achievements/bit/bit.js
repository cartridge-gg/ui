import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
export function AchievementBit({ completed, active, onClick, }) {
    return (_jsx("div", { className: cn("h-2.5 w-2.5 cursor-pointer hover:opacity-100", completed ? "bg-primary" : "bg-foreground-400", active ? "opacity-100" : "opacity-50"), onClick: onClick }));
}
export default AchievementBit;
//# sourceMappingURL=bit.js.map