"use client";

import React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "./use-toast";
import { ToastPosition } from "./types";

export function Toaster({
  // position = "bottom-right",
}: {
  position?: ToastPosition;
}) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        if (action) {
          // If there's an action (specialized toast), clone it with the toast props
          // The specialized toast already includes its own Toast wrapper
          return React.cloneElement(action, { key: id, ...props });
        }

        // Otherwise render the default toast layout
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
