"use client";

import { useEffect } from "react";
import {
  showErrorToast,
  showSuccessToast,
  showTransactionToast,
  showMarketplaceToast,
  showAchievementToast,
} from "@/components/primitives/toast/specialized-toasts";
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
import { SonnerToaster } from "@/components/primitives/sonner";

export function ControllerToaster({
  // preset,
  position = "bottom-right",
  toasterId,
  disableErrors = false,
  disableTransactions = false,
  disableMarketplace = false,
  disableAchievements = false,
  // disableQuests = false,
  disableSonnerToaster = false,
}: {
  preset?: string;
  position?: ToastPosition;
  toasterId?: string | undefined;
  disableErrors?: boolean;
  disableTransactions?: boolean;
  disableMarketplace?: boolean;
  disableAchievements?: boolean;
  // disableQuests?: boolean;
  disableSonnerToaster?: boolean;
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
            toasterId,
          }) as ToasterToast,
        );
      } else if (variant == "success" && !disableErrors) {
        const options = event.data.options as SuccessToastOptions;
        toast(
          showSuccessToast({
            ...options,
            toasterId,
          }) as ToasterToast,
        );
      } else if (variant == "transaction" && !disableTransactions) {
        const options = event.data.options as TransactionToastOptions;
        toast(
          showTransactionToast({
            ...options,
            // duration: options.status == "confirming" ? 0 : options.duration,
            toasterId,
          }) as ToasterToast,
        );
      } else if (variant == "marketplace" && !disableMarketplace) {
        const options = event.data.options as MarketplaceToastOptions;
        toast(
          showMarketplaceToast({
            title: `${options.action[0].toUpperCase()}${options.action.slice(1)}`,
            ...options,
            toasterId,
          }) as ToasterToast,
        );
      } else if (variant == "achievement" && !disableAchievements) {
        const options = event.data.options as AchievementToastOptions;
        toast(
          showAchievementToast({
            ...options,
            toasterId,
          }) as ToasterToast,
        );
      }
    };
    window.addEventListener("message", eventHandler);
    return () => {
      window.removeEventListener("message", eventHandler);
    };
  }, []);

  if (disableSonnerToaster) return null;

  return <SonnerToaster position={position} toasterId={toasterId} />;
}
