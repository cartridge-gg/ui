import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fn } from "@storybook/test";
import { CreateAccount } from "./create";
import { useState } from "react";
const meta = {
    title: "Modules/Create Account/CreateAccount",
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
        className: "min-w-0 w-96",
        error: undefined,
        isLoading: false,
        autoFocus: false,
        onUsernameChange: fn(),
        onUsernameFocus: fn(),
        onUsernameClear: fn(),
        onKeyDown: fn(),
    },
};
export default meta;
// Add the new props to the meta args for other stories to inherit
meta.args = {
    ...meta.args,
    selectedAccount: undefined,
    onSelectedUsernameRemove: fn(),
};
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
// Story demonstrating autoFocus prop
export const WithAutoFocus = {
    args: {
        autoFocus: true,
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
export const WithAutocomplete = {
    args: {
        showAutocomplete: true,
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
        autoFocus: true,
        onUsernameChange: fn(),
        onUsernameFocus: fn(),
        onUsernameClear: fn(),
        onKeyDown: fn(),
        onAccountSelect: fn(),
        // Mock empty results
        mockResults: [],
        mockIsLoading: false,
    },
};
export const WithAutocompleteAndValue = {
    args: {
        showAutocomplete: true,
        autoFocus: true, // Enable auto focus to trigger dropdown
        usernameField: {
            value: "shin",
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
        onAccountSelect: fn(),
        // Mock search results
        mockResults: [
            {
                id: "create-new-shin",
                type: "create-new",
                username: "shin",
            },
            {
                id: "existing-shints",
                type: "existing",
                username: "shints",
                points: 20800,
                lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
            },
            {
                id: "existing-shinobi",
                type: "existing",
                username: "shinobi",
                points: 20800,
                lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
            },
        ],
        mockIsLoading: false,
    },
};
export const LongError = {
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
            name: "ClientError",
            message: 'rpc error: code = Internal desc = internal server error: {"response":{"errors":[{"message":"rpc error: code = Internal desc = internal server error","path":["finalizeRegistration"]}],"data":null,"status":200,"headers":{}},"request":{"query":"\\n mutation FinalizeRegistration($credentials: String!, $network: String!) {\\n finalizeRegistration(credentials: $credentials, network: $network) {\\n username\\n controllers {\\n edges {\\n node {\\n address\\n constructorCalldata\\n signers {\\n type\\n }\\n }\\n }\\n }\\n credentials {\\n webauthn {\\n id\\n publicKey\\n }\\n }\\n }\\n}\\n ","variables":{"network":"SN_MAIN","credentials":"{\\"id\\":\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\",\\"rawId\\":\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\",\\"type\\":\\"public-key\\",\\"response\\":{\\"attestationObject\\":\\"o2NmbXRkbm9uZWdhdHRTdG10oGhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NFAAAAALU5dmZIhaprzr_lImKkOaIAIHLX1odxRPesOQGfuolTQL9enHBqiXg0TmifGFHZzs2dpQECAyYgASFYIPx2O3ufZDxJ_fuu43knH7H4wfxp61JCg_TZey2CLwzIIlggygpmiDxx0Da84LP2vRu6xDJQrI552vP7Fo9bkIXkXtA\\",\\"clientDataJSON\\":\\"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoib2NZZ2Q5LUlTY3B4U2dGeTZwcEZfSE5rdm1hWVRkZGtyb',
        },
    },
};
// Interactive story that demonstrates pill functionality
export const InteractivePillDemo = {
    render: function InteractivePillDemoComponent() {
        const [usernameValue, setUsernameValue] = useState("");
        const [selectedAccount, setSelectedAccount] = useState();
        const [validation, setValidation] = useState({
            status: "idle",
            error: undefined,
            exists: undefined,
        });
        const mockResults = [
            {
                id: "create-new-" + usernameValue,
                type: "create-new",
                username: usernameValue,
            },
            {
                id: "existing-shints",
                type: "existing",
                username: "shints",
                points: 20800,
                lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
            },
            {
                id: "existing-shinobi",
                type: "existing",
                username: "shinobi",
                points: 20800,
                lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
            },
            {
                id: "existing-shinto",
                type: "existing",
                username: "shinto",
                points: 0,
                lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
            },
        ].filter((result) => result.type === "create-new"
            ? usernameValue.length > 0
            : result.username.toLowerCase().includes(usernameValue.toLowerCase()));
        const handleAccountSelect = (result) => {
            console.log("Selected:", result);
            setSelectedAccount(result);
            setUsernameValue("");
            setValidation({
                status: "valid",
                error: undefined,
                exists: result.type === "existing",
            });
        };
        const handleRemovePill = () => {
            console.log("Removed pill:", selectedAccount?.username);
            setSelectedAccount(undefined);
            setUsernameValue("");
            setValidation({
                status: "idle",
                error: undefined,
                exists: undefined,
            });
        };
        return (_jsxs("div", { className: "w-96", children: [_jsx(CreateAccount, { usernameField: {
                        value: usernameValue,
                        error: undefined,
                    }, validation: validation, error: undefined, isLoading: false, autoFocus: true, showAutocomplete: true, selectedAccount: selectedAccount, onUsernameChange: (value) => {
                        setUsernameValue(value);
                        if (!selectedAccount) {
                            setValidation({
                                status: "idle",
                                error: undefined,
                                exists: undefined,
                            });
                        }
                    }, onUsernameFocus: () => console.log("Focus"), onUsernameClear: () => {
                        setUsernameValue("");
                        setValidation({
                            status: "idle",
                            error: undefined,
                            exists: undefined,
                        });
                    }, onKeyDown: () => { }, onAccountSelect: handleAccountSelect, onSelectedUsernameRemove: handleRemovePill, mockResults: mockResults, mockIsLoading: false }), _jsxs("div", { className: "mt-4 p-4 bg-background-200 rounded text-sm", children: [_jsx("h4", { className: "font-semibold mb-2", children: "Demo Instructions:" }), _jsxs("ul", { className: "space-y-1 text-foreground-300", children: [_jsx("li", { children: "\u2022 Type in the input to see autocomplete suggestions" }), _jsx("li", { children: "\u2022 Click on any suggestion to create a pill" }), _jsx("li", { children: "\u2022 Click the X button on the pill to remove it" }), _jsx("li", { children: "\u2022 Try \"shin\" to see matching results" })] }), selectedAccount && (_jsxs("div", { className: "mt-2 p-2 bg-primary/10 rounded", children: [_jsx("strong", { children: "Selected:" }), " ", selectedAccount.username, " (", selectedAccount.type === "create-new"
                                    ? "New User"
                                    : `${selectedAccount.points?.toLocaleString()} points`, ")"] }))] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "An interactive demo showing how pills are created when selecting from autocomplete and how they can be removed.",
            },
        },
    },
};
// Demo story showing pill with existing user (with points)
export const PillWithExistingUser = {
    args: {
        selectedAccount: {
            id: "existing-shinobi",
            type: "existing",
            username: "shinobi",
            points: 20800,
            lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        },
        usernameField: {
            value: "",
            error: undefined,
        },
        validation: {
            status: "valid",
            error: undefined,
            exists: true,
        },
        error: undefined,
        isLoading: false,
        onUsernameChange: fn(),
        onUsernameFocus: fn(),
        onUsernameClear: fn(),
        onKeyDown: fn(),
        onSelectedUsernameRemove: fn(),
    },
};
export const PillWithExistingUserWithoutPoints = {
    args: {
        selectedAccount: {
            id: "existing-shinobi",
            type: "existing",
            username: "shinobi",
            points: 0,
            lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        },
        usernameField: {
            value: "",
            error: undefined,
        },
        validation: {
            status: "valid",
            error: undefined,
            exists: true,
        },
        error: undefined,
        isLoading: false,
        onUsernameChange: fn(),
        onUsernameFocus: fn(),
        onUsernameClear: fn(),
        onKeyDown: fn(),
        onSelectedUsernameRemove: fn(),
    },
};
// Demo story showing pill with new user (create new)
export const PillWithNewUser = {
    args: {
        selectedAccount: {
            id: "create-new-newbie",
            type: "create-new",
            username: "newbie",
        },
        usernameField: {
            value: "",
            error: undefined,
        },
        validation: {
            status: "valid",
            error: undefined,
            exists: false,
        },
        error: undefined,
        isLoading: false,
        onUsernameChange: fn(),
        onUsernameFocus: fn(),
        onUsernameClear: fn(),
        onKeyDown: fn(),
        onSelectedUsernameRemove: fn(),
    },
};
//# sourceMappingURL=create.stories.js.map