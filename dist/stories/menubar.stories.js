import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menubar as UIMenubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger, } from "../components/primitives/menubar";
const meta = {
    title: "Primitives/Menubar",
    component: Menubar,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Menubar() {
    return (_jsx(UIMenubar, { children: _jsxs(MenubarMenu, { children: [_jsx(MenubarTrigger, { children: "File" }), _jsxs(MenubarContent, { children: [_jsxs(MenubarItem, { children: ["New Tab ", _jsx(MenubarShortcut, { children: "\u2318T" })] }), _jsx(MenubarItem, { children: "New Window" }), _jsx(MenubarSeparator, {}), _jsx(MenubarItem, { children: "Share" }), _jsx(MenubarSeparator, {}), _jsx(MenubarItem, { children: "Print" })] })] }) }));
}
//# sourceMappingURL=menubar.stories.js.map