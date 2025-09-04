import React from "react";
import { type ToastProps } from "./toast";
interface CloseButtonProps {
    onClick?: () => void;
    variant?: "default" | "translucent";
    className?: string;
}
declare const CloseButton: React.NamedExoticComponent<CloseButtonProps>;
interface XPTagProps {
    amount: number;
    isMainnet?: boolean;
}
declare const XPTag: React.NamedExoticComponent<XPTagProps>;
interface ToastProgressBarProps {
    progress: number;
    variant?: "achievement" | "error";
    className?: string;
}
declare const ToastProgressBar: React.NamedExoticComponent<ToastProgressBarProps>;
interface AchievementToastProps extends Omit<ToastProps, "children"> {
    title: string;
    subtitle?: string;
    xpAmount: number;
    progress: number;
    isDraft?: boolean;
    duration?: number;
    showClose?: boolean;
}
declare const AchievementToast: React.NamedExoticComponent<AchievementToastProps>;
interface NetworkSwitchToastProps extends Omit<ToastProps, "children"> {
    networkName: string;
    networkIcon?: React.ReactNode;
    duration?: number;
    showClose?: boolean;
}
declare const NetworkSwitchToast: React.NamedExoticComponent<NetworkSwitchToastProps>;
interface ErrorToastProps extends Omit<ToastProps, "children"> {
    message: string;
    progress?: number;
    duration?: number;
    showClose?: boolean;
}
declare const ErrorToast: React.NamedExoticComponent<ErrorToastProps>;
interface TransactionNotificationProps extends Omit<ToastProps, "children"> {
    status: "confirming" | "confirmed";
    isExpanded?: boolean;
    label?: string;
    progress?: number;
    duration?: number;
    showClose?: boolean;
}
declare const TransactionNotification: React.NamedExoticComponent<TransactionNotificationProps>;
export declare const showAchievementToast: (props: Pick<AchievementToastProps, "title" | "subtitle" | "xpAmount" | "progress" | "isDraft" | "duration">) => {
    duration: number | undefined;
    action: import("react/jsx-runtime").JSX.Element;
};
export declare const showNetworkSwitchToast: (props: Pick<NetworkSwitchToastProps, "networkName" | "networkIcon" | "duration">) => {
    duration: number | undefined;
    action: import("react/jsx-runtime").JSX.Element;
};
export declare const showErrorToast: (props: Pick<ErrorToastProps, "message" | "progress" | "duration">) => {
    variant: "destructive";
    duration: number | undefined;
    action: import("react/jsx-runtime").JSX.Element;
};
export declare const showTransactionToast: (props: Pick<TransactionNotificationProps, "status" | "isExpanded" | "label" | "progress" | "duration">) => {
    duration: number | undefined;
    action: import("react/jsx-runtime").JSX.Element;
};
export { AchievementToast, NetworkSwitchToast, ErrorToast, TransactionNotification, CloseButton, XPTag, ToastProgressBar, type AchievementToastProps, type NetworkSwitchToastProps, type ErrorToastProps, type TransactionNotificationProps, };
