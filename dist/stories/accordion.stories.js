import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion as UIAccordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../components/primitives/accordion";
import { CircleIcon, InfoIcon } from "../";
const meta = {
    title: "Primitives/Accordion",
    component: Accordion,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
// args: { },
};
function Accordion({ triggerColor }) {
    return (_jsx(UIAccordion, { type: "single", collapsible: true, children: _jsxs(AccordionItem, { value: "item-1", children: [_jsxs(AccordionTrigger, { className: "gap-1", color: triggerColor, children: ["Approve", " ", _jsx("span", { className: "text-foreground-200 font-bold", children: "2 methods" })] }), _jsx(AccordionContent, { className: "gap-px", children: Array.from({ length: 3 }).map((_, i) => (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(CircleIcon, { size: "sm", className: "text-foreground-400" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { children: ["Method ", i + 1] }), _jsx(InfoIcon, { size: "sm", className: "text-foreground-400" })] })] }, i + 1))) })] }) }));
}
export const TriggerColor = {
    args: {
        triggerColor: "text-destructive-100",
    },
};
//# sourceMappingURL=accordion.stories.js.map