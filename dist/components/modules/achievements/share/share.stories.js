import { AchievementShare } from "./share";
const meta = {
    title: "Modules/Achievements/Share",
    component: AchievementShare,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        disabled: false,
        website: "https://lootsurvivor.io",
        twitter: "https://x.com/lootsurvivor",
        timestamp: 1713542400,
        points: 100,
        difficulty: 10,
        title: "Achievement Title",
    },
};
export default meta;
export const Default = {};
export const Disabled = {
    args: {
        disabled: true,
    },
};
//# sourceMappingURL=share.stories.js.map