"use client";

import React, { memo, useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import {
  TimesIcon,
  CheckIcon,
  SpinnerIcon,
  AlertIcon,
  AwardIcon,
  CreditIcon as CreditsIcon,
  SparklesIcon,
} from "@/components/icons";
import { StarknetIcon } from "@/components/icons/brand";
import { Toast, ToastClose, type ToastProps } from "./toast";

// Base toast container for specialized toasts
const specializedToastVariants = cva(
  "flex flex-col items-start p-0 bg-background shadow-lg rounded-lg border-0 overflow-hidden relative",
  {
    variants: {
      variant: {
        achievement: "w-[360px] h-[68px]",
        network: "w-[360px] h-[52px]",
        error: "w-[360px] h-[52px] bg-destructive",
        transaction: "w-[360px] h-[52px]",
      },
    },
    defaultVariants: {
      variant: "achievement",
    },
  },
);

// Close Button Component
interface CloseButtonProps {
  onClick?: () => void;
  variant?: "default" | "translucent";
  className?: string;
}

const CloseButton = memo<CloseButtonProps>(
  ({ onClick, variant = "default", className }) => {
    const iconColorClass =
      variant === "translucent"
        ? "text-translucent-dark-200 hover:text-translucent-dark-300"
        : "text-foreground-200 hover:text-foreground";

    return (
      <button
        className={cn(
          "flex items-center justify-center w-6 h-6 rounded transition-colors",
          iconColorClass,
          className,
        )}
        onClick={onClick}
      >
        <TimesIcon size="sm" />
      </button>
    );
  },
);

CloseButton.displayName = "CloseButton";

// XP Tag Component
interface XPTagProps {
  amount: number;
  isMainnet?: boolean;
}

const XPTag = memo<XPTagProps>(({ amount, isMainnet = true }) => (
  <div className="flex items-center gap-[2px]">
    <div className="w-5 h-5 flex items-center justify-center">
      {isMainnet ? (
        <SparklesIcon variant="solid" size="sm" className="text-foreground" />
      ) : (
        <div className="w-3 h-3 bg-foreground rounded-sm" />
      )}
    </div>
    <span className="text-foreground text-sm font-normal leading-5">
      {amount}
    </span>
  </div>
));

XPTag.displayName = "XPTag";

// Toast Progress Bar Component
interface ToastProgressBarProps {
  progress: number; // 0-100
  variant?: "achievement" | "error";
  className?: string;
}

const ToastProgressBar = memo<ToastProgressBarProps>(
  ({ progress, variant = "achievement", className }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setAnimatedProgress(progress), 100);
      return () => clearTimeout(timer);
    }, [progress]);

    const getColors = () => {
      if (variant === "error") {
        return {
          bg: "bg-translucent-dark-100",
          fill: "bg-translucent-dark-200",
        };
      }
      return {
        bg: "bg-background-200",
        fill: "bg-achievement",
      };
    };

    const colors = getColors();

    return (
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 w-full h-1",
          colors.bg,
          className,
        )}
      >
        <div
          className={cn(
            "h-full transition-all duration-1000 ease-out",
            colors.fill,
          )}
          style={{ width: `${animatedProgress}%` }}
        />
      </div>
    );
  },
);

ToastProgressBar.displayName = "ToastProgressBar";

// Achievement Toast Component
interface AchievementToastProps extends Omit<ToastProps, "children"> {
  title: string;
  subtitle?: string;
  xpAmount: number;
  progress: number;
  isDraft?: boolean;
  duration?: number;
  showClose?: boolean;
}

