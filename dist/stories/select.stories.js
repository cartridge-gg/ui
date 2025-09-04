import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select as UISelect, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../components/primitives/select";
const meta = {
    title: "Primitives/Select",
    component: Select,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Select() {
    return (_jsxs(UISelect, { children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Theme" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "light", children: "Light" }), _jsx(SelectItem, { value: "dark", children: "Dark" }), _jsx(SelectItem, { value: "system", children: "System" })] })] }));
}
//# sourceMappingURL=select.stories.js.map