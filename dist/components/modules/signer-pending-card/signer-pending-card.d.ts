export type SignerPendingCardKind = "google" | "sms" | "passkey" | "discord" | "metamask" | "argent" | "rabby" | "phantom" | "walletconnect";
interface SignerPendingCardProps {
    className?: string;
    kind: SignerPendingCardKind;
    inProgress: boolean;
    error?: string;
}
export declare function SignerPendingCard({ className, kind, inProgress, error, }: SignerPendingCardProps): import("react/jsx-runtime").JSX.Element;
export {};
