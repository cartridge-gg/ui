import { AchievementPin } from "./pin";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Achievements/Pin",
    component: AchievementPin,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        pinned: false,
        disabled: false,
        onClick: fn(),
    },
};
export default meta;
export const Default = {};
export const Active = {
    args: {
        pinned: true,
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
//# sourceMappingURL=pin.stories.js.map