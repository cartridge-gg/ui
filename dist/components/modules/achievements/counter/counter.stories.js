import { AchievementCounter } from "./counter";
const meta = {
    title: "Modules/Achievements/Counter",
    component: AchievementCounter,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        count: 4,
        total: 10,
    },
};
export default meta;
export const Default = {};
export const Active = {
    args: {
        active: true,
    },
};
//# sourceMappingURL=counter.stories.js.map