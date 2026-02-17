import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MobileIcon, WalletIcon } from "../../../components/icons";
import { ArgentColorIcon, DiscordColorIcon, GoogleColorIcon, MetaMaskColorIcon, PhantomColorIcon, RabbyColorIcon, WalletConnectColorIcon, } from "../../../components/icons/brand-color";
import { FingerprintIcon } from "../../../components/icons/brand/fingerprint";
import { cn } from "../../../utils";
import { useState } from "react";
const signers = {
    google: {
        icon: _jsx(GoogleColorIcon, { size: "sm" }),
    },
    discord: {
        icon: _jsx(DiscordColorIcon, { size: "sm" }),
    },
    sms: {
        icon: _jsx(MobileIcon, { variant: "solid", size: "sm" }),
        label: "SMS",
    },
    passkey: {
        icon: _jsx(FingerprintIcon, { size: "sm", variant: "solid" }),
    },
    wallet: {
        icon: _jsx(WalletIcon, { variant: "solid", size: "sm" }),
    },
    argent: {
        icon: _jsx(ArgentColorIcon, { size: "sm" }),
    },
    phantom: {
        icon: _jsx(PhantomColorIcon, { size: "sm" }),
    },
    metamask: {
        icon: _jsx(MetaMaskColorIcon, { size: "sm" }),
    },
    rabby: {
        icon: _jsx(RabbyColorIcon, { size: "sm" }),
    },
    walletconnect: {
        icon: _jsx(WalletConnectColorIcon, { size: "sm" }),
        label: "WalletConnect",
    },
};
export function SignerMethod({ className, kind, onClick }) {
    const [hovered, setHovered] = useState(false);
    const { icon, label } = signers[kind];
    return (_jsxs("div", { className: cn("flex items-center", "w-full h-[52px] p-3 gap-2", "rounded", "bg-background-200 hover:bg-background-300", "cursor-pointer transition-colors ease-in-out", className), onClick: onClick, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: [icon && (_jsx("div", { className: cn("w-fit h-fit p-1", "rounded-[16px]", "bg-background-300", hovered && "bg-background-400"), children: icon })), _jsx("span", { className: "text-foreground-100 text-base", children: label || kind.charAt(0).toUpperCase() + kind.slice(1) })] }));
}
//# sourceMappingURL=signer-method.js.map