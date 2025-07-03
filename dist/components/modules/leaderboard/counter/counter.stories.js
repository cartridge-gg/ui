import { LeaderboardCounter } from "./counter";
const meta = {
    title: "Modules/Leaderboard/Counter",
    component: LeaderboardCounter,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        rank: 16,
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