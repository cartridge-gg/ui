import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MarketplacePropertyFilter } from "../../../../index";
const meta = {
    title: "Modules/Marketplace/Property Filter",
    component: MarketplacePropertyFilter,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        label: "Property Name",
        count: 100,
    },
};
export default meta;
export const Default = {
    render: () => {
        return (_jsxs("div", { className: "flex flex-col gap-px", children: [_jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100, value: true }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100, value: true }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100, disabled: true }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100, value: true, disabled: true })] }));
    },
};
export const Unselected = {
    args: {},
};
export const Selected = {
    args: {
        value: true,
    },
};
//# sourceMappingURL=property-filter.stories.js.map