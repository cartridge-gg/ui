import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatAddress, cn } from "../utils";
import { CopyIcon } from "./icons";
import { toast } from "sonner";
import { useCallback } from "react";
import { addAddressPadding } from "starknet";
/**
 * A component for consistently rendering Starknet addresses across the application
 */
export function Address({ address, className, size, first, last, copyable = false, monospace = true, explorerUrl, }) {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(addAddressPadding(address));
        toast.success("Address copied");
    }, [address]);
    const formattedAddress = formatAddress(address, { first, last, size });
    const content = copyable ? (_jsxs("div", { className: cn("flex items-center gap-1 cursor-pointer", monospace && "font-mono", "text-primary", className), onClick: onCopy, children: [formattedAddress, _jsx(CopyIcon, { size: "xs" })] })) : (_jsx("span", { className: cn(monospace && "font-mono", "text-primary", className), children: formattedAddress }));
    if (explorerUrl) {
        return (_jsx("a", { href: explorerUrl, target: "_blank", rel: "noopener noreferrer", className: "hover:underline", onClick: (e) => copyable && e.preventDefault(), children: content }));
    }
    return content;
}
//# sourceMappingURL=address.js.map