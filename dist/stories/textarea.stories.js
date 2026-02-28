import { Textarea } from "../components/primitives/textarea";
import { fn } from "@storybook/test";
const meta = {
    title: "Primitives/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        value: "",
        variant: "default",
        size: "default",
        placeholder: "Label",
        onClear: fn(),
    },
};
export default meta;
export const Default = {};
export const Value = {
    args: {
        value: "Value",
    },
};
export const Error = {
    args: {
        value: "Value*",
        error: { name: "error", message: "Error" },
    },
};
export const AutoFocus = {
    args: {
        value: "Value",
        autoFocus: true,
    },
};
export const LongValue = {
    args: {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
};
export const BigDefault = {
    args: {
        size: "lg",
    },
};
export const BigValue = {
    args: {
        size: "lg",
        value: "Value",
    },
};
export const BigError = {
    args: {
        size: "lg",
        value: "Value*",
        error: { name: "error", message: "Error" },
    },
};
export const UsernameDefault = {
    args: {
        variant: "username",
        size: "lg",
    },
};
export const UsernameValue = {
    args: {
        variant: "username",
        size: "lg",
        value: "Value",
    },
};
export const UsernameError = {
    args: {
        variant: "username",
        size: "lg",
        value: "Value*",
        error: { name: "error", message: "" },
    },
};
//# sourceMappingURL=textarea.stories.js.map