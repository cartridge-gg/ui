"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { showErrorToast, showSuccessToast, showTransactionToast, showMarketplaceToast, showAchievementToast, showNetworkSwitchToast, } from "../../../components/primitives/toast/specialized-toasts";
import { useToast } from "./use-toast";
import { CONTROLLER_TOAST_MESSAGE_TYPE, } from "./types";
import { SonnerToaster } from "../../../components/primitives/sonner";
export function ControllerToaster({ position = "bottom-right", disabledTypes = [], collapseTransactions, toasterId, }) {
    const { toast } = useToast();
    useEffect(() => {
        const eventHandler = (event) => {
            const variant = event.data.type === CONTROLLER_TOAST_MESSAGE_TYPE
                ? event.data.options.variant
                : undefined;
            if (!variant)
                return;
            if (variant == "error" && !disabledTypes.includes("error")) {
                const options = event.data.options;
                toast(showErrorToast({
                    ...options,
                    toasterId,
                }));
            }
            else if (variant == "success" && !disabledTypes.includes("success")) {
                const options = event.data.options;
                toast(showSuccessToast({
                    ...options,
                    toasterId,
                }));
            }
            else if (variant == "network-switch" &&
                !disabledTypes.includes("network-switch")) {
                const options = event.data.options;
                toast(showNetworkSwitchToast({
                    ...options,
                    toasterId,
                }));
            }
            else if (variant == "transaction" &&
                !disabledTypes.includes("transaction")) {
                const options = event.data.options;
                toast(showTransactionToast({
                    ...options,
                    isExpanded: collapseTransactions !== undefined ? !collapseTransactions : true,
                    duration: options.status == "confirming" ? 0 : options.duration,
                    toasterId,
                }));
            }
            else if (variant == "marketplace" &&
                !disabledTypes.includes("marketplace")) {
                const options = event.data.options;
                toast(showMarketplaceToast({
                    title: `${options.action[0].toUpperCase()}${options.action.slice(1)}`,
                    ...options,
                    toasterId,
                }));
            }
            else if (variant == "achievement" &&
                !disabledTypes.includes("achievement")) {
                const options = event.data.options;
                toast(showAchievementToast({
                    ...options,
                    toasterId,
                }));
            }
        };
        window.addEventListener("message", eventHandler);
        return () => {
            window.removeEventListener("message", eventHandler);
        };
    }, [disabledTypes.join(","), collapseTransactions, toasterId]);
    return _jsx(SonnerToaster, { position: position, toasterId: toasterId });
}
//# sourceMappingURL=controller-toaster.js.map