import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const PacmanIcon = memo(forwardRef(({ className, size, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: _jsx("path", { fill: "currentColor", d: "M19.391 15.062a8 8 0 1 1 0-6.123L12 12l7.391 3.062Z" }) }))));
PacmanIcon.displayName = "PacmanIcon";
//# sourceMappingURL=pacman.js.map