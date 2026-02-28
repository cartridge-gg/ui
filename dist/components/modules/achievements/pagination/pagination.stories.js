import { AchievementPagination } from "./pagination";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Achievements/Pagination",
    component: AchievementPagination,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        onClick: fn(),
    },
};
export default meta;
export const DefaultLeft = {
    args: {
        direction: "left",
    },
};
export const DefaultRight = {
    args: {
        direction: "right",
    },
};
export const DisabledLeft = {
    args: {
        direction: "left",
        disabled: true,
    },
};
export const DisabledRight = {
    args: {
        direction: "right",
        disabled: true,
    },
};
//# sourceMappingURL=pagination.stories.js.map