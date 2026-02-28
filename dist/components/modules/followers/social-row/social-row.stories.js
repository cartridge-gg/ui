import { FollowerSocialRow } from "./social-row";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Followers/Social Row",
    component: FollowerSocialRow,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        username: "shinobi",
        points: 950,
        following: false,
        unfollowable: false,
        onSocialClick: fn(),
    },
};
export default meta;
export const Default = {};
export const Following = {
    args: {
        following: true,
    },
};
export const Unfollowable = {
    args: {
        following: true,
        unfollowable: true,
    },
};
//# sourceMappingURL=social-row.stories.js.map