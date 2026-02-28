import { jsx as _jsx } from "react/jsx-runtime";
import { Button, WedgeIcon } from "../../../../index";
export function AchievementPagination({ direction, disabled, onClick, }) {
    return (_jsx(Button, { variant: "icon", size: "icon", className: "rounded-none text-foreground-300 hover:text-foreground-200", disabled: disabled, onClick: onClick, children: direction === "left" ? (_jsx(WedgeIcon, { variant: "left", size: "sm" })) : (_jsx(WedgeIcon, { variant: "right", size: "sm" })) }));
}
export default AchievementPagination;
//# sourceMappingURL=pagination.js.map