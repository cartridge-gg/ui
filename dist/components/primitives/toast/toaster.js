"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, } from "./toast";
import { useToast } from "./use-toast";
export function Toaster() {
    const { toasts } = useToast();
    return (_jsxs(ToastProvider, { children: [toasts.map(function ({ id, title, description, action, ...props }) {
                if (action) {
                    // If there's an action (specialized toast), clone it with the toast props
                    // The specialized toast already includes its own Toast wrapper
                    return React.cloneElement(action, { key: id, ...props });
                }
                // Otherwise render the default toast layout
                return (_jsxs(Toast, { ...props, children: [_jsxs("div", { className: "grid gap-1", children: [title && _jsx(ToastTitle, { children: title }), description && (_jsx(ToastDescription, { children: description }))] }), _jsx(ToastClose, {})] }, id));
            }), _jsx(ToastViewport, {})] }));
}
//# sourceMappingURL=toaster.js.map