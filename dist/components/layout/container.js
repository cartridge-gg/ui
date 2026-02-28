import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isIframe, cn } from "../../utils";
import { useEffect, useState } from "react";
import { LayoutContext } from "./context";
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);
        const listener = (e) => {
            setMatches(e.matches);
        };
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);
    return matches;
}
export function LayoutContainer({ children, className, }) {
    const [withBackground, setWithBackground] = useState(false);
    const [bottomLayout, setBottomLayout] = useState("none");
    return (_jsx(LayoutContext.Provider, { value: {
            withBackground,
            setWithBackground,
            bottomLayout,
            setBottomLayout,
        }, children: _jsxs(ResponsiveWrapper, { children: [_jsx("div", { className: cn("fixed inset-0 bg-translucent-dark-200 opacity-0 z-50", "transition-opacity duration-150", // This duration manage the modal fade in
                    withBackground
                        ? "opacity-100 visible"
                        : "invisible pointer-events-none"), onClick: () => setWithBackground(false) }), _jsx("div", { className: cn("flex flex-col flex-1 min-h-0 overflow-x-hidden z-10", className), style: { scrollbarWidth: "none" }, children: children })] }) }));
}
function ResponsiveWrapper({ children }) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
        return (_jsx("div", { className: "flex w-screen h-dvh items-center justify-center", children: _jsx("div", { className: cn("w-desktop border border-background-200 rounded-xl flex flex-col relative overflow-hidden align-middle", !isIframe() && "w-[432px] max-h-[600px]"), children: children }) }));
    }
    return (_jsx("div", { className: "w-screen h-dvh max-w-desktop relative flex flex-col bg-background", children: children }));
}
//# sourceMappingURL=container.js.map