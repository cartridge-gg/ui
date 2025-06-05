import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPlayerHeader } from "./player-header";
const meta = {
    title: "Modules/Achievements/Player Header",
    component: AchievementPlayerHeader,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        username: "bal7hazar",
        address: "0x1234567890123456789012345678901234567890",
        points: 2800,
        follower: true,
        followerCount: 1337,
        followingCount: 42,
        followers: [
            "clicksave",
            "shinobi",
            "johndoe",
            "janedoe",
            "harrypotter",
            "hermione",
            "ron",
            "aragorn",
            "legolas",
            "gimli",
            "boromir",
            "gandalf",
            "frodo",
            "sam",
            "merry",
            "pippin",
            "boromir",
            "gandalf",
            "frodo",
            "sam",
            "merry",
            "pippin",
        ],
    },
};
export default meta;
const ranks = ["default", "gold", "silver", "bronze"];
export const Dark = {
    render: (args) => {
        const variant = "dark";
        return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), ranks.map((rank) => (_jsx(AchievementPlayerHeader, { ...args, variant: variant, rank: rank })))] }, variant));
    },
};
export const Default = {
    render: (args) => {
        const variant = "default";
        return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), ranks.map((rank) => (_jsx(AchievementPlayerHeader, { ...args, variant: variant, rank: rank })))] }, variant));
    },
};
export const Light = {
    render: (args) => {
        const variant = "light";
        return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx("p", { className: "text-sm text-foreground-100 capitalize text-medium", children: variant }), ranks.map((rank) => (_jsx(AchievementPlayerHeader, { ...args, variant: variant, rank: rank })))] }, variant));
    },
};
export const NotFollower = {
    args: {
        follower: false,
    },
};
export const NoFollowers = {
    args: {
        followers: [],
        followerCount: 0,
        followingCount: 0,
    },
};
export const OneFollower = {
    args: {
        followers: ["clicksave"],
        followerCount: 1,
        followingCount: 1,
    },
};
export const TwoFollowers = {
    args: {
        followers: ["clicksave", "shinobi"],
        followerCount: 2,
        followingCount: 2,
    },
};
export const ThreeFollowers = {
    args: {
        followers: ["clicksave", "shinobi", "johndoe"],
        followerCount: 3,
        followingCount: 3,
    },
};
export const Compacted = {
    args: {
        follower: false,
        compacted: true,
    },
};
export const GoldCompacted = {
    args: {
        follower: false,
        compacted: true,
        rank: "gold",
    },
};
//# sourceMappingURL=player-header.stories.js.map