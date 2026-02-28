import { WalletType } from "../../../components";
type PreviewProps = {
    address: string;
    wallet: WalletType;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    name?: string;
};
export declare const Preview: ({ address, wallet, onClick, onMouseEnter, onMouseLeave, name, }: PreviewProps) => import("react/jsx-runtime").JSX.Element;
export {};
