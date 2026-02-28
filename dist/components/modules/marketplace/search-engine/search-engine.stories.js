import { jsx as _jsx } from "react/jsx-runtime";
import { OlmechIcon, MarketplaceSearchCard, MarketplaceSearchEngine, } from "../../../../index";
import { useState } from "react";
const meta = {
    title: "Modules/Marketplace/Search Engine",
    component: MarketplaceSearchEngine,
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
        return (_jsx("div", { className: "flex gap-2", children: _jsx(MarketplaceSearchEngine, { variant: "darkest", search: search, setSearch: setSearch }) }));
    },
};
export const Darker = {
    render: function Render(args) {
        const [search, setSearch] = useState(args.search || "");
        return (_jsx("div", { className: "flex gap-2", children: _jsx(MarketplaceSearchEngine, { variant: "darker", search: search, setSearch: setSearch }) }));
    },
};
export const Cards = {
    render: function Render(args) {
        const [search, setSearch] = useState(args.search || "");
        return (_jsx("div", { className: "flex gap-2", children: _jsx(MarketplaceSearchEngine, { variant: "darkest", search: search, setSearch: setSearch, cards: [
                    _jsx(MarketplaceSearchCard, { image: _jsx(OlmechIcon, { variant: "one", className: "h-full w-full" }), label: "ashe" }),
                    _jsx(MarketplaceSearchCard, { image: _jsx(OlmechIcon, { variant: "seven", className: "h-full w-full" }), label: "bal7hazar" }),
                ] }) }));
    },
};
//# sourceMappingURL=search-engine.stories.js.map