const AchievementToast = memo<AchievementToastProps>(
  ({
    title,
    subtitle = "Earned!",
    xpAmount,
    progress,
    isDraft = false,
    duration,
    showClose = false,
    className,
    ...props
  }) => {
    const IconComponent = isDraft ? CreditsIcon : AwardIcon;
    const iconColor = isDraft
      ? "var(--achievement-200)"
      : "var(--achievement-100)";

    return (
      <Toast
        className={cn(
          specializedToastVariants({ variant: "achievement" }),
          className,
        )}
        duration={duration}
        {...props}
      >
        <div className="flex items-center justify-between px-3 py-3 w-full flex-1">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center justify-center w-10 h-10 bg-background rounded p-[5px] flex-shrink-0">
              <IconComponent size="lg" style={{ color: iconColor }} />
            </div>
            <div className="flex flex-col justify-center gap-[2px] flex-1 min-w-0">
              <span className="text-foreground text-base font-medium leading-5 tracking-[0.01em] truncate">
                {title}
              </span>
              <span className="text-foreground-300 text-xs font-normal leading-4 truncate">
                {subtitle}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            <XPTag amount={xpAmount} isMainnet={!isDraft} />
            {showClose && (
              <ToastClose asChild>
                <CloseButton />
              </ToastClose>
            )}
          </div>
        </div>
        <ToastProgressBar progress={progress} variant="achievement" />
      </Toast>
    );
  },
);

AchievementToast.displayName = "AchievementToast";

// Network Switch Toast Component
interface NetworkSwitchToastProps extends Omit<ToastProps, "children"> {
  networkName: string;
  networkIcon?: React.ReactNode;
  duration?: number;
  showClose?: boolean;
}

const NetworkSwitchToast = memo<NetworkSwitchToastProps>(
  ({
    networkName,
    networkIcon,
    duration,
    showClose = false,
    className,
    ...props
  }) => (
    <Toast
      className={cn(
        specializedToastVariants({ variant: "network" }),
        className,
      )}
      duration={duration}
      {...props}
    >
      <div className="flex items-center justify-between px-3 py-3 w-full h-full">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
            {networkIcon || <StarknetIcon size="default" />}
          </div>
          <span className="text-foreground text-base font-medium leading-5 tracking-[0.01em] truncate">
            Switched to {networkName}
          </span>
        </div>
        {showClose && (
          <div className="flex-shrink-0 ml-2">
            <ToastClose asChild>
              <CloseButton />
            </ToastClose>
          </div>
        )}
      </div>
    </Toast>
  ),
);

NetworkSwitchToast.displayName = "NetworkSwitchToast";

// Error Toast Component
interface ErrorToastProps extends Omit<ToastProps, "children"> {
  message: string;
  progress?: number;
  duration?: number;
  showClose?: boolean;
}

const ErrorToast = memo<ErrorToastProps>(
  ({
    message,
    progress = 66.7,
    duration,
    showClose = false,
    className,
    ...props
  }) => (
    <Toast
      className={cn(specializedToastVariants({ variant: "error" }), className)}
      duration={duration}
      {...props}
    >
      <div className="flex items-center justify-between px-3 py-3 w-full flex-1">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <AlertIcon
            size="default"
            className="text-destructive-foreground flex-shrink-0"
          />
          <span className="text-destructive-foreground text-base font-medium leading-5 tracking-[0.01em] truncate">
            {message}
          </span>
        </div>
        {showClose && (
          <div className="flex-shrink-0 ml-2">
            <ToastClose asChild>
              <CloseButton variant="translucent" />
            </ToastClose>
          </div>
        )}
      </div>
      <ToastProgressBar progress={progress} variant="error" />
    </Toast>
  ),
);

ErrorToast.displayName = "ErrorToast";

// Transaction Notification Component
interface TransactionNotificationProps extends Omit<ToastProps, "children"> {
  status: "confirming" | "confirmed";
  isExpanded?: boolean;
  label?: string;
  progress?: number;
  duration?: number;
  showClose?: boolean;
}

