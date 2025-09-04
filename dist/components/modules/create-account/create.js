import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../utils";
import { Status } from "./status";
import { Input } from "../../../index";
import * as React from "react";
export const CreateAccount = React.forwardRef(({ usernameField, validation, error, isLoading, autoFocus = false, onUsernameChange, onUsernameFocus, onUsernameClear, onKeyDown, }, ref) => {
    const internalRef = React.useRef(null);
    // Use imperative handle to expose the input ref
    React.useImperativeHandle(ref, () => internalRef.current);
    // Handle auto-focus internally
    React.useEffect(() => {
        if (autoFocus && internalRef.current) {
            internalRef.current.focus();
        }
    }, [autoFocus]);
    return (_jsxs("div", { className: cn("flex flex-col border rounded-md border-background-300 bg-background-300", (validation.status === "invalid" || error) &&
            "bg-destructive-100 border-destructive-100"), children: [_jsx(Input, { ref: internalRef, variant: "username", size: "lg", value: usernameField.value, spellCheck: false, placeholder: "Username", className: "relative z-1", onFocus: onUsernameFocus, onChange: (e) => {
                    onUsernameChange(e.target.value.toLowerCase());
                }, onKeyDown: onKeyDown, isLoading: validation.status === "validating", disabled: isLoading, onClear: onUsernameClear }), _jsx(Status, { username: usernameField.value, validation: validation, error: error })] }));
});
CreateAccount.displayName = "CreateAccount";
export default CreateAccount;
//# sourceMappingURL=create.js.map