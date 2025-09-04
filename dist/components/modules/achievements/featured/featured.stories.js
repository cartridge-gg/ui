import { AchievementFeatured } from "./featured";
const meta = {
    title: "Modules/Achievements/Featured",
    component: AchievementFeatured,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        icon: "fa-seedling",
        title: "Featured",
    },
};
export default meta;
export const Default = {};
export const Empty = {
    args: {
        icon: undefined,
        title: undefined,
    },
};
export const Medium = {
    args: {
        icon: "fa-seedling",
        title: "Featured Achievement",
    },
};
export const Long = {
    args: {
        icon: "fa-seedling",
        title: "Featured Achievement Detailed",
    },
};
//# sourceMappingURL=featured.stories.js.map