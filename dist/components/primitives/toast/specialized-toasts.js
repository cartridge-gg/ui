"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils";
import { CheckIcon, SpinnerIcon, AlertIcon, AwardIcon, SparklesIcon, SparklesDraftIcon, TransactionIcon, } from "../../../components/icons";
import { StarknetColorIcon } from "../../../components/icons/brand-color";
import { CollectibleImage } from "../../../components/modules/collectibles";
import { Toast } from "./toast";
import { usePresetColor } from "../../../utils/context/presets";
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
const XPTag = memo(({ amount, isMainnet = true }) => (_jsxs("div", { className: "flex items-center gap-[2px]", children: [_jsx("div", { className: "w-5 h-5 flex items-center justify-center", children: isMainnet ? (_jsx(SparklesIcon, { variant: "solid", size: "sm", className: "text-foreground" })) : (_jsx(SparklesDraftIcon, { size: "sm", className: "text-foreground" })) }), _jsx("span", { className: "text-foreground text-sm font-normal leading-5", children: amount })] })));
XPTag.displayName = "XPTag";
const ToastProgressBar = memo(({ progress, variant = "achievement", className, preset, color }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const presetColor = usePresetColor(preset);
    const barColor = color || presetColor;
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
            fill: barColor ? undefined : "bg-achievement",
        };
    };
    const colors = getColors();
    return (_jsx("div", { className: cn("absolute bottom-0 left-0 right-0 w-full h-1", colors.bg, className), children: _jsx("div", { className: cn("h-full transition-all duration-1000 ease-out", colors.fill), style: {
                width: `${animatedProgress}%`,
                backgroundColor: barColor ?? undefined,
            } }) }));
});
ToastProgressBar.displayName = "ToastProgressBar";
const AchievementToast = memo(({ title, subtitle = "Earned!", xpAmount, progress = 100, isDraft = false, preset, duration, showClose, toastId, className, ...props }) => {
    const IconComponent = AwardIcon;
    const iconColor = isDraft
        ? "var(--achievement-200)"
        : "var(--achievement-100)";
    return (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "achievement" }), className), showClose: showClose, toastId: toastId, ...props, children: [_jsxs("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-background rounded p-[5px] flex-shrink-0", children: _jsx(IconComponent, { size: "lg", className: "min-w-6", style: { color: iconColor } }) }), _jsxs("div", { className: "flex flex-col justify-center gap-[2px] flex-1 min-w-0", children: [_jsx("span", { className: "text-foreground text-sm font-medium leading-5 tracking-[0.01em] truncate", children: title }), _jsx("span", { className: "text-foreground-300 text-xs font-normal leading-4 truncate", children: subtitle })] })] }), _jsx("div", { className: "flex items-center gap-2 flex-shrink-0 ml-2", children: _jsx(XPTag, { amount: xpAmount, isMainnet: !isDraft }) })] }), _jsx(ToastProgressBar, { progress: progress, variant: "achievement", preset: isDraft ? null : preset, color: isDraft ? "var(--achievement-200)" : undefined })] }));
});
AchievementToast.displayName = "AchievementToast";
const MarketplaceToast = memo(({ title, collectionName, itemNames, itemImages, progress = 100, preset, showClose, toastId, className, ...props }) => {
    return (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "achievement" }), className), showClose: showClose, toastId: toastId, ...props, children: [_jsx("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: _jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-background rounded p-[5px] flex-shrink-0", children: _jsx(CollectibleImage, { images: itemImages }) }), _jsxs("div", { className: "flex flex-col justify-center gap-[2px] flex-1 min-w-0", children: [_jsx("span", { className: "text-foreground text-sm font-medium leading-5 tracking-[0.01em] truncate", children: title }), _jsx("span", { className: "text-foreground-300 text-xs font-normal leading-4 truncate", children: itemNames.length > 1
                                        ? `${itemNames.length} ${collectionName}`
                                        : (itemNames[0] ?? "1 Item") })] })] }) }), _jsx(ToastProgressBar, { progress: progress, variant: "achievement", preset: preset })] }));
});
MarketplaceToast.displayName = "MarketplaceToast";
const NetworkSwitchToast = memo(({ networkName, networkIcon, showClose, toastId, className, ...props }) => (_jsx(Toast, { className: cn(specializedToastVariants({ variant: "network" }), className), showClose: showClose, toastId: toastId, ...props, children: _jsx("div", { className: "flex items-center justify-between px-3 py-3 w-full h-full", children: _jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "w-6 h-6 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0", children: !networkIcon ? (_jsx(StarknetColorIcon, { size: "default", className: "min-w-6 scale-125" })) : typeof networkIcon === "string" &&
                        networkIcon.startsWith("http") ? (_jsx("img", { src: networkIcon, alt: "" })) : (networkIcon) }), _jsxs("span", { className: "text-foreground text-sm font-medium leading-5 tracking-[0.01em] truncate", children: ["Switched to ", networkName] })] }) }) })));
