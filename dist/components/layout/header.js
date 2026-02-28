import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowIcon, ControllerIcon, GearIcon, GiftIcon, TimesIcon, } from "../../components/icons";
import { Network } from "../../components/network";
import { Button } from "../../components/primitives/button";
import { useUI } from "../../hooks";
import { ConnectionTooltip, Thumbnail } from "../../index";
import { cn, isIframe } from "../../utils";
import { useMemo } from "react";
import { StarryHeaderBackground } from "./starry-header";
import { useCSSCustomProperty } from "../../hooks/theme";
export function LayoutHeader({ onBack, onClose, hideUsername, hideNetwork, hideSettings, onOpenStarterPack, onOpenSettings, ...innerProps }) {
    const { account, chainId, closeModal, openSettings, followers, followings, onFollowersClick, onFollowingsClick, onLogout, } = useUI();
    // Reactively watch for changes to the theme cover URL
    const coverUrl = useCSSCustomProperty("--theme-cover-url");
    // Helper function to check if we should use StarryHeader
    const shouldUseStarryHeader = useMemo(() => {
        // Use StarryHeader if:
        // 1. It's a cartridge theme, OR
        // 2. No cover URL is set or it's empty
        return coverUrl.includes("presets/cartridge/") || !coverUrl;
    }, [coverUrl]);
    const shouldShowCloseButton = useMemo(() => {
        return onClose || (closeModal && isIframe());
    }, [onClose, closeModal]);
    return (_jsxs("div", { className: "sticky top-0 w-full z-10 bg-background", children: [(() => {
                switch (innerProps.variant) {
                    case "expanded":
                        return (_jsxs("div", { className: "flex flex-col w-full h-[176px]", children: [shouldUseStarryHeader ? (_jsx(StarryHeaderBackground, { className: "w-full h-[136px] relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-background before:pointer-events-none" })) : (_jsx("div", { className: "w-full h-[136px] bg-[image:var(--theme-cover-url)] bg-cover bg-center relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-background before:pointer-events-none" })), _jsx(HeaderInner, { ...innerProps, className: "absolute bottom-0 left-0 right-0" })] }));
                    case "compressed":
                    default:
                        return (_jsxs("div", { className: "flex flex-col bg-spacer-100 gap-y-px", children: [shouldUseStarryHeader ? (_jsx(StarryHeaderBackground, { className: "w-full h-16 pb-6 relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-background-100 before:pointer-events-none", height: 64 })) : (_jsx("div", { className: "w-full bg-cover bg-center h-16 pb-6 bg-[linear-gradient(transparent,var(--background-100)),var(--theme-cover-url)]" })), _jsx("div", { className: "bg-background-100", children: _jsx(HeaderInner, { ...innerProps }) })] }));
                }
            })(), _jsxs("div", { className: "flex items-center justify-between absolute top-0 left-0 right-0 h-16 p-3 z-50", children: [onBack ? (_jsx(BackButton, { onClick: onBack })) : shouldShowCloseButton ? (_jsx(CloseButton, { onClose: () => {
                            if (onClose)
                                onClose();
                            if (closeModal)
                                closeModal();
                        } })) : null, _jsxs("div", { className: "flex items-center gap-2", children: [!!chainId &&
                                (account ? (_jsxs(_Fragment, { children: [onOpenStarterPack && (_jsxs(Button, { variant: "secondary", size: "default", className: "gap-2", onClick: onOpenStarterPack, children: [_jsx(GiftIcon, { size: "default", variant: "line" }), _jsx("span", { children: "Get Starter Pack" })] })), _jsx(ConnectionTooltip, { username: account.username, address: account.address, chainId: chainId, followers: followers, followings: followings, hideNetwork: hideNetwork, hideUsername: hideUsername, onFollowersClick: onFollowersClick, onFollowingsClick: onFollowingsClick, onOpenSettings: onOpenSettings ? onOpenSettings : openSettings, onLogout: onLogout })] })) : (!hideNetwork && _jsx(Network, { chainId: chainId }))), openSettings && !hideSettings && (_jsx(SettingsButton, { onClick: openSettings }))] })] })] }));
}
export function HeaderInner({ variant, Icon, icon, title, description, right, className, hideIcon, }) {
    if (variant === "hidden")
        return null;
    return (_jsxs("div", { className: cn("p-4 pb-0 flex items-center justify-between", className), children: [_jsxs("div", { className: "flex items-center flex-shrink min-w-0 gap-3", children: [!hideIcon && _jsx(HeaderIcon, { variant: variant, Icon: Icon, icon: icon }), _jsx(Headline, { variant: variant, title: title, description: description })] }), right] }));
}
export function HeaderIcon({ variant, Icon, icon, }) {
    // Reactively watch for changes to the theme icon URL
    const iconUrl = useCSSCustomProperty("--theme-icon-url");
    return (_jsx(IconWrapper, { variant: variant, children: (() => {
            if (Icon) {
                return _jsx(Icon, { size: "lg" });
            }
            if (icon) {
                return icon;
            }
            if (iconUrl) {
                // This will implicitly use the theme icon url CSS variable
                return (_jsx(Thumbnail, { variant: variant === "expanded" ? "dark" : "default", size: variant === "expanded" ? "xxl" : "lg" }));
            }
            return (_jsx(Thumbnail, { variant: variant === "expanded" ? "dark" : "default", size: variant === "expanded" ? "xxl" : "lg", icon: _jsx(ControllerIcon, { size: "xl", className: "fill-current text-primary" }) }));
        })() }));
}
export function IconWrapper({ variant, children, }) {
    switch (variant) {
        case "expanded":
            return (_jsx("div", { className: "flex-shrink-0 rounded size-20 bg-background flex items-center justify-center", children: _jsx("div", { className: "rounded bg-background-200 size-[calc(100%-8px)] flex items-center justify-center", children: children }) }));
        default:
        case "compressed":
            return (_jsx("div", { className: "flex-shrink-0 rounded size-10 flex items-center justify-center bg-background-200", children: children }));
    }
}
function Headline({ variant, title, description, }) {
    return (_jsxs("div", { className: cn("flex flex-col gap-0.5 justify-between", variant === "expanded" ? "gap-1.5" : "gap-0.5"), children: [_jsx("div", { className: "text-lg/[22px] font-semibold line-clamp-1 text-ellipsis", children: title }), description && (_jsx("div", { className: cn("text-foreground-300 break-words text-xs"), children: description }))] }));
}
function CloseButton({ onClose }) {
    return (_jsx(Button, { variant: "icon", size: "icon", onClick: onClose, children: _jsx(TimesIcon, {}) }));
}
function BackButton({ onClick }) {
    return (_jsx(Button, { variant: "icon", size: "icon", onClick: onClick, children: _jsx(ArrowIcon, { variant: "left" }) }));
}
function SettingsButton({ onClick }) {
    return (_jsx(Button, { variant: "icon", size: "icon", onClick: onClick, children: _jsx(GearIcon, {}) }));
}
//# sourceMappingURL=header.js.map