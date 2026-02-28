import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MarketplaceRadialItem } from "../../../../index";
const meta = {
    title: "Modules/Marketplace/Radial Item",
    component: MarketplaceRadialItem,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        active: false,
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(MarketplaceRadialItem, { label: "Buy Now", active: true }), _jsx(MarketplaceRadialItem, { label: "Buy Now" })] })),
};
//# sourceMappingURL=radial-item.stories.js.map