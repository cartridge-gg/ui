import { AchievementLabel } from "./label";
const meta = {
    title: "Modules/Achievements/Label",
    component: AchievementLabel,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        icon: "fa-seedling",
        title: "Squire",
        points: 20,
        difficulty: 12,
        timestamp: 1728717697,
        completed: true,
    },
};
export default meta;
export const Default = {};
export const Uncompleted = {
    args: {
        timestamp: undefined,
        completed: false,
    },
};
export const Hidden = {
    args: {
        icon: undefined,
        title: "Hidden Achievement",
        timestamp: undefined,
        completed: false,
    },
};
//# sourceMappingURL=label.stories.js.map