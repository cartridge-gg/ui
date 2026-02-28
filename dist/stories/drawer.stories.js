import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../components/primitives/button";
import { Drawer as UIDrawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, } from "../components/primitives/drawer";
const meta = {
    title: "Primitives/Drawer",
    component: Drawer,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Drawer() {
    return (_jsxs(UIDrawer, { children: [_jsx(DrawerTrigger, { children: "Open" }), _jsxs(DrawerContent, { children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Are you absolutely sure?" }), _jsx(DrawerDescription, { children: "This action cannot be undone." })] }), _jsxs(DrawerFooter, { children: [_jsx(Button, { children: "Submit" }), _jsx(DrawerClose, { children: _jsx(Button, { variant: "outline", className: "w-full", children: "Cancel" }) })] })] })] }));
}
//# sourceMappingURL=drawer.stories.js.map