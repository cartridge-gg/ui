"use client";

import React, { useCallback } from "react";
import { toast as sonnerToast } from "sonner";
import { ToastProps } from "./toast";
import { SuccessToast } from "./specialized-toasts";

export type ToasterToast = ToastProps & {
  // id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
};

function useToast() {
  const customToast = useCallback((toast: ToasterToast) => {
    sonnerToast.custom(
      (_id) => toast.action ?? <SuccessToast message={toast.title ?? ""} />,
      {
        duration: toast.duration,
      },
    );
  }, []);
  return {
    toast: customToast,
  };
}

export { useToast };
