import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils";
import { SpinnerIcon } from "./icons";
export function Spinner({ className, ...props }) {
    return (_jsx(SpinnerIcon, { className: cn("animate-spin text-foreground-400", className), ...props }));
}
//# sourceMappingURL=spinner.js.map