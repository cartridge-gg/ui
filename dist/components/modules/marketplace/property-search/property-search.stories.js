import { jsx as _jsx } from "react/jsx-runtime";
import { MarketplacePropertySearch } from "./property-search";
import { useState } from "react";
const meta = {
    title: "Modules/Marketplace/Property Search",
    component: MarketplacePropertySearch,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        search: "Loot",
    },
};
export default meta;
export const Darkest = {
    render: function Render(args) {
        const [search, setSearch] = useState(args.search || "");
        return (_jsx("div", { className: "flex gap-2", children: _jsx(MarketplacePropertySearch, { variant: "darkest", search: search, setSearch: setSearch }) }));
    },
};
export const Darker = {
    render: function Render(args) {
        const [search, setSearch] = useState(args.search || "");
        return (_jsx("div", { className: "flex gap-2", children: _jsx(MarketplacePropertySearch, { variant: "darker", search: search, setSearch: setSearch }) }));
    },
};
//# sourceMappingURL=property-search.stories.js.map