import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThumbnailsSubIcon } from "./sub-icon";
import { ArrowTurnDownIcon, JoystickIcon, PaperPlaneIcon, SparklesIcon, TrophyIcon, } from "../../../../components/icons";
const meta = {
    title: "Modules/Thumbnails/Sub Icon",
    component: ThumbnailsSubIcon,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        Icon: _jsx(SparklesIcon, { className: "w-full h-full", variant: "solid" }),
    },
};
export default meta;
const variants = [
    "darkest",
    "darker",
    "dark",
    "default",
    "light",
    "lighter",
    "lightest",
    "ghost",
];
const sizes = ["lg", "xl"];
const Icons = [
    _jsx(PaperPlaneIcon, { className: "w-full h-full", variant: "solid" }),
    _jsx(JoystickIcon, { className: "w-full h-full", variant: "solid" }),
    _jsx(ArrowTurnDownIcon, { className: "w-full h-full" }),
    _jsx(SparklesIcon, { className: "w-full h-full", variant: "solid" }),
    _jsx(TrophyIcon, { className: "w-full h-full", variant: "solid" }),
];
export const Default = {
    render: () => (_jsx("div", { className: "flex flex-col gap-1.5 ", children: variants.map((variant) => (_jsxs("div", { className: "grid grid-cols-2 items-center", children: [_jsx("p", { className: "text-sm font-medium capitalize", children: variant }), _jsx("div", { className: "flex flex-col gap-1.5 ", children: sizes.map((size) => (_jsx("div", { className: "flex gap-1.5", children: Icons.map((Icon, index) => (_jsx(ThumbnailsSubIcon, { Icon: Icon, variant: variant, size: size }, `${variant}-${size}-${index}`))) }, `${variant}-${size}`))) })] }, `${variant}`))) })),
};
//# sourceMappingURL=sub-icon.stories.js.map