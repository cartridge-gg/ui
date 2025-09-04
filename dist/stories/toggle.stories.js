import { jsx as _jsx } from "react/jsx-runtime";
import { MoonIcon } from "../components/icons";
import { Toggle as UIToggle } from "../components/primitives/toggle";
const meta = {
    title: "Primitives/Toggle",
    component: Toggle,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Toggle() {
    return (_jsx(UIToggle, { "aria-label": "Toggle bold", children: _jsx(MoonIcon, { variant: "solid" }) }));
}
//# sourceMappingURL=toggle.stories.js.map