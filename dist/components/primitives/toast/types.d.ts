export type ToastPosition = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center";
export interface BaseToastOptions {
    toastId?: string;
    duration?: number;
    position?: ToastPosition;
    progress?: number;
    preset?: string;
    safeToClose?: boolean;
    onClick?: () => void;
}
export interface ErrorToastOptions extends BaseToastOptions {
    variant: "error";
    message: string;
}
export interface SuccessToastOptions extends BaseToastOptions {
    variant: "success";
    message: string;
}
export interface TransactionToastOptions extends BaseToastOptions {
    variant: "transaction";
    status: "confirming" | "confirmed";
    isExpanded?: boolean;
    label?: string;
}
export interface NetworkSwitchToastOptions extends BaseToastOptions {
    variant: "network-switch";
    networkName: string;
    networkIcon?: string;
}
export interface AchievementToastOptions extends BaseToastOptions {
    variant: "achievement";
    title: string;
    subtitle?: string;
    iconUrl?: string;
    xpAmount: number;
    progress: number;
    isDraft?: boolean;
}
export interface QuestToastOptions extends BaseToastOptions {
    variant: "quest";
    title: string;
    subtitle: string;
}
export interface MarketplaceToastOptions extends BaseToastOptions {
    variant: "marketplace";
    itemNames: string[];
    itemImages: string[];
    collectionName: string;
    action: "purchased" | "sold" | "sent" | "listed" | "unlisted";
}
export type ToastOptions = ErrorToastOptions | SuccessToastOptions | TransactionToastOptions | NetworkSwitchToastOptions | AchievementToastOptions | QuestToastOptions | MarketplaceToastOptions;
export declare const CONTROLLER_TOAST_MESSAGE_TYPE = "controller-toast";
export interface ControllerToastEventMessage {
    type: typeof CONTROLLER_TOAST_MESSAGE_TYPE;
    options: ToastOptions;
}