const TransactionNotification = memo<TransactionNotificationProps>(
  ({
    status,
    isExpanded = true,
    label = "New Game",
    progress = 66.7,
    duration,
    showClose = false,
    className,
    ...props
  }) => {
    if (!isExpanded) {
      return (
        <Toast
          className="flex items-center justify-center p-[10px] w-12 h-12 bg-background shadow-lg rounded-lg border-0 overflow-hidden"
          duration={duration}
          {...props}
        >
          <div className="w-7 h-7 flex items-center justify-center">
            {status === "confirming" ? (
              <SpinnerIcon
                size="default"
                className="text-achievement animate-spin"
              />
            ) : (
              <CheckIcon size="default" className="text-achievement" />
            )}
          </div>
        </Toast>
      );
    }

    return (
      <Toast
        className={cn(
          specializedToastVariants({ variant: "transaction" }),
          className,
        )}
        duration={duration}
        {...props}
      >
        <div className="flex items-center justify-between px-3 py-3 w-full flex-1">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              {status === "confirming" ? (
                <SpinnerIcon
                  size="default"
                  className="text-foreground animate-spin"
                />
              ) : (
                <CheckIcon size="default" className="text-foreground" />
              )}
            </div>
            <span className="text-foreground text-base font-normal leading-5 tracking-[0.01em] truncate">
              {status === "confirming" ? "Confirming" : "Confirmed"}
            </span>
            {status === "confirming" && (
              <div className="flex items-center px-2 py-1 bg-translucent-dark-100 rounded-[2px] ml-2 flex-shrink-0">
                <div className="w-4 h-4 mr-1 flex items-center justify-center">
                  <div className="w-[10px] h-[8px] bg-achievement" />
                </div>
                <span className="text-achievement text-xs font-normal leading-4 whitespace-nowrap">
                  {label}
                </span>
              </div>
            )}
          </div>
          {showClose && (
            <div className="flex-shrink-0 ml-2">
              <ToastClose asChild>
                <CloseButton />
              </ToastClose>
            </div>
          )}
        </div>
        <ToastProgressBar
          progress={status === "confirmed" ? 100 : progress}
          variant="achievement"
        />
      </Toast>
    );
  },
);

TransactionNotification.displayName = "TransactionNotification";

// Convenience functions for using with the existing toast system
export const showAchievementToast = (
  props: Pick<
    AchievementToastProps,
    "title" | "subtitle" | "xpAmount" | "progress" | "isDraft" | "duration"
  >,
) => {
  return {
    duration: props.duration,
    action: (
      <AchievementToast
        {...props}
        showClose={true}
        // Remove Radix props to avoid conflicts
        open={undefined}
        onOpenChange={undefined}
      />
    ),
  };
};

export const showNetworkSwitchToast = (
  props: Pick<
    NetworkSwitchToastProps,
    "networkName" | "networkIcon" | "duration"
  >,
) => {
  return {
    duration: props.duration,
    action: (
      <NetworkSwitchToast
        {...props}
        showClose={true}
        open={undefined}
        onOpenChange={undefined}
      />
    ),
  };
};

export const showErrorToast = (
  props: Pick<ErrorToastProps, "message" | "progress" | "duration">,
) => {
  return {
    variant: "destructive" as const,
    duration: props.duration,
    action: (
      <ErrorToast
        {...props}
        showClose={true}
        open={undefined}
        onOpenChange={undefined}
      />
    ),
  };
};

export const showTransactionToast = (
  props: Pick<
    TransactionNotificationProps,
    "status" | "isExpanded" | "label" | "progress" | "duration"
  >,
) => {
  return {
    duration: props.duration,
    action: (
      <TransactionNotification
        {...props}
        showClose={true}
        open={undefined}
        onOpenChange={undefined}
      />
    ),
  };
};

export {
  AchievementToast,
  NetworkSwitchToast,
  ErrorToast,
  TransactionNotification,
  CloseButton,
  XPTag,
  ToastProgressBar,
  type AchievementToastProps,
  type NetworkSwitchToastProps,
  type ErrorToastProps,
  type TransactionNotificationProps,
};
