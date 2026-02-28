"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../utils";
const Progress = React.forwardRef(({ className, value, completed, color, ...props }, ref) => (_jsx(ProgressPrimitive.Root, { ref: ref, className: "relative h-2 w-full overflow-hidden rounded-full", ...props, children: _jsx(ProgressPrimitive.Indicator, { "data-completed": !!completed, className: cn("h-full w-full flex-1 transition-all rounded-full bg-primary", className), style: {
            backgroundColor: completed ? color : undefined,
            transform: `translateX(-${100 - (value && value > 0 ? value : -1)}%)`,
        } }) })));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };
//# sourceMappingURL=progress.js.map