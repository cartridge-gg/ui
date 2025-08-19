"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CaratIcon, CircleCheckIcon, WedgeIcon } from "../../components/icons";
import { cn } from "../../utils";
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, simplified, ...props }, ref) => (_jsxs(SelectPrimitive.Trigger, { ref: ref, className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md bg-background-200 hover:bg-background-300 px-3 py-2 text-xs font-bold text-foreground placeholder:text-foreground-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className), ...props, children: [children, simplified && (_jsx(SelectPrimitive.Icon, { asChild: true, children: _jsx(CaratIcon, { variant: "down", className: "text-foreground-400" }) }))] })));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (_jsx(SelectPrimitive.ScrollUpButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: _jsx(WedgeIcon, { variant: "up" }) })));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (_jsx(SelectPrimitive.ScrollDownButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: _jsx(WedgeIcon, { variant: "down" }) })));
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, viewPortClassName, children, position = "popper", ...props }, ref) => (_jsx(SelectPrimitive.Portal, { children: _jsxs(SelectPrimitive.Content, { ref: ref, className: cn("relative z-50 max-h-96 min-w-[8rem] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden rounded-md bg-background-200 text-foreground font-bold data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position, ...props, children: [_jsx(SelectScrollUpButton, {}), _jsx(SelectPrimitive.Viewport, { className: cn("flex flex-col gap-px", position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]", viewPortClassName), children: children }), _jsx(SelectScrollDownButton, {})] }) })));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (_jsx(SelectPrimitive.Label, { ref: ref, className: cn("px-2 py-1.5 text-xs font-semibold", className), ...props })));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, simplified, ...props }, ref) => (_jsxs(SelectPrimitive.Item, { ref: ref, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-xs text-foreground-400 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50", !simplified && "focus:bg-background-500 focus:text-foreground-200", className), ...props, children: [!simplified && (_jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(SelectPrimitive.ItemIndicator, { children: _jsx(CircleCheckIcon, { size: "sm" }) }) })), _jsx(SelectPrimitive.ItemText, { children: children })] })));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (_jsx(SelectPrimitive.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-background-200", className), ...props })));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, };
//# sourceMappingURL=select.js.map