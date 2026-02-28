import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../components/primitives/button";
import { toast } from "sonner";
const meta = {
    title: "Primitives/Sonner",
    component: Sonner,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Sonner() {
    return (_jsx(Button, { onClick: () => toast("Event has been created."), children: "Toast" }));
}
//# sourceMappingURL=sonner.stories.js.map