import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sheet as UISheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "../components/primitives/sheet";
const meta = {
    title: "Primitives/Sheet",
    component: Sheet,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Sheet() {
    return (_jsxs(UISheet, { children: [_jsx(SheetTrigger, { children: "Open" }), _jsx(SheetContent, { children: _jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Are you absolutely sure?" }), _jsx(SheetDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })] }) })] }));
}
//# sourceMappingURL=sheet.stories.js.map