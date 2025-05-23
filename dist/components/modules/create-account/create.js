import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../utils";
import { Status } from "./status";
import { Input } from "../../../index";
export function CreateAccount({ usernameField, validation, error, isLoading, onUsernameChange, onUsernameFocus, onUsernameClear, onKeyDown, }) {
    return (_jsxs("div", { className: cn("flex flex-col border rounded-md border-background-300 bg-background-300", (validation.status === "invalid" || error) &&
            "bg-destructive-100 border-destructive-100"), children: [_jsx(Input, { variant: "username", size: "lg", value: usernameField.value, autoFocus: true, spellCheck: false, placeholder: "Username", className: "relative z-1", onFocus: onUsernameFocus, onChange: (e) => {
                    onUsernameChange(e.target.value.toLowerCase());
                }, onKeyDown: onKeyDown, isLoading: validation.status === "validating", disabled: isLoading, onClear: onUsernameClear }), _jsx(Status, { username: usernameField.value, validation: validation, error: error })] }));
}
export default CreateAccount;
//# sourceMappingURL=create.js.map