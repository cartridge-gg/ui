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
    icon: <FingerprintIcon size="sm" variant="solid" />,
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
  const { icon, label } = signers[kind];

  return (
    <div
      className={cn(
        "flex items-center",
        "w-full h-[40px] p-2.5 gap-2",
        "rounded",
        "bg-background-200 hover:bg-background-300",
        "text-foreground-100 font-ld text-sm text-normal uppercase tracking-[2.1px]",
        "cursor-pointer transition-colors ease-in-out",
        className,
      )}
      onClick={onClick}
    >
      {icon && <div className={cn("w-fit h-fit")}>{icon}</div>}
      {label || kind.charAt(0).toUpperCase() + kind.slice(1)}
    </div>
  );
}

export { SignerMethod as PaymentMethod };
