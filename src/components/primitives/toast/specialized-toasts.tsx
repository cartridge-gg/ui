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
} from "@/components/icons";
import { StarknetIcon } from "@/components/icons/brand";
import {
  Toast,
  ToastClose,
  type ToastProps,
} from "../toast";

// Base toast container for specialized toasts
const specializedToastVariants = cva(
  "flex flex-col items-start p-0 bg-[#161A17] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg border-0",
  {
    variants: {
      variant: {
        achievement: "w-[360px]",
        network: "w-[360px] h-[52px]",
        error: "w-[360px] h-[52px] bg-[#E66666]",
        transaction: "w-[360px]",
      },
    },
    defaultVariants: {
      variant: "achievement",
    },
  }
);

// Close Button Component
interface CloseButtonProps {
  onClick?: () => void;
  variant?: "default" | "hover" | "translucent" | "translucent-hover";
  className?: string;
}

const CloseButton = memo<CloseButtonProps>(({ onClick, variant = "default", className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getButtonStyle = () => {
    if (variant === "translucent" || variant === "translucent-hover") {
      return isHovered || variant === "translucent-hover"
        ? "bg-[rgba(0,0,0,0.04)]"
        : "bg-transparent";
    }
    return isHovered ? "bg-[#181C19]" : "bg-transparent";
  };

  const getIconColor = () => {
    if (variant === "translucent" || variant === "translucent-hover") {
      return isHovered || variant === "translucent-hover"
        ? "text-[rgba(0,0,0,0.64)]"
        : "text-[rgba(0,0,0,0.48)]";
    }
    return isHovered ? "text-white" : "text-[#505050]";
  };

  return (
    <button
      className={cn(
        "flex items-center justify-center p-[10px] w-10 h-10 rounded",
        getButtonStyle(),
        getIconColor(),
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TimesIcon size="sm" />
    </button>
  );
});

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
        <div className="w-[15px] h-[15px] bg-white" style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
        }} />
      ) : (
        <div className="w-3 h-3 bg-white rounded-sm" />
      )}
    </div>
    <span className="text-white text-sm font-normal leading-5">{amount}</span>
  </div>
));

XPTag.displayName = "XPTag";

// Toast Progress Bar Component
interface ToastProgressBarProps {
  progress: number; // 0-100
  variant?: "achievement" | "error";
  className?: string;
}

const ToastProgressBar = memo<ToastProgressBarProps>(({ progress, variant = "achievement", className }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(progress), 100);
    return () => clearTimeout(timer);
  }, [progress]);

  const getColors = () => {
    if (variant === "error") {
      return {
        bg: "bg-[rgba(0,0,0,0.08)]",
        fill: "bg-[rgba(0,0,0,0.48)]"
      };
    }
    return {
      bg: "bg-[#1E221F]",
      fill: "bg-[#33FF33]"
    };
  };

  const colors = getColors();

  return (
    <div className={cn("w-full h-1 relative", colors.bg, className)}>
      <div
        className={cn("h-full transition-all duration-1000 ease-out", colors.fill)}
        style={{ width: `${animatedProgress}%` }}
      />
    </div>
  );
});

ToastProgressBar.displayName = "ToastProgressBar";

// Achievement Toast Component
interface AchievementToastProps extends Omit<ToastProps, 'children'> {
  title: string;
  subtitle?: string;
  xpAmount: number;
  progress: number;
  isDraft?: boolean;
}

