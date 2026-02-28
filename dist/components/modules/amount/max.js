import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../../../index";
import { cn } from "../../../utils";
export function Max({ label = "Max", onClick = () => { }, className, }) {
    return (_jsx(Button, { className: cn("px-2.5 py-1.5 h-7 rounded bg-background-400 text-foreground-100 text-xs font-semibold tracking-wider normal-case hover:bg-background-500 shadow-none font-sans", className), onClick: onClick, children: label }));
}
//# sourceMappingURL=max.js.map