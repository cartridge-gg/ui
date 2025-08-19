import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const BaseColorIcon = memo(forwardRef(({ className, size, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: _jsx("path", { d: "M11.986 20C16.412 20 20 16.4182 20 12C20 7.58171 16.412 4 11.986 4C7.78691 4 4.34212 7.22394 4 11.3275H14.5926V12.6724H4C4.34212 16.7761 7.78691 20 11.986 20Z", fill: "#2151F5" }) }))));
BaseColorIcon.displayName = "BaseColorIcon";
//# sourceMappingURL=base.js.map