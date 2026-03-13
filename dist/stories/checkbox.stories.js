import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as UICheckbox } from "../components/primitives/checkbox";
const meta = {
    title: "Primitives/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Checkbox() {
    return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(UICheckbox, { id: "terms" }), _jsx("label", { htmlFor: "terms", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Accept terms and conditions" })] }));
}
//# sourceMappingURL=checkbox.stories.js.map