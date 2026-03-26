import { jsx as _jsx } from "react/jsx-runtime";
import { MarketplaceSearch, OlmechIcon } from "../../../../index";
import { useMemo, useState } from "react";
const meta = {
    title: "Modules/Marketplace/Search",
    component: MarketplaceSearch,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        search: "a",
    },
};
const data = [
    {
        image: _jsx(OlmechIcon, { variant: "one", className: "h-full w-full" }),
        label: "ashe",
    },
    {
        image: _jsx(OlmechIcon, { variant: "two", className: "h-full w-full" }),
        label: "ashetest",
    },
    {
        image: _jsx(OlmechIcon, { variant: "three", className: "h-full w-full" }),
        label: "bal7hazar",
    },
    {
        image: _jsx(OlmechIcon, { variant: "four", className: "h-full w-full" }),
        label: "yourwurstknightmare-yourwurstknightmare",
    },
];
export default meta;
export const Darkest = {
    render: function Render(args) {
        const [search, setSearch] = useState(args.search || "");
        const [selected, setSelected] = useState(undefined);
        const options = useMemo(() => {
            if (!search)
                return [];
            return data.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));
        }, [search]);
        return (_jsx(MarketplaceSearch, { search: search, setSearch: setSearch, selected: selected, setSelected: setSelected, options: options, variant: "darkest", className: "w-[200px] lg:w-[240px]" }));
    },
};
export const Darker = {
    render: function Render(args) {
        const [search, setSearch] = useState(args.search || "");
        const [selected, setSelected] = useState(undefined);
        const options = useMemo(() => {
            if (!search)
                return [];
            return data.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));
        }, [search]);
        return (_jsx(MarketplaceSearch, { search: search, setSearch: setSearch, selected: selected, setSelected: setSelected, options: options, variant: "darker", className: "w-[200px] md:w-[240px]" }));
    },
};
//# sourceMappingURL=search.stories.js.map