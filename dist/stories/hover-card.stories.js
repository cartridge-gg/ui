import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HoverCard as UIHoverCard, HoverCardContent, HoverCardTrigger, } from "../components/primitives/hover-card";
const meta = {
    title: "Primitives/Hover Card",
    component: HoverCard,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function HoverCard() {
    return (_jsxs(UIHoverCard, { children: [_jsx(HoverCardTrigger, { children: "Hover" }), _jsx(HoverCardContent, { children: "Some insightful information about the hover trigger" })] }));
}
//# sourceMappingURL=hover-card.stories.js.map