import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card as UICard, CardContent, CardDescription, CardHeader, CardTitle, CardIcon, CardListContent, CardListItem, } from "../components/primitives/card";
import { EthereumIcon } from "../components/icons";
import { useEffect } from "react";
import { PLACEHOLDER } from "../assets";
const meta = {
    title: "Primitives/Card",
    component: Card,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        title: "Card Title",
        description: "Card Description",
    },
};
export const OnlyTitle = {
    args: {
        title: "Card Title",
    },
};
export const IconHeader = {
    args: {
        title: "Card Title",
        icon: _jsx(CardIcon, {}),
    },
};
export const CardList = {
    args: {
        variant: "list",
        title: "Card List Content",
    },
};
function Card({ variant = "content", title, description, icon, }) {
    useEffect(() => {
        if (!icon)
            return;
        document.documentElement.style.setProperty("--theme-icon-url", `url("https://static.cartridge.gg/presets/slot/icon.svg")`);
    }, [icon]);
    switch (variant) {
        case "content": {
            return (_jsxs(UICard, { children: [_jsxs(CardHeader, { icon: icon, children: [_jsx(CardTitle, { children: title }), description && _jsx(CardDescription, { children: description })] }), _jsx(CardContent, { children: _jsx("p", { children: "Card Content" }) })] }));
        }
        case "list": {
            return (_jsxs(UICard, { children: [_jsxs(CardHeader, { icon: icon, children: [_jsx(CardTitle, { children: title }), description && _jsx(CardDescription, { children: description })] }), _jsxs(CardListContent, { children: [_jsx(CardListItem, { children: "No icon item" }), _jsx(CardListItem, { icon: PLACEHOLDER, children: "placeholder" }), _jsxs(CardListItem, { icon: _jsx(EthereumIcon, {}), children: [_jsxs("div", { className: "flex items-center gap-2", children: ["0.01 ", _jsx("span", { className: "text-foreground-400", children: "ETH" })] }), _jsx("div", { className: "text-foreground-400", children: "$3500.00" })] }), _jsxs(CardListItem, { icon: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/1b126320-367c-48ed-cf5a-ba7580e49600/logo", children: [_jsxs("div", { className: "flex items-center gap-2", children: ["100 ", _jsx("span", { className: "text-foreground-400", children: "STRK" })] }), _jsx("div", { className: "text-foreground-400", children: "$50.00" })] })] })] }));
        }
    }
}
//# sourceMappingURL=card.stories.js.map