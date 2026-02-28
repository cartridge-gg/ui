import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const PlusIcon = memo(forwardRef(({ className, size, variant, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: (() => {
        switch (variant) {
            case "solid":
                return (_jsx("path", { d: "M13.9227 20V13.7119H20V10.321H13.9227V4H10.0773V10.321H4V13.7119H10.0773V20H13.9227Z", className: "fill-current" }));
            case "line":
                return (_jsx("path", { d: "M11 20H13V13H20V11H13V4H11V11H4V13H11V20Z", className: "fill-current" }));
        }
    })() }))));
PlusIcon.displayName = "PlusIcon";
//# sourceMappingURL=plus.js.map