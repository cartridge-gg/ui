import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LayoutContainer, LayoutContent, LayoutHeader, LayoutFooter, } from "./index";
const meta = {
    title: "Layout/Index",
    component: Default,
    tags: ["autodocs"],
};
export default meta;
export function Default() {
    return (_jsxs(LayoutContainer, { children: [_jsx(LayoutHeader, { title: "Welcome to Keychain", description: "Secure your digital assets" }), _jsx(LayoutContent, { className: "bg-background-500 items-center justify-center", children: "<LayoutContent />" }), _jsx(LayoutFooter, { className: "bg-destructive text-foreground-400 flex items-center justify-center", children: "<LayoutFooter />" })] }));
}
export function Scroll() {
    return (_jsxs(LayoutContainer, { children: [_jsx(LayoutHeader, { title: "Welcome to Keychain", description: "Secure your digital assets" }), _jsx(LayoutContent, { className: "min-h-[800px] bg-background-500 items-center justify-center", children: "Long <LayoutContent />" }), _jsx(LayoutFooter, { className: "bg-destructive text-foreground-400 flex items-center justify-center", children: "<LayoutFooter />" })] }));
}
//# sourceMappingURL=index.stories.js.map