NetworkSwitchToast.displayName = "NetworkSwitchToast";
const ErrorToast = memo(({ message, progress = 100, preset, showClose, toastId, className, ...props }) => (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "error" }), className), showClose: showClose, toastId: toastId, ...props, variant: "destructive", children: [_jsx("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: _jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx(AlertIcon, { size: "default", className: "text-destructive-foreground min-w-6" }), _jsx("span", { className: "text-destructive-foreground text-sm font-medium leading-5 tracking-[0.01em] truncate", children: message })] }) }), _jsx(ToastProgressBar, { progress: progress, variant: "error", preset: preset })] })));
ErrorToast.displayName = "ErrorToast";
const SuccessToast = memo(({ message, progress = 100, preset, showClose, toastId, className, ...props }) => (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "transaction" }), className), showClose: showClose, toastId: toastId, ...props, children: [_jsx("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: _jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx(CheckIcon, { size: "default", className: "text-foreground min-w-6" }), _jsx("span", { className: "text-foreground text-sm font-normal leading-5 tracking-[0.01em] truncate", children: message })] }) }), _jsx(ToastProgressBar, { progress: progress, variant: "achievement", preset: preset })] })));
SuccessToast.displayName = "SuccessToast";
const TransactionToast = memo(({ status, isExpanded = true, label, progress = 100, preset, showClose, toastId, className, ...props }) => {
    if (!isExpanded) {
        return (_jsx(Toast, { className: "flex items-center justify-center p-[10px] w-12 h-12 bg-background shadow-lg rounded-lg border-0 overflow-hidden", showClose: !isExpanded ? false : showClose, toastId: toastId, ...props, children: _jsx("div", { className: "w-7 h-7 flex items-center justify-center", children: status === "confirming" ? (_jsx(SpinnerIcon, { size: "default", className: "text-achievement animate-spin min-w-6" })) : (_jsx(CheckIcon, { size: "default", className: "text-achievement min-w-6" })) }) }));
    }
    return (_jsxs(Toast, { className: cn(specializedToastVariants({ variant: "transaction" }), className), showClose: showClose, toastId: toastId, ...props, children: [_jsx("div", { className: "flex items-center justify-between px-3 py-3 w-full flex-1", children: _jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "w-6 h-6 flex items-center justify-center", children: status === "confirming" ? (_jsx(SpinnerIcon, { size: "default", className: "text-foreground animate-spin min-w-6" })) : (_jsx(CheckIcon, { size: "default", className: "text-foreground min-w-6" })) }), _jsx("span", { className: "text-foreground text-sm font-normal leading-5 tracking-[0.01em] truncate", children: status === "confirming" ? "Confirming" : "Confirmed" }), status === "confirming" && (_jsxs("div", { className: "flex items-center py-1 bg-translucent-dark-100 rounded-[2px] flex-shrink-0", children: [_jsx("div", { className: "w-4 h-4 mr-1 flex items-center justify-center", children: _jsx(TransactionIcon, { className: "w-[11px] h-[9px] text-achievement" }) }), _jsx("span", { className: "text-achievement text-xs font-normal leading-4 whitespace-nowrap", children: label })] }))] }) }), _jsx(ToastProgressBar, { progress: status === "confirmed" ? 100 : progress, variant: "achievement", preset: preset })] }));
});
TransactionToast.displayName = "TransactionToast";
export const showAchievementToast = (props) => {
    const toastId = props.toastId || `achievement-${Date.now()}`;
    return {
        duration: props.duration,
        toasterId: props.toasterId,
        toastId,
        element: _jsx(AchievementToast, { ...props, showClose: true, toastId: toastId }),
    };
};
export const showMarketplaceToast = (props) => {
    const toastId = props.toastId || `marketplace-${Date.now()}`;
    return {
        duration: props.duration,
        toasterId: props.toasterId,
        toastId,
        element: _jsx(MarketplaceToast, { ...props, showClose: true, toastId: toastId }),
    };
};
export const showNetworkSwitchToast = (props) => {
    const toastId = props.toastId || `network-${Date.now()}`;
    return {
        duration: props.duration,
        toasterId: props.toasterId,
        toastId,
        element: (_jsx(NetworkSwitchToast, { ...props, showClose: true, toastId: toastId })),
    };
};
export const showErrorToast = (props) => {
    const toastId = props.toastId || `error-${Date.now()}`;
    return {
        variant: "destructive",
        duration: props.duration,
        toasterId: props.toasterId,
        toastId,
        element: _jsx(ErrorToast, { ...props, showClose: true, toastId: toastId }),
    };
};
export const showSuccessToast = (props) => {
    const toastId = props.toastId || `success-${Date.now()}`;
    return {
        variant: "default",
        duration: props.duration,
        toasterId: props.toasterId,
        toastId,
        element: _jsx(SuccessToast, { ...props, showClose: true, toastId: toastId }),
    };
};
export const showTransactionToast = (props) => {
    const toastId = props.toastId || `transaction-${Date.now()}`;
    return {
        duration: props.duration,
        toasterId: props.toasterId,
        toastId,
        element: _jsx(TransactionToast, { ...props, showClose: true, toastId: toastId }),
    };
};
export { AchievementToast, MarketplaceToast, NetworkSwitchToast, ErrorToast, SuccessToast, TransactionToast, XPTag, ToastProgressBar, };
//# sourceMappingURL=specialized-toasts.js.map