import React from "react";
import { ToastProps } from "./toast";
export type ToasterToast = ToastProps & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    element?: React.ReactElement;
    duration?: number;
    toasterId?: string;
    toastId?: string;
};
declare function useToast(): {
    toast: (toast: ToasterToast) => void;
};
export { useToast };
