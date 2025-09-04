import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MarketplacePropertyHeader, MarketplacePropertyFilter, MarketplaceSearchEngine, } from "../../../../index";
import { useState } from "react";
const meta = {
    title: "Modules/Marketplace/Property Header",
    component: MarketplacePropertyHeader,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        label: "Name",
        count: 17,
    },
};
export default meta;
export const Default = {
    render: function Render(args) {
        const [search, setSearch] = useState("");
        return (_jsxs(MarketplacePropertyHeader, { ...args, children: [_jsx(MarketplaceSearchEngine, { variant: "darkest", search: search, setSearch: setSearch }), _jsxs("div", { className: "flex flex-col gap-px", children: [_jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 }), _jsx(MarketplacePropertyFilter, { label: "Property Name", count: 100 })] })] }));
    },
};
//# sourceMappingURL=property-header.stories.js.map