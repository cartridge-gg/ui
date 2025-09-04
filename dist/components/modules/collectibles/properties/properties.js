import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle, CollectibleProperty, } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const collectiblePropertiesVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleProperties({ properties, variant, className, ...props }) {
    return (_jsxs(Card, { ...props, className: cn(collectiblePropertiesVariants({ variant }), className), children: [_jsx(CardHeader, { className: "h-10", children: _jsx(CardTitle, { className: "text-xs text-foreground-400 font-semibold tracking-wider", children: "Properties" }) }), _jsxs(CardContent, { className: "bg-background grid grid-cols-3 p-0 gap-px", children: [properties.map((property, index) => (_jsx(CollectibleProperty, { name: property.name, value: property.value || property.value === 0
                            ? String(property.value)
                            : "?" }, `${property.name}-${index}`))), Array.from({ length: 2 - ((properties.length - 1) % 3) }).map((_, i) => (_jsx("div", { className: "bg-background-150 p-3 flex flex-col gap-1" }, `fill-${i}`)))] })] }));
}
export default CollectibleProperties;
//# sourceMappingURL=properties.js.map