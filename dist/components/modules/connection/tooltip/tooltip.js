import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutContext } from "../../../../components/layout/context";
import { AchievementPlayerAvatar, ConnectionTooltipContent, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useCallback, useEffect, useRef, useState, } from "react";
export const connectionTooltipVariants = cva("flex items-center gap-1.5 rounded px-3 py-2.5", {
    variants: {
        variant: {
            darkest: "bg-background-100 hover:bg-background-200",
            darker: "bg-background-100 hover:bg-background-200",
            dark: "bg-background-100 hover:bg-background-200",
            default: "bg-background-200 hover:bg-background-300",
            light: "bg-background-300 hover:bg-background-400",
            lighter: "bg-background-400 hover:bg-background-500",
            lightest: "bg-background-500 hover:bg-background-500",
            ghost: "bg-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ConnectionTooltip = ({ username, address, chainId, followers, followings, hideUsername, hideNetwork, onFollowersClick, onFollowingsClick, onOpenSettings, onLogout, variant, className, children, ...props }) => {
    const { setWithBackground } = useLayoutContext();
    const [open, setOpen] = useState(false);
    const triggerRef = useRef(null);
    const contentRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            const target = event.target;
            if (!triggerRef.current?.contains(target) &&
                !contentRef.current?.contains(target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpen]);
    const handleClick = useCallback(() => {
        setOpen(true);
        setWithBackground(true);
    }, [setOpen, setWithBackground]);
    const handleFollowersClick = useCallback(() => {
        onFollowersClick?.();
        setOpen(false);
        setWithBackground(false);
    }, [onFollowersClick, setOpen, setWithBackground]);
    const handleFollowingsClick = useCallback(() => {
        onFollowingsClick?.();
        setOpen(false);
        setWithBackground(false);
    }, [onFollowingsClick, setOpen, setWithBackground]);
    const handleLogout = useCallback(() => {
        onLogout?.();
        setOpen(false);
        setWithBackground(false);
    }, [onLogout, setOpen, setWithBackground]);
    const handleOpenSettings = useCallback(() => {
        onOpenSettings?.();
        setOpen(false);
        setWithBackground(false);
    }, [onOpenSettings, setOpen, setWithBackground]);
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { open: open, onOpenChange: () => { }, children: [_jsx("div", { ref: triggerRef, ...props, children: _jsxs(TooltipTrigger, { className: cn(connectionTooltipVariants({ variant }), className, hideUsername && "hidden"), onClick: handleClick, children: [username && (_jsx(AchievementPlayerAvatar, { username: username, size: "sm" })), _jsx("div", { className: "text-sm font-semibold", children: username })] }) }), _jsxs(TooltipContent, { ref: contentRef, className: "p-0 overflow-visible my-1 mx-3", children: [username && address && chainId && (_jsx(ConnectionTooltipContent, { username: username, address: address, chainId: chainId, followers: followers, followings: followings, hideNetwork: hideNetwork, setOpen: setOpen, onFollowersClick: onFollowersClick ? handleFollowersClick : undefined, onFollowingsClick: onFollowingsClick ? handleFollowingsClick : undefined, onOpenSettings: onOpenSettings ? handleOpenSettings : undefined, onLogout: onLogout ? handleLogout : undefined })), children] })] }) }));
};
export default ConnectionTooltip;
//# sourceMappingURL=tooltip.js.map