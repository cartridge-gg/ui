import { MobileIcon, WalletIcon } from "@/components/icons";
import {
  DiscordColorIcon,
  GoogleColorIcon,
} from "@/components/icons/brand-color";
import { FingerprintIcon } from "@/components/icons/brand/fingerprint";
import { cn } from "@/utils";
import { useState } from "react";

export type SignerMethodKind =
  | "google"
  | "SMS"
  | "passkey"
  | "discord"
  | "wallet";

interface SignerMethodProps {
  className?: string;
  kind: SignerMethodKind;
  onClick: () => void;
}

const iconMap = {
  google: <GoogleColorIcon size="sm" />,
  discord: <DiscordColorIcon size="sm" />,
  SMS: <MobileIcon variant="solid" size="sm" />,
  passkey: <FingerprintIcon size="sm" />,
  wallet: <WalletIcon variant="solid" size="sm" />,
} as const;

export function SignerMethod({ className, kind, onClick }: SignerMethodProps) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = iconMap[kind];
  const label = kind.charAt(0).toUpperCase() + kind.slice(1);

  return (
    <div
      className={cn(
        "flex items-center",
        "w-[400px] h-[52px] p-3 gap-2",
        "rounded",
        "bg-background-200 hover:bg-background-300",
        "cursor-pointer transition-colors ease-in-out",
        className,
      )}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {IconComponent && (
        <div
          className={cn(
            "w-fit h-fit p-1",
            "rounded-[16px]",
            "bg-background-300",
            hovered && "bg-background-400",
          )}
        >
          {IconComponent}
        </div>
      )}
      <span className="text-foreground-100 text-base font-medium">{label}</span>
    </div>
  );
}
