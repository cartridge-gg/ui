import { MobileIcon, WalletIcon } from "@/components/icons";
import {
	ArgentColorIcon,
	DiscordColorIcon,
	GoogleColorIcon,
	MetaMaskColorIcon,
	PhantomColorIcon,
	RabbyColorIcon,
	WalletConnectColorIcon,
} from "@/components/icons/brand-color";
import { FingerprintIcon } from "@/components/icons/brand/fingerprint";
import { cn } from "@/utils";
import { useState } from "react";

export type SignerMethodKind =
  | "google"
  | "SMS"
  | "passkey"
  | "discord"
  | "wallet"
  | "argent"
  | "phantom"
  | "metamask"
  | "rabby"
  | "walletconnect";

interface SignerMethodProps {
  className?: string;
  kind: SignerMethodKind;
  onClick: () => void;
}

const signers: Record<SignerMethodKind, {
  icon: React.ReactNode;
  label: string;
}> = {
  google: {
    icon: <GoogleColorIcon size="sm" />,
    label: "Google",
  },
  discord: {
    icon: <DiscordColorIcon size="sm" />,
    label: "Discord",
  },
  SMS: {
    icon: <MobileIcon variant="solid" size="sm" />,
    label: "SMS",
  },
  passkey: {
    icon: <FingerprintIcon size="sm" />,
    label: "Passkey",
  },
  wallet: {
    icon: <WalletIcon variant="solid" size="sm" />,
    label: "Wallet",
  },
  argent: {
    icon: <ArgentColorIcon size="sm" />,
    label: "Argent",
  },
  phantom: {
    icon: <PhantomColorIcon size="sm" />,
    label: "Phantom",
  },
  metamask: {
    icon: <MetaMaskColorIcon size="sm" />,
    label: "MetaMask",
  },
  rabby: {
    icon: <RabbyColorIcon size="sm" />,
    label: "Rabby",
  },
  walletconnect: {
    icon: <WalletConnectColorIcon size="sm" />,
    label: "WalletConnect",
  },
} as const;

export function SignerMethod({ className, kind, onClick }: SignerMethodProps) {
  const [hovered, setHovered] = useState(false);
  const { icon, label } = signers[kind];

  return (
    <div
      className={cn(
        "flex items-center",
        "w-full h-[52px] p-3 gap-2",
        "rounded",
        "bg-background-200 hover:bg-background-300",
        "cursor-pointer transition-colors ease-in-out",
        className,
      )}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon && (
        <div
          className={cn(
            "w-fit h-fit p-1",
            "rounded-[16px]",
            "bg-background-300",
            hovered && "bg-background-400",
          )}
        >
          {icon}
        </div>
      )}
      <span className="text-foreground-100 text-base">{label}</span>
    </div>
  );
}
