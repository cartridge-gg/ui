"use client";

import React, { useCallback } from "react";
import { toast as sonnerToast, ExternalToast } from "sonner";
import { ToastProps } from "./toast";
import { SuccessToast } from "./specialized-toasts";

export type ToasterToast = ToastProps & {
  // id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  toastId?: string;
};

function useToast() {
  const customToast = useCallback((toast: ToasterToast) => {
    const options: ExternalToast = {
      duration: toast.duration,
    };
    if (toast.action) {
      options.id = toast.toastId;
    }
    sonnerToast.custom(
      (id) =>
        toast.action ?? (
          <SuccessToast
            message={toast.title ?? ""}
            toastId={toast.toastId ?? id}
          />
        ),
      options,
    );
  }, []);
  return {
    toast: customToast,
  };
}

export { useToast };
