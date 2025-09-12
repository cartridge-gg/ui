import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
import { cn } from "../../../utils";
export const SlashIcon = memo(forwardRef(({ className, size, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 15 15", className: cn("p-1", iconVariants({ size, className })), ref: forwardedRef, ...props, children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z", fill: "currentColor" }) }))));
SlashIcon.displayName = "SlashIcon";
//# sourceMappingURL=slash.js.map