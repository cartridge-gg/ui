import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TransactionNotification } from "../components/primitives/toast/specialized-toasts";
import { ToastProvider, ToastViewport } from "../components/primitives/toast";
const meta = {
    title: "Primitives/Toast/Transaction Notification",
    component: TransactionNotification,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#353535" },
                { name: "light", value: "#ffffff" },
            ],
        },
    },
    decorators: [
        (Story) => (_jsxs(ToastProvider, { children: [_jsx(Story, {}), _jsx(ToastViewport, {})] })),
    ],
    argTypes: {
        status: {
            control: "select",
            options: ["confirming", "confirmed"],
        },
        isExpanded: { control: "boolean" },
        label: { control: "text" },
        progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
    },
};
export default meta;
export const ConfirmingExpanded = {
    args: {
        status: "confirming",
        isExpanded: true,
        label: "New Game",
        progress: 66.7,
    },
};
export const ConfirmedExpanded = {
    args: {
        status: "confirmed",
        isExpanded: true,
        progress: 100,
    },
};
export const ConfirmingCollapsed = {
    args: {
        status: "confirming",
        isExpanded: false,
    },
};
export const ConfirmedCollapsed = {
    args: {
        status: "confirmed",
        isExpanded: false,
    },
};
export const SwapTransaction = {
    args: {
        status: "confirming",
        isExpanded: true,
        label: "Token Swap",
        progress: 45,
    },
};
export const TransferTransaction = {
    args: {
        status: "confirmed",
        isExpanded: true,
        label: "Transfer",
        progress: 100,
    },
};
//# sourceMappingURL=transaction-notification.stories.js.map