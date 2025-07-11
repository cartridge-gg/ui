import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DropdownMenu as UIDropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuSubTrigger, DropdownMenuSub, DropdownMenuRadioItem, DropdownMenuRadioGroup, } from "../components/primitives/dropdown-menu";
const meta = {
    title: "Primitives/Dropdown Menu",
    component: DropdownMenu,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function DropdownMenu() {
    return (_jsxs(UIDropdownMenu, { children: [_jsx(DropdownMenuTrigger, { children: "Open" }), _jsxs(DropdownMenuContent, { defaultValue: "Profile", children: [_jsx(DropdownMenuLabel, { children: "My Account" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Profile" }), _jsx(DropdownMenuItem, { children: "Billing" }), _jsx(DropdownMenuItem, { children: "Team" }), _jsx(DropdownMenuItem, { children: "Subscription" }), _jsx(DropdownMenuCheckboxItem, { checked: true, children: "Checkbox Item 1" }), _jsxs(DropdownMenuRadioGroup, { value: "radio-item-1", children: [_jsx(DropdownMenuRadioItem, { value: "radio-item-1", children: "Radio Item 1" }), _jsx(DropdownMenuRadioItem, { value: "radio-item-2", children: "Radio Item 2" })] }), _jsx(DropdownMenuSub, { children: _jsx(DropdownMenuSubTrigger, { children: "Subtrigger" }) })] })] }));
}
//# sourceMappingURL=dropdown-menu.stories.js.map