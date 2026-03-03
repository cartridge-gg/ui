import { ProgressBar } from "./progress-bar";
const meta = {
    title: "Modules/ProgressBar",
    component: ProgressBar,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        count: 2,
        total: 2,
        completed: true,
    },
};
export default meta;
export const Default = {};
export const DefaultUncompleted = {
    args: {
        completed: false,
    },
};
export const HalfCompleted = {
    args: {
        count: 1,
        completed: true,
    },
};
export const HalfUncompleted = {
    args: {
        count: 1,
        completed: false,
    },
};
export const Empty = {
    args: {
        count: 0,
        completed: false,
    },
};
//# sourceMappingURL=progress-bar.stories.js.map