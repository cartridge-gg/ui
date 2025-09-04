import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "../components/primitives/label";
import { RadioGroup as UIRadioGroup, RadioGroupItem, } from "../components/primitives/radio-group";
const meta = {
    title: "Primitives/Radio Group",
    component: RadioGroup,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function RadioGroup() {
    return (_jsxs(UIRadioGroup, { defaultValue: "option-one", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-one", id: "option-one" }), _jsx(Label, { htmlFor: "option-one", children: "Option One" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-two", id: "option-two" }), _jsx(Label, { htmlFor: "option-two", children: "Option Two" })] })] }));
}
//# sourceMappingURL=radio-group.stories.js.map