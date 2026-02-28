"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../utils";
import { CheckboxIcon } from "../icons";
import { iconVariants } from "../icons/utils";
const Checkbox = React.forwardRef(({ variant, className, checked, size, ...props }, ref) => {
    const iconStyle = iconVariants({ size });
    return (_jsx(CheckboxPrimitive.Root, { ref: ref, className: cn("peer flex items-center justify-center shrink-0 rounded-sm disabled:cursor-not-allowed disabled:opacity-50", iconStyle), checked: checked, ...props, children: _jsx(CheckboxIcon, { className: cn(iconStyle, className), variant: checked === "indeterminate"
                ? "minus-line"
                : checked
                    ? variant || "line"
                    : "unchecked-line" }) }));
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
//# sourceMappingURL=checkbox.js.map