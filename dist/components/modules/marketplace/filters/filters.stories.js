import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from "react";
import { MarketplaceFilters, MarketplacePropertyHeader, MarketplaceSearchEngine, MarketplacePropertyFilter, MarketplaceRadialItem, MarketplaceHeaderReset, MarketplaceHeader, MarketplacePropertyEmpty, } from "../../../../index";
const ATTRIBUTES = [
    "Name",
    "XP",
    "Level",
    "Health",
    "Gold",
    "Strength",
    "Dexterity",
    "Intelligence",
    "Vitality",
    "Wisdom",
];
const PROPERTIES = [1, 2, 3, 4, 5];
const meta = {
    title: "Modules/Marketplace/Marketplace Filters",
    component: MarketplaceFilters,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
};
export default meta;
export const Default = {
    render: function Render() {
        const [active, setActive] = useState(0);
        const [search, setSearch] = useState({});
        const [selected, setSelected] = useState({});
        const reset = useMemo(() => {
            return Object.values(selected).filter((value) => !!value).length > 0;
        }, [selected]);
        const clear = useCallback(() => {
            setSelected({});
            setSearch({});
        }, []);
        return (_jsxs(MarketplaceFilters, { children: [_jsx(MarketplaceHeader, { label: "Status" }), _jsxs("div", { className: "flex flex-col gap-2 w-fit", children: [_jsx(MarketplaceRadialItem, { label: "Buy Now", active: active === 0, onClick: () => setActive(0) }), _jsx(MarketplaceRadialItem, { label: "Show All", active: active === 1, onClick: () => setActive(1) })] }), _jsx(MarketplaceHeader, { label: "Properties", children: reset && _jsx(MarketplaceHeaderReset, { onClick: clear }) }), ATTRIBUTES.map((label, index) => (_jsxs(MarketplacePropertyHeader, { label: label, count: 17, children: [_jsx(MarketplaceSearchEngine, { variant: "darkest", search: search[label] || "", setSearch: (value) => setSearch((prev) => ({ ...prev, [label]: value })) }), _jsxs("div", { className: "flex flex-col gap-px", children: [PROPERTIES.filter((i) => `Property ${label} ${i}`
                                    .toLowerCase()
                                    .includes((search[label] || "").toLowerCase())).map((i) => (_jsx(MarketplacePropertyFilter, { label: `Property ${label} ${i}`, count: 100, value: selected[label + i] || false, setValue: (value) => setSelected((prev) => ({ ...prev, [label + i]: value })) }, i))), PROPERTIES.filter((i) => `Property ${label} ${i}`
                                    .toLowerCase()
                                    .includes((search[label] || "").toLowerCase())).length === 0 && _jsx(MarketplacePropertyEmpty, {})] })] }, index)))] }));
    },
};
//# sourceMappingURL=filters.stories.js.map