import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const PlayIcon = memo(forwardRef(({ className, size, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: _jsx("path", { fill: "currentColor", d: "M16.527 10.903c.383.235.617.65.617 1.098 0 .447-.233.863-.617 1.074L8.813 17.79a1.236 1.236 0 0 1-1.3.049 1.286 1.286 0 0 1-.657-1.123v-9.43a1.286 1.286 0 0 1 1.957-1.097l7.714 4.714Z" }) }))));
PlayIcon.displayName = "PlayIcon";
//# sourceMappingURL=play.js.map