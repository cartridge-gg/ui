import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const DotsIcon = memo(forwardRef(({ className, size, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: _jsx("path", { fill: "currentColor", d: "M16.308 12A1.847 1.847 0 1 1 20 12a1.847 1.847 0 0 1-3.693 0Zm-6.154 0a1.847 1.847 0 1 1 3.693.001A1.847 1.847 0 0 1 10.154 12Zm-2.462 0A1.846 1.846 0 1 1 4 12a1.846 1.846 0 0 1 3.692 0Z" }) }))));
DotsIcon.displayName = "DotsIcon";
//# sourceMappingURL=dots.js.map