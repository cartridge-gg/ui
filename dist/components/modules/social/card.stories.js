import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SocialCard } from "./card";
import { XIcon } from "../../../components/icons";
import { ControllerStack } from "../../../utils/mock/controller-stack";
import { toast } from "sonner";
const meta = {
    title: "Modules/Social/Card",
    component: SocialCard,
    tags: ["autodocs"],
};
const onClick = () => {
    toast.success("clicked!");
};
export default meta;
export const Default = {
    render: () => (_jsxs(ControllerStack, { children: [_jsxs("div", { className: "flex flex-col gap-[1px] w-full", children: [_jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}) }), _jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}), handle: "@cartridge_gg" }), _jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}), handle: "@cartridge_gg", isExpired: true }), _jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}), handle: "@cartridge_gg", onClick: onClick, isDisabled: true }), _jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}), handle: "@cartridge_gg", onClick: onClick, isCompleted: true })] }), _jsx("p", { className: "text-foreground-300", children: "Clickable" }), _jsxs("div", { className: "flex flex-col gap-[1px] w-full", children: [_jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}), onClick: onClick }), _jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}), onClick: onClick, handle: "@cartridge_gg" }), _jsx(SocialCard, { text: "Connect X", icon: _jsx(XIcon, {}), onClick: onClick, handle: "@cartridge_gg", isExpired: true })] })] })),
};
export const NoHandleClickable = {
    args: {
        text: "Connect X",
        icon: _jsx(XIcon, {}),
        onClick,
    },
};
export const WithHandle = {
    args: {
        text: "Connect X",
        icon: _jsx(XIcon, {}),
        handle: "@cartridge_gg",
        onClick: undefined,
    },
};
export const Disabled = {
    args: {
        text: "Connect X",
        icon: _jsx(XIcon, {}),
        handle: "@cartridge_gg",
        onClick,
        isDisabled: true,
    },
};
export const Expired = {
    args: {
        text: "Connect X",
        icon: _jsx(XIcon, {}),
        handle: "@cartridge_gg",
        onClick,
        isExpired: true,
    },
};
export const Completed = {
    args: {
        text: "Connect X",
        icon: _jsx(XIcon, {}),
        handle: "@cartridge_gg",
        onClick,
        isCompleted: true,
    },
};
//# sourceMappingURL=card.stories.js.map