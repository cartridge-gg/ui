import { jsx as _jsx } from "react/jsx-runtime";
import { EthereumIcon, TransferIcon } from "../../index";
import { LayoutHeader } from "./index";
const meta = {
    title: "Layout/Header",
    component: LayoutHeader,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#161a17" }],
        },
    },
    args: {
        variant: "compressed",
        title: "Welcome to Keychain",
        description: "Secure your digital assets",
    },
};
export default meta;
export const Expanded = {
    args: {
        variant: "expanded",
    },
};
export const Compressed = {};
export const IconComponentProp = {
    args: {
        Icon: TransferIcon,
    },
};
export const IconElementProp = {
    args: {
        icon: _jsx(EthereumIcon, { size: "lg" }),
    },
};
export const VeryLongTitle = {
    args: {
        title: "This is a very long title that should be truncated",
        description: "This is a very long description that should be wrapped and demonstrate how text behaves when it extends beyond multiple lines. It's important to test how the UI handles lengthy content to ensure proper wrapping, readability, and overall visual appeal. How does this much longer description look in the component?",
    },
};
//# sourceMappingURL=header.stories.js.map