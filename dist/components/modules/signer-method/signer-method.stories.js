import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignerMethod } from "./signer-method";
import { ControllerStack } from "../../../utils/mock/controller-stack";
const meta = {
    title: "Modules/SignerMethod",
    component: SignerMethod,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        kind: {
            control: { type: "select" },
            options: ["google", "discord", "sms", "passkey", "wallet"],
        },
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(ControllerStack, { children: [_jsx(SignerMethod, { kind: "google", onClick: () => { } }), _jsx(SignerMethod, { kind: "discord", onClick: () => { } }), _jsx(SignerMethod, { kind: "sms", onClick: () => { } }), _jsx(SignerMethod, { kind: "passkey", onClick: () => { } }), _jsx(SignerMethod, { kind: "wallet", onClick: () => { } }), _jsx(SignerMethod, { kind: "argent", onClick: () => { } }), _jsx(SignerMethod, { kind: "phantom", onClick: () => { } }), _jsx(SignerMethod, { kind: "metamask", onClick: () => { } }), _jsx(SignerMethod, { kind: "rabby", onClick: () => { } }), _jsx(SignerMethod, { kind: "walletconnect", onClick: () => { } })] })),
};
export const Gmail = {
    args: {
        kind: "google",
    },
};
export const Discord = {
    args: {
        kind: "discord",
    },
};
export const sms = {
    args: {
        kind: "sms",
    },
};
export const Passkey = {
    args: {
        kind: "passkey",
    },
};
export const Wallet = {
    args: {
        kind: "wallet",
    },
};
export const Argent = {
    args: {
        kind: "argent",
    },
};
export const Phantom = {
    args: {
        kind: "phantom",
    },
};
export const MetaMask = {
    args: {
        kind: "metamask",
    },
};
export const Rabby = {
    args: {
        kind: "rabby",
    },
};
export const WalletConnect = {
    args: {
        kind: "walletconnect",
    },
};
//# sourceMappingURL=signer-method.stories.js.map