const AchievementToast = memo<AchievementToastProps>(({
  title,
  subtitle = "Earned!",
  xpAmount,
  progress,
  isDraft = false,
  className,
  ...props
}) => {
  const IconComponent = isDraft ? CreditsIcon : AwardIcon;
  const iconColor = isDraft ? "#D3A4E5" : "#33FF33";

  return (
    <Toast className={cn(specializedToastVariants({ variant: "achievement" }), className)} {...props}>
      <div className="flex items-start p-3 gap-2 w-full h-16">
        <div className="flex items-center justify-between w-full gap-1">
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center w-10 h-10 bg-[#161A17] rounded p-[5px]">
              <IconComponent size="default" style={{ color: iconColor }} />
            </div>
            <div className="flex flex-col justify-center gap-[2px]">
              <span className="text-white text-base font-medium leading-5 tracking-[0.01em]">
                {title}
              </span>
              <span className="text-[#808080] text-xs font-normal leading-4">
                {subtitle}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start p-[10px]">
            <XPTag amount={xpAmount} isMainnet={!isDraft} />
          </div>
        </div>
        <ToastClose asChild>
          <CloseButton />
        </ToastClose>
      </div>
      <ToastProgressBar 
        progress={progress} 
        className="w-full" 
        variant="achievement"
      />
    </Toast>
  );
});

AchievementToast.displayName = "AchievementToast";

// Network Switch Toast Component
interface NetworkSwitchToastProps extends Omit<ToastProps, 'children'> {
  networkName: string;
  networkIcon?: React.ReactNode;
}

const NetworkSwitchToast = memo<NetworkSwitchToastProps>(({
  networkName,
  networkIcon,
  className,
  ...props
}) => (
  <Toast className={cn(specializedToastVariants({ variant: "network" }), className)} {...props}>
    <div className="flex items-center p-[14px] gap-3 w-full h-full">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-6 h-6 rounded-full overflow-hidden">
          {networkIcon || <StarknetIcon size="default" />}
        </div>
        <span className="text-white text-base font-medium leading-5 tracking-[0.01em]">
          Switched to {networkName}
        </span>
      </div>
    </div>
  </Toast>
));

NetworkSwitchToast.displayName = "NetworkSwitchToast";

// Error Toast Component
interface ErrorToastProps extends Omit<ToastProps, 'children'> {
  message: string;
  progress?: number;
}

const ErrorToast = memo<ErrorToastProps>(({
  message,
  progress = 66.7,
  className,
  ...props
}) => (
  <Toast className={cn(specializedToastVariants({ variant: "error" }), className)} {...props}>
    <div className="flex items-start w-full h-12">
      <div className="flex items-center p-3 gap-2 flex-1 h-full">
        <div className="flex items-center gap-2">
          <AlertIcon size="default" className="text-[#0F1410]" />
          <span className="text-[#0F1410] text-base font-medium leading-5 tracking-[0.01em]">
            {message}
          </span>
        </div>
      </div>
      <div className="flex items-center p-1">
        <ToastClose asChild>
          <CloseButton variant="translucent" />
        </ToastClose>
      </div>
    </div>
    <ToastProgressBar progress={progress} variant="error" />
  </Toast>
));

ErrorToast.displayName = "ErrorToast";

// Transaction Notification Component
interface TransactionNotificationProps extends Omit<ToastProps, 'children'> {
  status: "confirming" | "confirmed";
  isExpanded?: boolean;
  label?: string;
  progress?: number;
}

const TransactionNotification = memo<TransactionNotificationProps>(({
  status,
  isExpanded = true,
  label = "New Game",
  progress = 66.7,
  className,
  ...props
}) => {
  if (!isExpanded) {
    return (
      <Toast className="flex items-start p-[10px] w-12 h-12 bg-[#161A17] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg border-0" {...props}>
        <div className="w-7 h-7">
          {status === "confirming" ? (
            <SpinnerIcon size="default" className="text-[#33FF33] animate-spin" />
          ) : (
            <CheckIcon size="default" className="text-[#33FF33]" />
          )}
        </div>
      </Toast>
    );
  }

  return (
    <Toast className={cn(specializedToastVariants({ variant: "transaction" }), className)} {...props}>
      <div className="flex items-start w-full h-12">
        <div className="flex items-center p-3 gap-2 flex-1 h-full">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-6 h-6">
              {status === "confirming" ? (
                <SpinnerIcon size="default" className="text-white animate-spin" />
              ) : (
                <CheckIcon size="default" className="text-white" />
              )}
            </div>
            <span className="text-white text-base font-normal leading-5 tracking-[0.01em]">
              {status === "confirming" ? "Confirming" : "Confirmed"}
            </span>
            {status === "confirming" && (
              <div className="flex items-center px-1 py-[4px] bg-[rgba(0,0,0,0.08)] rounded-[2px]">
                <div className="w-4 h-4 mr-1">
                  <div className="w-[10px] h-[8px] bg-[#33FF33]" />
                </div>
                <span className="text-[#33FF33] text-xs font-normal leading-4">
                  {label}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center p-1">
          <ToastClose asChild>
            <CloseButton />
          </ToastClose>
        </div>
      </div>
      <ToastProgressBar 
        progress={status === "confirmed" ? 100 : progress} 
        variant="achievement"
      />
    </Toast>
  );
});

TransactionNotification.displayName = "TransactionNotification";

// Convenience functions for using with the existing toast system
export const showAchievementToast = (props: Pick<AchievementToastProps, 'title' | 'subtitle' | 'xpAmount' | 'progress' | 'isDraft'>) => {
  return {
    title: props.title,
    description: props.subtitle,
    action: (
      <AchievementToast
        {...props}
        // Remove Radix props to avoid conflicts
        open={undefined}
        onOpenChange={undefined}
      />
    ),
  };
};

export const showNetworkSwitchToast = (props: Pick<NetworkSwitchToastProps, 'networkName' | 'networkIcon'>) => {
  return {
    title: `Switched to ${props.networkName}`,
    action: (
      <NetworkSwitchToast
        {...props}
        open={undefined}
        onOpenChange={undefined}
      />
    ),
  };
};

export const showErrorToast = (props: Pick<ErrorToastProps, 'message' | 'progress'>) => {
  return {
    title: props.message,
    variant: "destructive" as const,
    action: (
      <ErrorToast
        {...props}
        open={undefined}
        onOpenChange={undefined}
      />
    ),
  };
};

export const showTransactionToast = (props: Pick<TransactionNotificationProps, 'status' | 'isExpanded' | 'label' | 'progress'>) => {
  return {
    title: props.status === "confirming" ? "Confirming" : "Confirmed",
    description: props.label,
    action: (
      <TransactionNotification
        {...props}
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