import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertIcon, TerminalIcon } from "../components/icons";
import { Alert as UIAlert, AlertDescription, AlertTitle, } from "../components/primitives/alert";
const meta = {
    title: "Primitives/Alert",
    component: Alert,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Alert() {
    return (_jsxs(UIAlert, { children: [_jsx(TerminalIcon, { variant: "line" }), _jsx(AlertTitle, { children: "Heads up!" }), _jsx(AlertDescription, { children: "You can add components and dependencies to your app using the cli." })] }));
}
export function AlertDestructive() {
    return (_jsxs(UIAlert, { variant: "destructive", children: [_jsx(AlertIcon, {}), _jsx(AlertTitle, { children: "Error" }), _jsx(AlertDescription, { children: "Your session has expired. Please log in again." })] }));
}
//# sourceMappingURL=alert.stories.js.map