import { SignerPendingCardKind } from "../signer-pending-card/signer-pending-card";
export type SignerMethodKind = SignerPendingCardKind | "wallet";
interface SignerMethodProps {
    className?: string;
    kind: SignerMethodKind;
    onClick: () => void;
}
export declare function SignerMethod({ className, kind, onClick }: SignerMethodProps): import("react/jsx-runtime").JSX.Element;
export {};
