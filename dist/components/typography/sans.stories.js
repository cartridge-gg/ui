import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils";
const P = ({ label, className }) => {
    return _jsx("p", { className: cn("font-sans", className), children: label });
};
const meta = {
    title: "Typography/Sans",
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
export const Regular10px = {
    args: {
        className: "text-[10px]/[12px]",
    },
};
export const Regular12px = {
    args: {
        className: "text-xs",
    },
};
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
export const Medium12px = {
    args: {
        className: "text-xs font-medium",
    },
};
export const Medium14px = {
    args: {
        className: "text-sm font-medium",
    },
};
export const SemiBold12px = {
    args: {
        className: "text-xs font-semibold",
    },
};
export const SemiBold14px = {
    args: {
        className: "text-sm font-semibold",
    },
};
export const SemiBold18px = {
    args: {
        className: "text-lg font-semibold",
    },
};
export const Bold14px = {
    args: {
        className: "text-sm font-bold",
    },
};
export const Bold18px = {
    args: {
        className: "text-lg font-bold",
    },
};
//# sourceMappingURL=sans.stories.js.map