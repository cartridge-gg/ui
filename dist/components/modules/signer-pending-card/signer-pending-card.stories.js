import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignerPendingCard } from "./signer-pending-card";
const meta = {
    title: "Modules/SignerPendingCard",
    component: SignerPendingCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        kind: {
            control: { type: "select" },
            options: [
                "google",
                "discord",
                "sms",
                "passkey",
                "metamask",
                "argent",
                "rabby",
                "phantom",
                "walletconnect",
            ],
        },
    },
};
export default meta;
export const GoogleSuccess = {
    args: {
        kind: "google",
    },
};
export const DiscordSuccess = {
    args: {
        kind: "discord",
    },
};
export const SMSSuccess = {
    args: {
        kind: "sms",
    },
};
export const PasskeySuccess = {
    args: {
        kind: "passkey",
    },
};
export const MetamaskSuccess = {
    args: {
        kind: "metamask",
    },
};
export const ArgentSuccess = {
    args: {
        kind: "argent",
    },
};
export const RabbySuccess = {
    args: {
        kind: "rabby",
    },
};
export const PhantomSuccess = {
    args: {
        kind: "phantom",
    },
};
export const WalletConnectSuccess = {
    args: {
        kind: "walletconnect",
    },
};
export const GoogleInProgress = {
    args: {
        kind: "google",
        inProgress: true,
    },
};
export const DiscordInProgress = {
    args: {
        kind: "discord",
        inProgress: true,
    },
};
export const SMSInProgress = {
    args: {
        kind: "sms",
        inProgress: true,
    },
};
export const PasskeyInProgress = {
    args: {
        kind: "passkey",
        inProgress: true,
    },
};
export const MetamaskInProgress = {
    args: {
        kind: "metamask",
        inProgress: true,
    },
};
export const ArgentInProgress = {
    args: {
        kind: "argent",
        inProgress: true,
    },
};
export const RabbyInProgress = {
    args: {
        kind: "rabby",
        inProgress: true,
    },
};
export const PhantomInProgress = {
    args: {
        kind: "phantom",
        inProgress: true,
    },
};
export const WalletConnectInProgress = {
    args: {
        kind: "walletconnect",
        inProgress: true,
    },
};
export const GoogleError = {
    args: {
        kind: "google",
        error: "Error connecting to Google",
    },
};
export const WalletConnectError = {
    args: {
        kind: "walletconnect",
        error: "Error connecting to WalletConnect",
    },
};
export const MetamaskAlreadyAuthenticated = {
    args: {
        kind: "metamask",
        authedAddress: "0x1234567890123456789012345678901234567890",
    },
};
export const AllMethods = {
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(SignerPendingCard, { kind: "google", inProgress: false }), _jsx(SignerPendingCard, { kind: "discord", inProgress: false }), _jsx(SignerPendingCard, { kind: "sms", inProgress: false }), _jsx(SignerPendingCard, { kind: "passkey", inProgress: false }), _jsx(SignerPendingCard, { kind: "metamask", inProgress: false }), _jsx(SignerPendingCard, { kind: "argent", inProgress: false }), _jsx(SignerPendingCard, { kind: "rabby", inProgress: false }), _jsx(SignerPendingCard, { kind: "phantom", inProgress: false }), _jsx(SignerPendingCard, { kind: "walletconnect", inProgress: false })] })),
};
//# sourceMappingURL=signer-pending-card.stories.js.map