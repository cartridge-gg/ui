import { MobileIcon } from "@/components/icons";
import {
  ArgentColorIcon,
  DiscordColorIcon,
  GoogleColorIcon,
  MetaMaskColorIcon,
  PhantomColorIcon,
  RabbyColorIcon,
} from "@/components/icons/brand-color";
import { FingerprintIcon } from "@/components/icons/brand/fingerprint";
import { cn } from "@/utils";

export type SignerPendingCardKind =
  | "google"
  | "SMS"
  | "passkey"
  | "discord"
  | "metamask"
  | "argent"
  | "rabby"
  | "phantom";

interface SignerPendingCardProps {
  className?: string;
  kind: SignerPendingCardKind;
  inProgress: boolean;
  error?: string;
}

const variants: Record<
  SignerPendingCardKind,
  { icon: React.ReactNode; primaryText: string; secondaryText: string }
> = {
  google: {
    icon: <GoogleColorIcon size="xl" />,
    primaryText: "Connecting to Google",
    secondaryText: "Continue in the other window",
  },
  discord: {
    icon: <DiscordColorIcon size="xl" />,
    primaryText: "Connecting to Discord",
    secondaryText: "Continue in the other window",
  },
  SMS: {
    icon: <MobileIcon variant="solid" size="xl" />,
    primaryText: "",
    secondaryText: "",
  },
  passkey: {
    icon: <FingerprintIcon size="xl" />,
    primaryText: "Waiting for Confirmation",
    secondaryText: "Continue in browser",
  },
  metamask: {
    icon: <MetaMaskColorIcon size="xl" />,
    primaryText: "Waiting for Signature",
    secondaryText: "Don't see your wallet? Check your other browser windows",
  },
  argent: {
    icon: <ArgentColorIcon size="xl" />,
    primaryText: "Waiting for Signature",
    secondaryText: "Don't see your wallet? Check your other browser windows",
  },
  rabby: {
    icon: <RabbyColorIcon size="xl" />,
    primaryText: "Waiting for Signature",
    secondaryText: "Don't see your wallet? Check your other browser windows",
  },
  phantom: {
    icon: <PhantomColorIcon size="xl" />,
    primaryText: "Waiting for Signature",
    secondaryText: "Don't see your wallet? Check your other browser windows",
  },
} as const;

export function SignerPendingCard({
  className,
  kind,
  inProgress,
  error,
}: SignerPendingCardProps) {
  const { icon, primaryText, secondaryText } = variants[kind];

  if (kind === "SMS" && (inProgress || error)) {
    return <></>;
  }
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "w-[400px] h-fit p-10 gap-4",
        "rounded",
        "border border-background-200",
        "bg-background-100",
        className,
      )}
    >
      {icon && (
        <div
          className={cn(
            "w-fit h-fit p-2",
            "rounded-[32px]",
            "border border-background-200",
            error && "border-destructive-100",
          )}
        >
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-2 justify-center items-center">
        <span
          className={cn(
            "text-foreground-300 text-sm font-medium text-center",
            error && "text-destructive-100",
          )}
        >
          {error ? error : inProgress ? primaryText : "Success!"}
        </span>
        <span
          className={cn("text-foreground-400 text-sm font-medium text-center")}
        >
          {error
            ? "Please try connecting again"
            : inProgress
              ? secondaryText
              : kind.charAt(0).toUpperCase() + kind.slice(1) + " connected"}
        </span>
      </div>
    </div>
  );
}
