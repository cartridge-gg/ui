import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils";
const P = ({ label, className }) => {
    return _jsx("p", { className: cn("font-mono", className), children: label });
};
const meta = {
    title: "Typography/Mono",
    component: P,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        label: "The quick brown fox jumps over the lazy dog.",
        className: "",
    },
};
export default meta;
export const Regular14px = {
    args: {
        className: "text-sm",
    },
};
export const Regular16px = {
    args: {
        className: "text-base",
    },
};
export const Medium16px = {
    args: {
        className: "text-base font-medium",
    },
};
export const SemiBold16px = {
    args: {
        className: "text-base font-semibold",
    },
};
//# sourceMappingURL=mono.stories.js.map