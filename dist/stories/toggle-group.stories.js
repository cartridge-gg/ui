import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToggleGroup as UIToggleGroup, ToggleGroupItem, } from "../components/primitives/toggle-group";
const meta = {
    title: "Primitives/Toggle Group",
    component: ToggleGroup,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function ToggleGroup() {
    return (_jsxs(UIToggleGroup, { type: "single", children: [_jsx(ToggleGroupItem, { value: "a", children: "A" }), _jsx(ToggleGroupItem, { value: "b", children: "B" }), _jsx(ToggleGroupItem, { value: "c", children: "C" })] }));
}
//# sourceMappingURL=toggle-group.stories.js.map