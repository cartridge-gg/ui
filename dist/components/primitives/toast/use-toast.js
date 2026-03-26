"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { toast as sonnerToast } from "sonner";
import { ErrorToast, SuccessToast } from "./specialized-toasts";
function useToast() {
    const customToast = useCallback((toast) => {
        const sticky = toast.duration == 0;
        const options = {
            duration: sticky ? 60000 : toast.duration,
        };
        if (toast.toasterId)
            options.toasterId = toast.toasterId;
        if (toast.element)
            options.id = toast.toastId;
        sonnerToast.custom((id) => toast.element ??
            (toast.variant == "destructive" ? (_jsx(ErrorToast, { message: toast.title ?? "", toastId: toast.toastId ?? id })) : (_jsx(SuccessToast, { message: toast.title ?? "", toastId: toast.toastId ?? id }))), options);
    }, []);
    return {
        toast: customToast,
    };
}
export { useToast };
//# sourceMappingURL=use-toast.js.map