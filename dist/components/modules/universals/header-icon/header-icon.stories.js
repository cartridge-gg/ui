import { jsx as _jsx } from "react/jsx-runtime";
import { UniversalHeaderIcon } from "./header-icon";
import { DepositIcon, EthereumColorIcon } from "../../../../components/icons";
const meta = {
    title: "Modules/Universals/Header Icon",
    component: UniversalHeaderIcon,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        variant: "default",
        size: "default",
    },
};
export default meta;
export const Default = {};
export const IconComponent = {
    args: {
        icon: _jsx(DepositIcon, { variant: "solid", size: "lg" }),
    },
};
export const IconUrl = {
    args: {
        icon: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/dominion/icon.svg",
    },
};
export const IconString = {
    args: {
        icon: "fa-helmet-battle",
    },
};
export const IconRounded = {
    args: {
        icon: _jsx(EthereumColorIcon, { className: "h-9 w-9" }),
        className: "rounded-full",
    },
};
//# sourceMappingURL=header-icon.stories.js.map