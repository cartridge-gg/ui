import { AchievementTaskStatus } from "./task-status";
const meta = {
    title: "Modules/Achievements/Status",
    component: AchievementTaskStatus,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        count: 1,
        total: 2,
    },
};
export default meta;
export const Default = {};
export const Completed = {
    args: {
        count: 2,
    },
};
export const Single = {
    args: {
        count: 0,
        total: 1,
    },
};
export const SingleCompleted = {
    args: {
        count: 1,
        total: 1,
    },
};
export const Large = {
    args: {
        count: 1000000,
        total: 2000000,
    },
};
export const LargeCompleted = {
    args: {
        count: 2000000,
    },
};
//# sourceMappingURL=task-status.stories.js.map