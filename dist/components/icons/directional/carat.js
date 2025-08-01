import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
export const CaratIcon = memo(forwardRef(({ className, size, variant, ...props }, forwardedRef) => (_jsx("svg", { viewBox: "0 0 24 24", className: iconVariants({ size, className }), ref: forwardedRef, ...props, children: (() => {
        switch (variant) {
            case "up":
                return (_jsx("path", { className: "fill-current", d: "m8 13.6 4-4 4 4v.8H8v-.8Z" }));
            case "right":
                return (_jsx("path", { className: "fill-current", d: "m10.4 8 4 4-4 4h-.8V8h.8Z" }));
            case "down":
                return (_jsx("path", { className: "fill-current", d: "m16 10.4-4 4-4-4v-.8h8v.8Z" }));
            case "left":
                return (_jsx("path", { className: "fill-current", d: "m13.6 16-4-4 4-4h.8v8h-.8Z" }));
        }
    })() }))));
CaratIcon.displayName = "CaratIcon";
//# sourceMappingURL=carat.js.map