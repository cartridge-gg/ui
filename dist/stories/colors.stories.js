import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function Colors(props) {
    return _jsx("div", { className: "flex gap-4", ...props });
}
function Palette({ color, label }) {
    return (_jsxs("div", { className: "size-36 flex flex-shrink-0 flex-col text-xs rounded-lg overflow-hidden", children: [_jsx("div", { className: `${color} h-2/3 flex justify-center items-center`, children: window
                    .getComputedStyle(document.documentElement)
                    .getPropertyValue(color.replace("bg", "-")) }), _jsx("div", { className: "bg-spacer-100 flex justify-center items-center h-1/3", children: label })] }));
}
const meta = {
    title: "Colors/Palette",
    component: Colors,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#0F1410" }],
        },
    },
};
export default meta;
export const Background = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-background", label: "bg-background" }), _jsx(Palette, { color: "bg-background-100", label: "bg-background-100" }), _jsx(Palette, { color: "bg-background-125", label: "bg-background-125" }), _jsx(Palette, { color: "bg-background-150", label: "bg-background-150" }), _jsx(Palette, { color: "bg-background-200", label: "bg-background-200" }), _jsx(Palette, { color: "bg-background-300", label: "bg-background-300" }), _jsx(Palette, { color: "bg-background-400", label: "bg-background-400" }), _jsx(Palette, { color: "bg-background-500", label: "bg-background-500" })] })),
    },
};
export const Destructive = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-destructive", label: "bg-destructive" }), _jsx(Palette, { color: "bg-destructive-100", label: "bg-destructive-100" })] })),
    },
};
export const Constructive = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-constructive", label: "bg-constructive" }), _jsx(Palette, { color: "bg-constructive-100", label: "bg-constructive-100" })] })),
    },
};
export const Achievement = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-achievement", label: "bg-achievement" }), _jsx(Palette, { color: "bg-achievement-100", label: "bg-achievement-100" }), _jsx(Palette, { color: "bg-achievement-200", label: "bg-achievement-200" })] })),
    },
};
export const Spacer = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-spacer", label: "bg-spacer" }), _jsx(Palette, { color: "bg-spacer-100", label: "bg-spacer-100" })] })),
    },
};
export const Foreground = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-foreground", label: "text-foreground" }), _jsx(Palette, { color: "bg-foreground-100", label: "text-foreground-100" }), _jsx(Palette, { color: "bg-foreground-200", label: "text-foreground-200" }), _jsx(Palette, { color: "bg-foreground-300", label: "text-foreground-300" }), _jsx(Palette, { color: "bg-foreground-400", label: "text-foreground-400" })] })),
    },
};
export const Primary = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-primary", label: "bg-primary" }), _jsx(Palette, { color: "bg-primary-100", label: "bg-primary-100" }), _jsx(Palette, { color: "bg-primary-200", label: "bg-primary-200" })] })),
    },
};
export const Secondary = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-secondary", label: "bg-secondary" }), _jsx(Palette, { color: "bg-secondary-100", label: "bg-secondary-100" })] })),
    },
};
export const TranslucentDark = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-translucent-dark", label: "bg-translucent-dark" }), _jsx(Palette, { color: "bg-translucent-dark-100", label: "bg-translucent-dark-100" }), _jsx(Palette, { color: "bg-translucent-dark-150", label: "bg-translucent-dark-150" }), _jsx(Palette, { color: "bg-translucent-dark-200", label: "bg-translucent-dark-200" }), _jsx(Palette, { color: "bg-translucent-dark-300", label: "bg-translucent-dark-300" })] })),
    },
};
export const TranslucentLight = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Palette, { color: "bg-translucent-light", label: "bg-translucent-light" }), _jsx(Palette, { color: "bg-translucent-light-100", label: "bg-translucent-light-100" }), _jsx(Palette, { color: "bg-translucent-light-150", label: "bg-translucent-light-150" }), _jsx(Palette, { color: "bg-translucent-light-200", label: "bg-translucent-light-200" }), _jsx(Palette, { color: "bg-translucent-light-300", label: "bg-translucent-light-300" })] })),
    },
};
//# sourceMappingURL=colors.stories.js.map