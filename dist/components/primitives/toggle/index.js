"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "../../../utils";
import { toggleVariants } from "./utils";
export const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (_jsx(TogglePrimitive.Root, { ref: ref, className: cn(toggleVariants({ variant, size, className })), ...props })));
Toggle.displayName = TogglePrimitive.Root.displayName;
//# sourceMappingURL=index.js.map