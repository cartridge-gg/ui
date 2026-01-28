"use client";

import { useEffect, useState } from "react";
import {
  showSuccessToast,
  showErrorToast,
  // showMarketplaceToast,
} from "@/components/primitives/toast/specialized-toasts";
import { Toaster } from "./toaster";
import { useToast, ToasterToast } from "./use-toast";
import { type ToastT } from "sonner";

// sonner example
// {
//   "title": "Listing transaction submitted successfully!",
//   "duration": 10000,
//   "type": "success",
//   "dismissible": true,
//   "id": 1
// }

export function ControllerToaster() {
  const { toast } = useToast();
  const [content, setContent] = useState<ToasterToast | undefined>();

  useEffect(() => {
    const eventHandler = (event: any) => {
      // Sonner toast
      if (!event.data.toast) return;
      const toastData = event.data.toast as ToastT;
      if (toastData.type == "success") {
        setContent(
          showSuccessToast({
            message: toastData.title as string,
            duration: toastData.duration,
            progress: 100,
          }) as ToasterToast,
        );
      } else if (toastData.type == "error") {
        setContent(
          showErrorToast({
            message: toastData.title as string,
            duration: toastData.duration,
            progress: 100,
          }) as ToasterToast,
        );
      }
    };
    window.addEventListener("message", eventHandler);
    return () => {
      window.removeEventListener("message", eventHandler);
    };
  }, []);

  useEffect(() => {
    if (content) {
      toast(content);
    }
  }, [content]);

  return <Toaster />;
}
