import React from "react";
import { ToasterToast } from "./use-toast";
interface XPTagProps {
    amount: number;
    isMainnet?: boolean;
}
declare const XPTag: React.NamedExoticComponent<XPTagProps>;
interface ToastProgressBarProps {
    progress: number;
    variant?: "achievement" | "error";
    className?: string;
    preset?: string | null;
    color?: string;
}
declare const ToastProgressBar: React.NamedExoticComponent<ToastProgressBarProps>;
interface AchievementToastProps extends Omit<ToasterToast, "children"> {
    title: string;
    subtitle?: string;
    xpAmount: number;
    progress: number;
    isDraft?: boolean;
    duration?: number;
    preset?: string;
}
declare const AchievementToast: React.NamedExoticComponent<AchievementToastProps>;
interface MarketplaceToastProps extends Omit<ToasterToast, "children"> {
    title: string;
    collectionName: string;
    itemNames: string[];
    itemImages: string[];
    progress?: number;
    preset?: string;
}
declare const MarketplaceToast: React.NamedExoticComponent<MarketplaceToastProps>;
interface NetworkSwitchToastProps extends Omit<ToasterToast, "children"> {
    networkName: string;
    networkIcon?: React.ReactNode;
}
declare const NetworkSwitchToast: React.NamedExoticComponent<NetworkSwitchToastProps>;
interface ErrorToastProps extends Omit<ToasterToast, "children"> {
    message: string;
    progress?: number;
    preset?: string;
}
declare const ErrorToast: React.NamedExoticComponent<ErrorToastProps>;
interface SuccessToastProps extends Omit<ToasterToast, "children"> {
    message: string;
    progress?: number;
    preset?: string;
}
declare const SuccessToast: React.NamedExoticComponent<SuccessToastProps>;
interface TransactionToastProps extends Omit<ToasterToast, "children"> {
    status: "confirming" | "confirmed";
    isExpanded?: boolean;
    label?: string;
    progress?: number;
    preset?: string;
}
declare const TransactionToast: React.NamedExoticComponent<TransactionToastProps>;
type ToastPropsToOmit = "safeToClose" | "variant" | "children";
export declare const showAchievementToast: (props: Omit<AchievementToastProps, ToastPropsToOmit>) => {
    duration: number | undefined;
    toasterId: string | undefined;
    toastId: string;
    element: import("react/jsx-runtime").JSX.Element;
};
export declare const showMarketplaceToast: (props: Omit<MarketplaceToastProps, ToastPropsToOmit>) => {
    duration: number | undefined;
    toasterId: string | undefined;
    toastId: string;
    element: import("react/jsx-runtime").JSX.Element;
};
export declare const showNetworkSwitchToast: (props: Omit<NetworkSwitchToastProps, ToastPropsToOmit>) => {
    duration: number | undefined;
    toasterId: string | undefined;
    toastId: string;
    element: import("react/jsx-runtime").JSX.Element;
};
export declare const showErrorToast: (props: Omit<ErrorToastProps, ToastPropsToOmit>) => {
    variant: "destructive";
    duration: number | undefined;
    toasterId: string | undefined;
    toastId: string;
    element: import("react/jsx-runtime").JSX.Element;
};
export declare const showSuccessToast: (props: Omit<SuccessToastProps, ToastPropsToOmit>) => {
    variant: "default";
    duration: number | undefined;
    toasterId: string | undefined;
    toastId: string;
    element: import("react/jsx-runtime").JSX.Element;
};
export declare const showTransactionToast: (props: Omit<TransactionToastProps, ToastPropsToOmit>) => {
    duration: number | undefined;
    toasterId: string | undefined;
    toastId: string;
    element: import("react/jsx-runtime").JSX.Element;
};
export { AchievementToast, MarketplaceToast, NetworkSwitchToast, ErrorToast, SuccessToast, TransactionToast, XPTag, ToastProgressBar, type AchievementToastProps, type MarketplaceToastProps, type NetworkSwitchToastProps, type ErrorToastProps, type SuccessToastProps, type TransactionToastProps, };
