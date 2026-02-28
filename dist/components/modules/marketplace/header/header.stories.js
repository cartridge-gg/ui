import { jsx as _jsx } from "react/jsx-runtime";
import { MarketplaceHeader, MarketplaceHeaderReset } from "../../../../index";
const meta = {
    title: "Modules/Marketplace/Header",
    component: MarketplaceHeader,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {},
};
export default meta;
export const Default = {
    render: () => _jsx(MarketplaceHeader, { label: "Properties" }),
};
export const Reset = {
    render: () => (_jsx(MarketplaceHeader, { label: "Properties", children: _jsx(MarketplaceHeaderReset, {}) })),
};
//# sourceMappingURL=header.stories.js.map