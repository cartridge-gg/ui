import { ToastPosition } from "./types";
export type ControllerNotificationTypes = "error" | "success" | "network-switch" | "transaction" | "marketplace" | "achievement";
export declare function ControllerToaster({ position, disabledTypes, collapseTransactions, toasterId, }: {
    position?: ToastPosition;
    disabledTypes?: ControllerNotificationTypes[];
    collapseTransactions?: boolean;
    toasterId?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
