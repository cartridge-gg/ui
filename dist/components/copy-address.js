import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils";
import { Address } from "./address";
export function CopyAddress({ address, className, size, first, last, }) {
    return (_jsx(Address, { address: address, className: cn("text-xs text-foreground-300", className), size: size, first: first, last: last, copyable: true }));
}
//# sourceMappingURL=copy-address.js.map