import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertIcon } from "../../../index";
import { cn } from "../../../utils";
export function Error({ label, className }) {
    return (_jsxs("div", { className: cn("flex items-center gap-x-1 text-destructive-100 select-none", !label && "hidden", className), children: [_jsx(AlertIcon, { className: "h-5 w-5" }), _jsx("p", { className: "text-sm", children: label })] }));
}
//# sourceMappingURL=error.js.map