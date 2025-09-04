import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input as UIInput } from "../components/primitives/input";
import { Label as UILabel } from "../components/primitives/label";
const meta = {
    title: "Primitives/Label",
    component: Label,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Label() {
    return (_jsxs("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [_jsx(UILabel, { htmlFor: "email", children: "Email" }), _jsx(UIInput, { type: "email", id: "email", placeholder: "Email" })] }));
}
//# sourceMappingURL=label.stories.js.map