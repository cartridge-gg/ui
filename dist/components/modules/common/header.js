import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from "../../../index";
import { cn } from "../../../utils";
export function Header({ label = "Amount", className }) {
    return (_jsx(Label, { className: cn("py-3 text-xs font-semibold normal-case tracking-wider text-foreground-400 select-none", className), children: label }));
}
//# sourceMappingURL=header.js.map