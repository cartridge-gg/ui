import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const CircleNoCheckIcon = memo(forwardRef(({ className, size, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: _jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", clipRule: "evenodd" }) }))));
CircleNoCheckIcon.displayName = "CircleNoCheckIcon";
//# sourceMappingURL=circle-no-check.js.map