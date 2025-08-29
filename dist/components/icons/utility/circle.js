import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const CircleIcon = memo(forwardRef(({ className, size, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: _jsx("circle", { cx: "12", cy: "12", r: "4", fill: "currentColor" }) }))));
CircleIcon.displayName = "CircleIcon";
//# sourceMappingURL=circle.js.map