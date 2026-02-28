import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { MobileIcon } from "../../../components/icons";
import { ArgentColorIcon, DiscordColorIcon, GoogleColorIcon, MetaMaskColorIcon, PhantomColorIcon, RabbyColorIcon, WalletConnectColorIcon, } from "../../../components/icons/brand-color";
import { FingerprintIcon } from "../../../components/icons/brand/fingerprint";
import { cn, formatAddress } from "../../../utils";
const variants = {
    google: {
        icon: _jsx(GoogleColorIcon, { size: "xl" }),
        primaryText: "Connecting to Google",
        secondaryText: "Continue in the other window",
    },
    discord: {
        icon: _jsx(DiscordColorIcon, { size: "xl" }),
        primaryText: "Connecting to Discord",
        secondaryText: "Continue in the other window",
    },
    sms: {
        icon: _jsx(MobileIcon, { variant: "solid", size: "xl" }),
        primaryText: "",
        secondaryText: "",
        label: "SMS",
    },
    passkey: {
        icon: _jsx(FingerprintIcon, { size: "xl", variant: "line" }),
        primaryText: "Waiting for Confirmation",
        secondaryText: "Continue in browser",
    },
    metamask: {
        icon: _jsx(MetaMaskColorIcon, { size: "xl" }),
        primaryText: "Waiting for Signature",
        secondaryText: "Don't see your wallet? Check your other browser windows",
    },
    argent: {
        icon: _jsx(ArgentColorIcon, { size: "xl" }),
        primaryText: "Waiting for Signature",
        secondaryText: "Don't see your wallet? Check your other browser windows",
    },
    rabby: {
        icon: _jsx(RabbyColorIcon, { size: "xl" }),
        primaryText: "Waiting for Signature",
        secondaryText: "Don't see your wallet? Check your other browser windows",
    },
    phantom: {
        icon: _jsx(PhantomColorIcon, { size: "xl" }),
        primaryText: "Waiting for Signature",
        secondaryText: "Don't see your wallet? Check your other browser windows",
    },
    walletconnect: {
        icon: _jsx(WalletConnectColorIcon, { size: "xl" }),
        primaryText: "Waiting for Signature",
        secondaryText: "Continue on your mobile device",
        label: "WalletConnect",
    },
};
export function SignerPendingCard({ className, kind, inProgress, error, authedAddress, }) {
    const { icon, primaryText, secondaryText, label } = variants[kind];
    if (kind === "sms" && (inProgress || error)) {
        return _jsx(_Fragment, {});
    }
    return (_jsxs("div", { className: cn("flex flex-col items-center justify-center", "w-full h-fit p-10 gap-4", "rounded", "border border-background-200", "bg-background-100", className), children: [icon && (_jsx("div", { className: cn("w-fit h-fit p-2", "rounded-[32px]", "border border-background-200", error && "border-destructive-100"), children: icon })), _jsxs("div", { className: "flex flex-col gap-2 justify-center items-center", children: [_jsx("span", { className: cn("text-foreground-300 text-sm font-medium text-center", error && "text-destructive-100", authedAddress && "text-constructive-100"), children: error
                            ? error
                            : inProgress
                                ? primaryText
                                : authedAddress
                                    ? "This wallet is already authenticated"
                                    : "Success!" }), _jsx("span", { className: cn("text-foreground-400 text-sm font-medium text-center"), children: error
                            ? "Please try connecting again"
                            : inProgress
                                ? secondaryText
                                : authedAddress
                                    ? formatAddress(authedAddress, { size: "xs" })
                                    : (label || kind.charAt(0).toUpperCase() + kind.slice(1)) +
                                        " connected" })] })] }));
}
//# sourceMappingURL=signer-pending-card.js.map