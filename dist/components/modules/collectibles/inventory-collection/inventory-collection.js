import { jsx as _jsx } from "react/jsx-runtime";
import { CollectibleCard } from "../../../../index";
export function InventoryCollectionCard({ title, images, icon, backgroundColor, totalCount, 
// listingCount,
// price,
// lastSale,
// selectable = true,
// selected,
onSelect, variant, className, onError, ...props }) {
    return (_jsx(CollectibleCard, { title: title, images: images, icon: icon, backgroundColor: backgroundColor, totalCount: totalCount, listingCount: undefined, price: undefined, lastSale: undefined, selected: false, selectable: false, onSelect: onSelect, variant: variant, className: className, onError: onError, ...props }));
}
export default InventoryCollectionCard;
//# sourceMappingURL=inventory-collection.js.map