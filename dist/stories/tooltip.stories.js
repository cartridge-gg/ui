import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../components/primitives/tooltip";
const meta = {
    title: "Primitives/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Tooltip() {
    return (_jsx(TooltipProvider, { children: _jsxs(UITooltip, { children: [_jsx(TooltipTrigger, { children: "Hover" }), _jsx(TooltipContent, { children: _jsx("p", { children: "Add to library" }) })] }) }));
}
//# sourceMappingURL=tooltip.stories.js.map