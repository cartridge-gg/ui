import { fn } from "@storybook/test";
import { CreateAccount } from "./create";
const meta = {
    title: "Modules/CreateAccount",
    component: CreateAccount,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        usernameField: {
            value: "",
            error: undefined,
        },
        validation: {
            status: "idle",
            error: undefined,
            exists: undefined,
        },
        error: undefined,
        isLoading: false,
        onUsernameChange: fn(),
        onUsernameFocus: fn(),
        onUsernameClear: fn(),
        onKeyDown: fn(),
    },
};
export default meta;
export const Default = {};
export const DefaultValidating = {
    args: {
        usernameField: {
            value: "shinobi",
        },
        validation: {
            status: "validating",
        },
    },
};
export const DefaultLogin = {
    args: {
        usernameField: {
            value: "shinobi",
            error: undefined,
        },
        validation: {
            status: "valid",
            error: undefined,
            exists: true,
        },
    },
};
export const DefaultNew = {
    args: {
        usernameField: {
            value: "shinobi5",
            error: undefined,
        },
        validation: {
            status: "valid",
            error: undefined,
            exists: false,
        },
    },
};
export const ErrorTooShort = {
    args: {
        usernameField: {
            value: "sh",
            error: undefined,
        },
        validation: {
            status: "invalid",
            error: {
                name: "Error",
                message: "Username must be at least 3 characters",
            },
            exists: false,
        },
        error: { name: "Error", message: "Username must be at least 3 characters" },
    },
};
export const ErrorSpecialCharacter = {
    args: {
        usernameField: {
            value: "shin_obi",
            error: undefined,
        },
        validation: {
            status: "invalid",
            exists: false,
        },
        error: {
            name: "Error",
            message: "Username can only contain letters, numbers, and hyphens",
        },
    },
};
export const ErrorTimeout = {
    args: {
        usernameField: {
            value: "",
            error: undefined,
        },
        validation: {
            status: "invalid",
            error: undefined,
            exists: false,
        },
        error: {
            name: "Error",
            message: "The operation either timed out or was not allowed",
        },
    },
};
//# sourceMappingURL=create.stories.js.map