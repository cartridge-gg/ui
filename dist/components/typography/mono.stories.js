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
export const Light14px = {
    args: {
        className: "text-sm font-light",
    },
};
export const Regular14px = {
    args: {
        className: "text-sm",
    },
};
export const Medium14px = {
    args: {
        className: "text-sm font-medium",
    },
};
export const SemiBold14px = {
    args: {
        className: "text-sm font-semibold",
    },
};
export const Light16px = {
    args: {
        className: "text-base font-light",
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