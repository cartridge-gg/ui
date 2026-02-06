import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../utils";
import { CopyIcon } from "./icons";
import { toast } from "sonner";
import { useCallback } from "react";
export function CopyText({ value, copyValue, className, }) {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(copyValue ?? value);
        toast.success("Copied");
    }, [value, copyValue]);
    return (_jsxs("div", { className: cn("text-xs text-foreground-400 flex items-center gap-1 cursor-pointer", className), onClick: onCopy, children: [value, _jsx(CopyIcon, { size: "xs" })] }));
}
//# sourceMappingURL=copy-text.js.map