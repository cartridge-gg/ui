import { LeaderboardRow } from "./row";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Leaderboard/Row",
    component: LeaderboardRow,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        rank: 100,
        name: "player",
        highlight: false,
        points: 690,
        following: true,
        onClick: fn(),
    },
};
export default meta;
export const Default = {};
export const Icon = {
    args: {
        icon: "fa-helmet-battle",
    },
};
export const Highlight = {
    args: {
        highlight: true,
    },
};
export const HighlightTop1 = {
    args: {
        highlight: true,
        rank: 1,
    },
};
export const Top1 = {
    args: {
        rank: 1,
    },
};
export const Top2 = {
    args: {
        rank: 2,
    },
};
export const Top3 = {
    args: {
        rank: 3,
    },
};
export const LowRank = {
    args: {
        rank: 9999,
    },
};
//# sourceMappingURL=row.stories.js.map