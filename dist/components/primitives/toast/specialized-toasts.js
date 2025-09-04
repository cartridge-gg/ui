"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";
import { TimesIcon, CheckIcon, SpinnerIcon, AlertIcon, AwardIcon, CreditIcon as CreditsIcon, SparklesIcon, } from "../../../components/icons";
import { StarknetIcon } from "../../../components/icons/brand";
import { Toast, ToastClose } from "./toast";
// Base toast container for specialized toasts
const specializedToastVariants = cva("flex flex-col items-start p-0 bg-background shadow-lg rounded-lg border-0 overflow-hidden relative", {
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
});
const CloseButton = memo(({ onClick, variant = "default", className }) => {
    const iconColorClass = variant === "translucent"
        ? "text-translucent-dark-200 hover:text-translucent-dark-300"
        : "text-foreground-200 hover:text-foreground";
    return (_jsx("button", { className: cn("flex items-center justify-center w-6 h-6 rounded transition-colors", iconColorClass, className), onClick: onClick, children: _jsx(TimesIcon, { size: "sm" }) }));
});
CloseButton.displayName = "CloseButton";
const XPTag = memo(({ amount, isMainnet = true }) => (_jsxs("div", { className: "flex items-center gap-[2px]", children: [_jsx("div", { className: "w-5 h-5 flex items-center justify-center", children: isMainnet ? (_jsx(SparklesIcon, { variant: "solid", size: "sm", className: "text-foreground" })) : (_jsx("div", { className: "w-3 h-3 bg-foreground rounded-sm" })) }), _jsx("span", { className: "text-foreground text-sm font-normal leading-5", children: amount })] })));
XPTag.displayName = "XPTag";
const ToastProgressBar = memo(({ progress, variant = "achievement", className }) => {
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
    return (_jsx("div", { className: cn("absolute bottom-0 left-0 right-0 w-full h-1", colors.bg, className), children: _jsx("div", { className: cn("h-full transition-all duration-1000 ease-out", colors.fill), style: { width: `${animatedProgress}%` } }) }));
});
ToastProgressBar.displayName = "ToastProgressBar";
const AchievementToast = memo(({ title, subtitle = "Earned!", xpAmount, progress, isDraft = false, duration, showClose = false, className, ...props }) => {
    const IconComponent = isDraft ? CreditsIcon : AwardIcon;
    const iconColor = isDraft
        ? "var(--achievement-200)"
        : "var(--achievement-100)";
    return (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "achievement" }), className), duration: duration, ...props, children: [_jsxs("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-background rounded p-[5px] flex-shrink-0", children: _jsx(IconComponent, { size: "lg", style: { color: iconColor } }) }), _jsxs("div", { className: "flex flex-col justify-center gap-[2px] flex-1 min-w-0", children: [_jsx("span", { className: "text-foreground text-base font-medium leading-5 tracking-[0.01em] truncate", children: title }), _jsx("span", { className: "text-foreground-300 text-xs font-normal leading-4 truncate", children: subtitle })] })] }), _jsxs("div", { className: "flex items-center gap-2 flex-shrink-0 ml-2", children: [_jsx(XPTag, { amount: xpAmount, isMainnet: !isDraft }), showClose && (_jsx(ToastClose, { asChild: true, children: _jsx(CloseButton, {}) }))] })] }), _jsx(ToastProgressBar, { progress: progress, variant: "achievement" })] }));
});
AchievementToast.displayName = "AchievementToast";
const NetworkSwitchToast = memo(({ networkName, networkIcon, duration, showClose = false, className, ...props }) => (_jsx(Toast, { className: cn(specializedToastVariants({ variant: "network" }), className), duration: duration, ...props, children: _jsxs("div", { className: "flex items-center justify-between px-3 py-3 w-full h-full", children: [_jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "w-6 h-6 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0", children: networkIcon || _jsx(StarknetIcon, { size: "default" }) }), _jsxs("span", { className: "text-foreground text-base font-medium leading-5 tracking-[0.01em] truncate", children: ["Switched to ", networkName] })] }), showClose && (_jsx("div", { className: "flex-shrink-0 ml-2", children: _jsx(ToastClose, { asChild: true, children: _jsx(CloseButton, {}) }) }))] }) })));
NetworkSwitchToast.displayName = "NetworkSwitchToast";
const ErrorToast = memo(({ message, progress = 66.7, duration, showClose = false, className, ...props }) => (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "error" }), className), duration: duration, ...props, children: [_jsxs("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx(AlertIcon, { size: "default", className: "text-destructive-foreground flex-shrink-0" }), _jsx("span", { className: "text-destructive-foreground text-base font-medium leading-5 tracking-[0.01em] truncate", children: message })] }), showClose && (_jsx("div", { className: "flex-shrink-0 ml-2", children: _jsx(ToastClose, { asChild: true, children: _jsx(CloseButton, { variant: "translucent" }) }) }))] }), _jsx(ToastProgressBar, { progress: progress, variant: "error" })] })));
ErrorToast.displayName = "ErrorToast";
const TransactionNotification = memo(({ status, isExpanded = true, label = "New Game", progress = 66.7, duration, showClose = false, className, ...props }) => {
    if (!isExpanded) {
        return (_jsx(Toast, { className: "flex items-center justify-center p-[10px] w-12 h-12 bg-background shadow-lg rounded-lg border-0 overflow-hidden", duration: duration, ...props, children: _jsx("div", { className: "w-7 h-7 flex items-center justify-center", children: status === "confirming" ? (_jsx(SpinnerIcon, { size: "default", className: "text-achievement animate-spin" })) : (_jsx(CheckIcon, { size: "default", className: "text-achievement" })) }) }));
    }
    return (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "transaction" }), className), duration: duration, ...props, children: [_jsxs("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "w-6 h-6 flex items-center justify-center flex-shrink-0", children: status === "confirming" ? (_jsx(SpinnerIcon, { size: "default", className: "text-foreground animate-spin" })) : (_jsx(CheckIcon, { size: "default", className: "text-foreground" })) }), _jsx("span", { className: "text-foreground text-base font-normal leading-5 tracking-[0.01em] truncate", children: status === "confirming" ? "Confirming" : "Confirmed" }), status === "confirming" && (_jsxs("div", { className: "flex items-center px-2 py-1 bg-translucent-dark-100 rounded-[2px] ml-2 flex-shrink-0", children: [_jsx("div", { className: "w-4 h-4 mr-1 flex items-center justify-center", children: _jsx("div", { className: "w-[10px] h-[8px] bg-achievement" }) }), _jsx("span", { className: "text-achievement text-xs font-normal leading-4 whitespace-nowrap", children: label })] }))] }), showClose && (_jsx("div", { className: "flex-shrink-0 ml-2", children: _jsx(ToastClose, { asChild: true, children: _jsx(CloseButton, {}) }) }))] }), _jsx(ToastProgressBar, { progress: status === "confirmed" ? 100 : progress, variant: "achievement" })] }));
});
TransactionNotification.displayName = "TransactionNotification";
// Convenience functions for using with the existing toast system
export const showAchievementToast = (props) => {
    return {
        duration: props.duration,
        action: (_jsx(AchievementToast, { ...props, showClose: true, 
            // Remove Radix props to avoid conflicts
            open: undefined, onOpenChange: undefined })),
    };
};
export const showNetworkSwitchToast = (props) => {
    return {
        duration: props.duration,
        action: (_jsx(NetworkSwitchToast, { ...props, showClose: true, open: undefined, onOpenChange: undefined })),
    };
};
export const showErrorToast = (props) => {
    return {
        variant: "destructive",
        duration: props.duration,
        action: (_jsx(ErrorToast, { ...props, showClose: true, open: undefined, onOpenChange: undefined })),
    };
};
export const showTransactionToast = (props) => {
    return {
        duration: props.duration,
        action: (_jsx(TransactionNotification, { ...props, showClose: true, open: undefined, onOpenChange: undefined })),
    };
};
export { AchievementToast, NetworkSwitchToast, ErrorToast, TransactionNotification, CloseButton, XPTag, ToastProgressBar, };
//# sourceMappingURL=specialized-toasts.js.map