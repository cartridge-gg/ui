import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectibleItemDetails, CollectibleItemAction } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const collectibleItemVariants = cva("flex gap-3 w-full overflow-hidden", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleItem({ owner, quantity, price, logo, expiration, action, onActionClick, variant, className, ...props }) {
    return (_jsxs("div", { className: cn(collectibleItemVariants({ variant }), className), ...props, children: [_jsx(CollectibleItemDetails, { owner: owner, quantity: quantity, price: price, logo: logo, expiration: expiration }), _jsx(CollectibleItemAction, { variant: action, onClick: onActionClick })] }));
}
export default CollectibleItem;
//# sourceMappingURL=item.js.map