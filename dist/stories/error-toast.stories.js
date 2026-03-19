import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorToast } from "../components/primitives/toast/specialized-toasts";
const meta = {
    title: "Primitives/Toast/Error Toast",
    component: ErrorToast,
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
        message: { control: "text" },
        progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
    },
};
export default meta;
export const ExecutionError = {
    args: {
        message: "Execution Error",
        progress: 66.7,
    },
};
export const ConnectionError = {
    args: {
        message: "Connection Failed",
        progress: 25,
    },
};
export const ValidationError = {
    args: {
        message: "Invalid Transaction",
        progress: 90,
    },
};
export const TimeoutError = {
    args: {
        message: "Request Timeout",
        progress: 50,
    },
};
//# sourceMappingURL=error-toast.stories.js.map