import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseButton } from "../components/primitives/toast/toast";
// Close Button Stories
const closeButtonMeta = {
    title: "Primitives/Toast/Supporting/Close Button",
    component: CloseButton,
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
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "translucent"],
        },
    },
};
export default closeButtonMeta;
export const DefaultCloseButton = {
    args: {
        variant: "default",
    },
};
export const TranslucentCloseButton = {
    args: {
        variant: "translucent",
    },
};
export const AllCloseButtonVariants = {
    render: () => (_jsxs("div", { className: "flex gap-4 items-center", children: [_jsxs("div", { className: "text-center", children: [_jsx(CloseButton, { variant: "default" }), _jsx("p", { className: "text-white text-xs mt-1", children: "Default" })] }), _jsxs("div", { className: "text-center bg-[#E66666] p-2 rounded", children: [_jsx(CloseButton, { variant: "translucent" }), _jsx("p", { className: "text-black text-xs mt-1", children: "Translucent" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-gray-400 text-xs mb-2", children: "Hover states are applied via CSS" }), _jsx("p", { className: "text-gray-400 text-xs", children: "on actual interaction" })] })] })),
};
//# sourceMappingURL=toast-supporting-components.stories.js.map