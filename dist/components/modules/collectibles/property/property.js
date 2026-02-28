import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useCallback } from "react";
const collectiblePropertyVariants = cva("p-3 flex flex-col gap-2 ", {
    variants: {
        variant: {
            default: "bg-background-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleProperty({ name, value, variant, className, ...props }) {
    const format = useCallback((value) => {
        // Replace underscores with spaces
        // Capitalize first letter of each word
        return value
            .replace(/_/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }, []);
    return (_jsxs("div", { className: cn(collectiblePropertyVariants({ variant }), className), ...props, children: [name && (_jsx("p", { className: "text-foreground-300 text-xs font-semibold tracking-wider", children: format(name) })), value && (_jsx("p", { className: "text-foreground-100 text-xs font-medium", children: format(value) }))] }));
}
export default CollectibleProperty;
//# sourceMappingURL=property.js.map