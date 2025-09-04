import { LeaderboardUsername } from "./username";
const meta = {
    title: "Modules/Leaderboard/Username",
    component: LeaderboardUsername,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        username: "shinobi",
        highlight: false,
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
export const IconHighlight = {
    args: {
        icon: "fa-helmet-battle",
        highlight: true,
    },
};
//# sourceMappingURL=username.stories.js.map