import { jsx as _jsx } from "react/jsx-runtime";
import { CollectibleCard } from "../../../../index";
export function InventoryItemCard({ title, images, 
// icon,
backgroundColor, totalCount, listingCount, 
// price,
// lastSale,
selectable = true, selected, onSelect, variant, className, onError, ...props }) {
    return (_jsx(CollectibleCard, { title: title, images: images, icon: undefined, backgroundColor: backgroundColor, totalCount: totalCount && totalCount > 1 ? totalCount : undefined, listingCount: listingCount, price: undefined, lastSale: undefined, selected: selected, selectable: selectable, onSelect: onSelect, variant: variant, className: className, onError: onError, ...props }));
}
export default InventoryItemCard;
//# sourceMappingURL=inventory-item.js.map