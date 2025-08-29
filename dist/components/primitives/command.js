"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { MagnifyingGlassIcon } from "../../components/icons";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../../utils";
import { Dialog, DialogContent } from "../../components/primitives/dialog";
const Command = React.forwardRef(({ className, ...props }, ref) => (_jsx(CommandPrimitive, { ref: ref, className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-background-200 text-foreground", className), ...props })));
Command.displayName = CommandPrimitive.displayName;
const CommandDialog = ({ children, ...props }) => {
    return (_jsx(Dialog, { ...props, children: _jsx(DialogContent, { className: "overflow-hidden p-0", children: _jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-foreground-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: children }) }) }));
};
const CommandInput = React.forwardRef(({ className, ...props }, ref) => (_jsxs("div", { className: "flex items-center border-b px-3 gap-2", "cmdk-input-wrapper": "", children: [_jsx(MagnifyingGlassIcon, { className: "opacity-50" }), _jsx(CommandPrimitive.Input, { ref: ref, className: cn("flex h-10 w-full rounded-md bg-background-200 py-3 text-sm outline-none placeholder:text-foreground-400 disabled:cursor-not-allowed disabled:opacity-50", className), ...props })] })));
CommandInput.displayName = CommandPrimitive.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => (_jsx(CommandPrimitive.List, { ref: ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props })));
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => (_jsx(CommandPrimitive.Empty, { ref: ref, className: "py-6 text-center text-sm", ...props })));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (_jsx(CommandPrimitive.Group, { ref: ref, className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-foreground-400", className), ...props })));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (_jsx(CommandPrimitive.Separator, { ref: ref, className: cn("-mx-1 h-px bg-border", className), ...props })));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => (_jsx(CommandPrimitive.Item, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-background-500 aria-selected:text-foreground-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props })));
CommandItem.displayName = CommandPrimitive.Item.displayName;
const CommandShortcut = ({ className, ...props }) => {
    return (_jsx("span", { className: cn("ml-auto text-xs tracking-widest text-foreground-400", className), ...props }));
};
CommandShortcut.displayName = "CommandShortcut";
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
//# sourceMappingURL=command.js.map