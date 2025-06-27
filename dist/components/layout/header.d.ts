import { IconProps } from "../../components/icons";
export type HeaderProps = HeaderInnerProps & {
    onBack?: () => void;
    onClose?: () => void;
    hideUsername?: boolean;
    hideNetwork?: boolean;
    hideSettings?: boolean;
    onOpenStarterPack?: () => void;
    onFollowersClick?: () => void;
    onFollowingsClick?: () => void;
    onLogout?: () => void;
};
export declare function LayoutHeader({ onBack, onClose, hideUsername, hideNetwork, hideSettings, onOpenStarterPack, ...innerProps }: HeaderProps): import("react/jsx-runtime").JSX.Element;
type HeaderInnerProps = {
    Icon?: React.ComponentType<IconProps>;
    icon?: React.ReactElement;
    title?: string | React.ReactElement;
    description?: string | React.ReactElement;
    variant?: HeaderVariant;
    right?: React.ReactElement;
    className?: string;
};
type HeaderVariant = "expanded" | "compressed" | "hidden";
export {};
