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
import { SignerPendingCardKind } from "../signer-pending-card/signer-pending-card";

export type SignerMethodKind = SignerPendingCardKind | "wallet";

interface SignerMethodProps {
  className?: string;
  kind: SignerMethodKind;
  onClick: () => void;
}

const signers: Record<
  SignerMethodKind,
  {
    icon: React.ReactNode;
    label?: string;
  }
> = {
  google: {
    icon: <GoogleColorIcon size="sm" />,
  },
  discord: {
    icon: <DiscordColorIcon size="sm" />,
  },
  sms: {
    icon: <MobileIcon variant="solid" size="sm" />,
    label: "SMS",
  },
  passkey: {
    icon: <FingerprintIcon size="sm" />,
  },
  wallet: {
    icon: <WalletIcon variant="solid" size="sm" />,
  },
  argent: {
    icon: <ArgentColorIcon size="sm" />,
  },
  phantom: {
    icon: <PhantomColorIcon size="sm" />,
  },
  metamask: {
    icon: <MetaMaskColorIcon size="sm" />,
  },
  rabby: {
    icon: <RabbyColorIcon size="sm" />,
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
      <span className="text-foreground-100 text-base">
        {label || kind.charAt(0).toUpperCase() + kind.slice(1)}
      </span>
    </div>
  );
}
