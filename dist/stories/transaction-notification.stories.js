import { jsx as _jsx } from "react/jsx-runtime";
import { TransactionToast } from "../components/primitives/toast/specialized-toasts";
const meta = {
    title: "Primitives/Toast/Transaction Notification",
    component: TransactionToast,
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
        (Story) => (_jsx("div", { children: _jsx(Story, {}) })),
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