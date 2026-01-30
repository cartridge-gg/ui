"use client";

import { useEffect } from "react";
import {
  showErrorToast,
  showSuccessToast,
  showTransactionToast,
  showMarketplaceToast,
  showAchievementToast,
} from "@/components/primitives/toast/specialized-toasts";
import { Toaster } from "./toaster";
import { useToast, ToasterToast } from "./use-toast";
import {
  ToastPosition,
  ErrorToastOptions,
  SuccessToastOptions,
  TransactionToastOptions,
  MarketplaceToastOptions,
  AchievementToastOptions,
  CONTROLLER_TOAST_MESSAGE_TYPE,
} from "./types";

export function ControllerToaster({
  // preset,
  position = "bottom-right",
  disableErrors = false,
  disableTransactions = false,
  disableMarketplace = false,
  disableAchievements = false,
  // disableQuests = false,
}: {
  preset?: string;
  position?: ToastPosition;
  disableErrors?: boolean;
  disableTransactions?: boolean;
  disableMarketplace?: boolean;
  disableAchievements?: boolean;
  // disableQuests?: boolean;
}) {
  const { toast } = useToast();

  useEffect(() => {
    const eventHandler = (event: any) => {
      // Sonner toast
      const variant =
        event.data.type === CONTROLLER_TOAST_MESSAGE_TYPE
          ? event.data.options.variant
          : undefined;
      console.log(
        ">>> CONTROLLER EVENT?:",
        variant ? event.data.options : null,
      );
      if (!variant) return;

      if (variant == "error" && !disableErrors) {
        const options = event.data.options as ErrorToastOptions;
        toast(
          showErrorToast({
            ...options,
          }) as ToasterToast,
        );
      } else if (variant == "success" && !disableErrors) {
        const options = event.data.options as SuccessToastOptions;
        toast(
          showSuccessToast({
            ...options,
          }) as ToasterToast,
        );
      } else if (variant == "transaction" && !disableTransactions) {
        const options = event.data.options as TransactionToastOptions;
        toast(
          showTransactionToast({
            ...options,
            // duration: options.status == "confirming" ? 0 : options.duration,
          }) as ToasterToast,
        );
      } else if (variant == "marketplace" && !disableMarketplace) {
        const options = event.data.options as MarketplaceToastOptions;
        toast(
          showMarketplaceToast({
            title: `${options.action[0].toUpperCase()}${options.action.slice(1)}`,
            ...options,
          }) as ToasterToast,
        );
      } else if (variant == "achievement" && !disableAchievements) {
        const options = event.data.options as AchievementToastOptions;
        toast(
          showAchievementToast({
            ...options,
          }) as ToasterToast,
        );
      }
    };
    window.addEventListener("message", eventHandler);
    return () => {
      window.removeEventListener("message", eventHandler);
    };
  }, []);

  return <Toaster position={position} />;
}
