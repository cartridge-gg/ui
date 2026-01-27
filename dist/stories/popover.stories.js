import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover as UIPopover, PopoverContent, PopoverTrigger, } from "../components/primitives/popover";
const meta = {
    title: "Primitives/Popover",
    component: Popover,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Popover() {
    return (_jsxs(UIPopover, { children: [_jsx(PopoverTrigger, { children: "Open" }), _jsx(PopoverContent, { children: "Place content for the popover here." })] }));
}
//# sourceMappingURL=popover.stories.js.map