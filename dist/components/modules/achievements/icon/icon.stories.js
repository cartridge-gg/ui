import { AchievementIcon } from "./icon";
const meta = {
    title: "Modules/Achievements/Icon",
    component: AchievementIcon,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        icon: "fa-seedling",
        completed: true,
    },
};
export default meta;
export const Default = {};
export const Donkey = {
    args: {
        icon: "fa-democrat",
        completed: false,
    },
};
export const Crest = {
    args: {
        icon: "fa-khanda",
        completed: true,
    },
};
export const Knight = {
    args: {
        icon: "fa-chess-knight",
        completed: false,
    },
};
//# sourceMappingURL=icon.stories.js.map