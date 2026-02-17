import { AchievementContent } from "./content";
const meta = {
    title: "Modules/Achievements/Content",
    component: AchievementContent,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        icon: "fa-seedling",
        title: "Squire",
        description: "Every journey begins with a single step",
        points: 20,
        difficulty: 12,
        tasks: [{ id: "1", count: 1, total: 1, description: "Finish onboarding" }],
        timestamp: 1728717697,
    },
};
export default meta;
export const Default = {};
export const Uncompleted = {
    args: {
        icon: "fa-rocket",
        title: "Voyager",
        description: "Fortune favors the bold",
        points: 20,
        difficulty: 12,
        tasks: [
            { id: "1", count: 1, total: 1, description: "Discover a tile" },
            {
                id: "2",
                count: 0,
                total: 1,
                description: "Discover an ancient fragment",
            },
        ],
        timestamp: undefined,
    },
};
export const Hidden = {
    args: {
        hidden: true,
        tasks: [{ id: "1", count: 1, total: 2, description: "Finish onboarding" }],
        timestamp: undefined,
    },
};
//# sourceMappingURL=content.stories.js.map