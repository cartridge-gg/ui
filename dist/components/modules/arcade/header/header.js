import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArcadeIcon } from "../../../../index";
import { useMemo } from "react";
export const ArcadeHeader = ({ cover, children }) => {
    const style = useMemo(() => {
        const bgColor = "var(--background-100)";
        const opacity = "50%";
        const image = cover ? `url(${cover})` : "var(--theme-cover-url)";
        return {
            backgroundImage: `linear-gradient(to right,${bgColor},color-mix(in srgb, ${bgColor} ${opacity}, transparent)),${image}`,
        };
    }, [cover]);
    return (_jsxs("div", { className: "w-full flex gap-x-px h-14", children: [_jsx("div", { className: "flex items-center justify-center bg-background-100 text-primary w-14", children: _jsx(ArcadeIcon, { className: "w-8 h-8" }) }), _jsx("div", { className: "grow flex justify-end items-center gap-2 px-3 py-2 bg-center bg-cover bg-no-repeat select-none", style: style, children: children })] }));
};
export default ArcadeHeader;
//# sourceMappingURL=header.js.map