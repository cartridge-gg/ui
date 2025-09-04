import { jsx as _jsx } from "react/jsx-runtime";
import { Button, cn, ShoppingCancelIcon, ShoppingCartIcon, TagIcon, } from "../../../../index";
export function CollectibleItemAction({ variant, className, ...props }) {
    return (_jsx(Button, { variant: "secondary", className: cn("min-h-10 min-w-10 p-0", className), "aria-label": "Action item", ...props, children: (() => {
            switch (variant) {
                case "list":
                    return _jsx(TagIcon, { variant: "solid", size: "default" });
                case "unlist":
                    return (_jsx(ShoppingCancelIcon, { variant: "solid", size: "default", className: "text-destructive-100" }));
                case "purchase":
                    return (_jsx(ShoppingCartIcon, { variant: "solid", size: "default", className: "text-constructive-100" }));
                default:
                    return null;
            }
        })() }));
}
export default CollectibleItemAction;
//# sourceMappingURL=item-action.js.map