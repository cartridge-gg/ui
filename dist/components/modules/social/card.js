import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "../../../utils";
import { Thumbnail } from "../thumbnails";
import { CheckIcon } from "../../../components/icons";
export const SocialCard = ({ text, icon, handle, isDisabled, isCompleted, isExpired, className, onClick, ...props }) => {
    const [hover, setHover] = useState(false);
    return (_jsxs("div", { className: cn("group flex flex-row gap-2 justify-between", "w-full h-[48px] px-3 py-2.5 items-left", "first:rounded-t-md last:rounded-b-md", "bg-background-200", "text-foreground-100 text-base text-normal", onClick !== undefined
            ? "cursor-pointer hover:bg-background-300 transition-colors ease-in-out"
            : "pointer-events-none", (isDisabled || isCompleted) && "bg-background-150 pointer-events-none", className), onClick: isDisabled || isCompleted ? undefined : onClick, onMouseEnter: () => onClick !== undefined && setHover(true), onMouseLeave: () => onClick !== undefined && setHover(false), ...props, children: [_jsx(Thumbnail, { icon: isCompleted ? _jsx(CheckIcon, {}) : icon, size: "sm", variant: hover ? "lighter" : "light", rounded: true, className: cn("w-[28px] h-[28px] p-1", (isDisabled || isCompleted) &&
                    "text-foreground-400 bg-background-200") }), _jsx("div", { className: cn("flex-1 items-left m-auto text-sm", (isDisabled || isCompleted) && "text-foreground-400"), children: text }), handle && (_jsx("div", { className: cn("flex items-center gap-1 text-foreground-200 text-sm border border-background-300 group-hover:border-background-400 rounded px-1 py-0.5", (isDisabled || isCompleted) && "text-foreground-400", isExpired && "text-destructive-100"), children: _jsx("span", { className: "font-normal text-sm", children: handle }) }))] }));
};
//# sourceMappingURL=card.js.map