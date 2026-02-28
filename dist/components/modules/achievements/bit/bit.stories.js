import { AchievementBit } from "./bit";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Achievements/Bit",
    component: AchievementBit,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        completed: false,
        active: false,
        onClick: fn(),
    },
};
export default meta;
export const Default = {};
export const Completed = {
    args: {
        completed: true,
    },
};
export const Active = {
    args: {
        active: true,
    },
};
export const ActiveCompleted = {
    args: {
        completed: true,
        active: true,
    },
};
//# sourceMappingURL=bit.stories.js.map