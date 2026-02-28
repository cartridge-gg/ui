"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { WedgeIcon } from "../icons";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (_jsx(AccordionPrimitive.Item, { ref: ref, className: className, ...props })));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, hideIcon, color, parentClassName, wedgeIconSize, ...props }, ref) => (_jsx(AccordionPrimitive.Header, { className: "flex", children: _jsxs(AccordionPrimitive.Trigger, { ref: ref, className: cn("w-full flex items-center justify-between text-sm text-foreground-400 transition-all text-left [&[data-state=open]>svg]:rotate-90", parentClassName), ...props, children: [_jsx("div", { className: cn("flex items-center", className), children: children }), !hideIcon && (_jsx(WedgeIcon, { variant: "right", size: wedgeIconSize, className: cn("transition-transform duration-200", color) }))] }) })));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (_jsx(AccordionPrimitive.Content, { ref: ref, className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...props, children: _jsx("div", { className: cn("flex flex-col gap-px", className), children: children }) })));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
//# sourceMappingURL=accordion.js.map