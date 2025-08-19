import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalIcon } from "../../../index";
import { cn } from "../../../utils";
import { useMemo } from "react";
export function Status({ username, validation, error }) {
    const isError = validation.status === "invalid" || error;
    const isTimeoutError = error?.message?.includes("The operation either timed out or was not allowed");
    const errorMessage = useMemo(() => {
        if (validation.error) {
            return validation.error.message;
        }
        if (isTimeoutError) {
            return "Passkey signing timed out or was canceled. Please try again.";
        }
        return error?.message;
    }, [validation, error, isTimeoutError]);
    const message = useMemo(() => {
        return isError
            ? errorMessage
            : !username
                ? "Enter a Username"
                : validation.status === "validating"
                    ? "Checking username..."
                    : validation.status === "valid"
                        ? validation.exists
                            ? "Welcome! Select Log In to play"
                            : "Welcome! Let's create a new Controller"
                        : validation.error?.message || "Enter a Username";
    }, [validation, errorMessage, username, isError]);
    return (_jsxs("div", { className: "flex flex-col bg-translucent-dark-100 gap-y-px", children: [_jsx(Block, { error: !!isError, children: message }), isTimeoutError && _jsx(HelpBlock, {})] }));
}
function Block({ children, error, className, }) {
    return (_jsx("div", { className: cn("flex justify-between items-center text-xs px-3 py-2 w-full box-border min-w-0", error
            ? "bg-destructive-100 text-destructive-foreground"
            : "bg-background-300 text-foreground-300", className), children: _jsx("span", { className: "break-words min-w-0 flex-1", children: children }) }));
}
function HelpBlock() {
    return (_jsx(Block, { error: true, children: _jsxs("div", { className: "flex items-center justify-between w-full gap-2", children: [_jsx("span", { className: "min-w-0 flex-shrink", children: "Having trouble signing up?" }), _jsxs("a", { href: "https://docs.cartridge.gg/controller/passkey-support", target: "_blank", className: "flex items-center gap-1 hover:underline flex-shrink-0", children: [_jsx("span", { children: "Controller Docs" }), _jsx(ExternalIcon, { size: "xs" })] })] }) }));
}
//# sourceMappingURL=status.js.map