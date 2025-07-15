import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollectibleItems } from "./items";
import { CollectibleItem } from "../../../../index";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Collectibles/Items",
    component: CollectibleItems,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
};
export default meta;
export const Default = {
    render: function Render() {
        return (_jsxs(CollectibleItems, { className: "", children: [_jsx(CollectibleItem, { owner: "shinobi", quantity: 1, action: "list", onActionClick: fn() }), _jsx(CollectibleItem, { owner: "yourwurstknightmare", quantity: 1, price: "$24", expiration: "1mo", action: "unlist", onActionClick: fn() }), _jsx(CollectibleItem, { owner: "shinobi", quantity: 1, price: "$24", expiration: "1mo", action: "purchase", onActionClick: fn() })] }));
    },
};
//# sourceMappingURL=items.stories.js.map