import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorImage, Spinner } from "../../index";
import { useEffect, useRef, useState, useMemo } from "react";
import { useLayoutContext } from "./context";
import { isIframe, cn } from "../../utils";
export function LayoutContent({ children, className, }) {
    const [scrollbarOpacity, setScrollbarOpacity] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState(1000);
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            setTransitionDuration(150);
            setScrollbarOpacity(0.3);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                setTransitionDuration(300);
                setScrollbarOpacity(0);
            }, 1000);
        };
        const el = containerRef.current;
        if (el) {
            el.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (el)
                el.removeEventListener("scroll", handleScroll);
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
        };
    }, []);
    const { bottomLayout } = useLayoutContext();
    const mbCompensation = useMemo(() => {
        if (!isIframe()) {
            return;
        }
        if (bottomLayout === "tabs") {
            return "[@media(min-width:768px)_and_(min-height:528px)]:mb-[72px]";
        }
        if (bottomLayout === "footer") {
            return "[@media(min-width:768px)_and_(min-height:400px)]:mb-[200px]";
        }
    }, [bottomLayout]);
    return (_jsxs("div", { ref: containerRef, className: cn("h-full sm:h-auto w-full p-4 flex flex-col items-stretch gap-4 overflow-y-scroll", mbCompensation, isIframe() && "flex-1", className), style: {
            scrollbarWidth: "none",
            scrollbarColor: `rgba(100, 100, 100, ${scrollbarOpacity}) transparent`,
            transition: `scrollbar-color ${transitionDuration}ms ease-in-out`,
        }, children: [_jsx("style", { children: `
          ::-webkit-scrollbar-thumb {
            display: none;
            background: rgba(100, 100, 100, ${scrollbarOpacity});
            transition: background ${transitionDuration}ms ease-in-out;
          }
        ` }), children] }));
}
export function LayoutContentLoader() {
    return (_jsx(LayoutContent, { className: "h-full w-full items-center justify-center pb-4 select-none", children: _jsx("div", { className: "w-full flex justify-center items-center h-full border border-dashed rounded-md border-background-400 mb-4", children: _jsx(Spinner, { className: "text-foreground-400", size: "lg" }) }) }));
}
export function LayoutContentError({ children = "Oops! Something went wrong.", }) {
    return (_jsxs(LayoutContent, { className: "h-full items-center gap-8 p-8", children: [_jsx("div", { className: "text-semibold", children: children }), _jsx(ErrorImage, {})] }));
}
//# sourceMappingURL=content.js.map