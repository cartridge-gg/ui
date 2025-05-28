import { jsx as _jsx } from "react/jsx-runtime";
import { BottomTab } from "../components/primitives/index";
import { ChestIcon } from "../components/icons";
const meta = {
    title: "Primitives/BottomTab",
    component: BottomTab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        children: undefined,
    },
};
export default meta;
export const Chest = {
    args: {
        children: _jsx(ChestIcon, { variant: "solid", size: "lg" }),
    },
};
export const ChestActive = {
    args: {
        status: "active",
        children: _jsx(ChestIcon, { variant: "solid", size: "lg" }),
    },
};
//# sourceMappingURL=bottom-tab.stories.js.map