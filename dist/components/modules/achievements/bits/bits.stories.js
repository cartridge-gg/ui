import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementBits } from "./bits";
import { AchievementBit } from "../bit/bit";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Achievements/Bits",
    component: AchievementBits,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(AchievementBits, { children: [_jsx(AchievementBit, { completed: true, onClick: fn() }), _jsx(AchievementBit, { completed: true, onClick: fn() }), _jsx(AchievementBit, { completed: true, active: true, onClick: fn() })] })),
};
export const Mixed = {
    render: () => (_jsxs(AchievementBits, { children: [_jsx(AchievementBit, { completed: true, onClick: fn() }), _jsx(AchievementBit, { active: true, onClick: fn() }), _jsx(AchievementBit, { onClick: fn() })] })),
};
//# sourceMappingURL=bits.stories.js.map