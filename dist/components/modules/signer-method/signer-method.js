import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MobileIcon, WalletIcon, WarningIcon } from "../../../components/icons";
import { ArgentColorIcon, DiscordColorIcon, GoogleColorIcon, MetaMaskColorIcon, PhantomColorIcon, RabbyColorIcon, WalletConnectColorIcon, } from "../../../components/icons/brand-color";
import { FingerprintIcon } from "../../../components/icons/brand/fingerprint";
import { cn } from "../../../utils";
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
    "phantom-evm": {
        icon: _jsx(PhantomColorIcon, { size: "sm" }),
        label: "Phantom",
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
    const signerExist = (kind in signers);
    const { icon, label } = signerExist ? signers[kind] : {
        icon: _jsx(WarningIcon, { size: "sm" }),
        label: "Unknown",
    };
    return (_jsxs("div", { className: cn("flex items-center", "w-full h-[40px] p-2.5 gap-2", "rounded", "bg-background-200 hover:bg-background-300", "text-foreground-100 font-ld text-sm text-normal uppercase tracking-[2.1px]", "cursor-pointer transition-colors ease-in-out", className), onClick: signerExist ? onClick : undefined, children: [icon && _jsx("div", { className: cn("w-fit h-fit"), children: icon }), label || kind.charAt(0).toUpperCase() + kind.slice(1)] }));
}
//# sourceMappingURL=signer-method.js.map