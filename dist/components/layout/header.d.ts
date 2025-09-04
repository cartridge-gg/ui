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
    onOpenSettings?: () => void;
    onLogout?: () => void;
};
export declare function LayoutHeader({ onBack, onClose, hideUsername, hideNetwork, hideSettings, onOpenStarterPack, onOpenSettings, ...innerProps }: HeaderProps): import("react/jsx-runtime").JSX.Element;
type HeaderInnerProps = {
    Icon?: React.ComponentType<IconProps>;
    icon?: React.ReactElement;
    title?: string | React.ReactElement;
    description?: string | React.ReactElement;
    variant?: HeaderVariant;
    right?: React.ReactElement;
    className?: string;
    hideIcon?: boolean;
};
type HeaderVariant = "expanded" | "compressed" | "hidden";
export declare function HeaderInner({ variant, Icon, icon, title, description, right, className, hideIcon, }: HeaderInnerProps): import("react/jsx-runtime").JSX.Element | null;
export declare function HeaderIcon({ variant, Icon, icon, }: Pick<HeaderInnerProps, "variant" | "Icon" | "icon">): import("react/jsx-runtime").JSX.Element;
export declare function IconWrapper({ variant, children, }: {
    variant?: HeaderVariant;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
