import { AchievementTask } from "./task";
const meta = {
    title: "Modules/Achievements/Task",
    component: AchievementTask,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        count: 1,
        total: 2,
        description: "Task description",
    },
};
export default meta;
export const Default = {};
export const Completed = {
    args: {
        count: 2,
        completed: true,
    },
};
export const Long = {
    args: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
};
export const LongCompleted = {
    args: {
        count: 2,
        completed: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        completed: true,
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
        completed: true,
    },
};
//# sourceMappingURL=task.stories.js.map