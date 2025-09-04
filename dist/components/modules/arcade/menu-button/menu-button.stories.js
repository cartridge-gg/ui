import { jsx as _jsx } from "react/jsx-runtime";
import { ArcadeMenuButton } from "./menu-button";
import { Select } from "../../../../index";
const Wrapper = ({ children }) => (_jsx(Select, { children: children }));
const meta = {
    title: "Modules/Arcade/Menu Button",
    component: ArcadeMenuButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(Wrapper, { children: _jsx(ArcadeMenuButton, { variant: "default" }) })),
};
export const Active = {
    render: () => (_jsx(Wrapper, { children: _jsx(ArcadeMenuButton, { active: true, variant: "default" }) })),
};
//# sourceMappingURL=menu-button.stories.js.map