import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils";
import { InfoIcon, WarningIcon, AlertIcon as AlertIconRaw } from "./utility";
export function ErrorAlertIcon({ variant, size = "sm", className, }) {
    switch (variant) {
        case "info":
            return (_jsx(InfoIcon, { size: size, className: cn("text-[#005299]", className) }));
        case "warning":
            return (_jsx(WarningIcon, { size: size, className: cn("text-[#fac400]", className) }));
        case "error":
            return (_jsx(AlertIconRaw, { size: size, className: cn("text-destructive-100", className) }));
    }
}
//# sourceMappingURL=error-alert-icon.js.map