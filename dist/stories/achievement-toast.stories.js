import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementToast } from "../components/primitives/toast/specialized-toasts";
import { ToastProvider, ToastViewport } from "../components/primitives/toast";
const meta = {
    title: "Primitives/Toast/Achievement Toast",
    component: AchievementToast,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#353535" },
                { name: "light", value: "#ffffff" },
            ],
        },
    },
    decorators: [
        (Story) => (_jsxs(ToastProvider, { children: [_jsx(Story, {}), _jsx(ToastViewport, {})] })),
    ],
    argTypes: {
        title: { control: "text" },
        subtitle: { control: "text" },
        xpAmount: { control: "number" },
        progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
        isDraft: { control: "boolean" },
    },
};
export default meta;
export const PacifistPath = {
    args: {
        title: "Pacifist Path",
        subtitle: "Earned!",
        xpAmount: 100,
        progress: 66.7,
        isDraft: false,
    },
};
export const DiamondsDraft = {
    args: {
        title: "Diamonds",
        subtitle: "Earned!",
        xpAmount: 100,
        progress: 16.7,
        isDraft: true,
    },
};
export const CustomAchievement = {
    args: {
        title: "Master Explorer",
        subtitle: "Unlocked!",
        xpAmount: 250,
        progress: 100,
        isDraft: false,
    },
};
//# sourceMappingURL=achievement-toast.stories.js.map