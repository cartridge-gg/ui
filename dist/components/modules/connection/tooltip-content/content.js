import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPlayerBadge, Button, CopyIcon, GlobeIcon, SlotIcon, StarknetColorIcon, StarknetIcon, Thumbnail, useUI, } from "../../../../index";
import { cn, formatAddress, getChainName, isSlotChain } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useCallback, useMemo } from "react";
import { constants, getChecksumAddress } from "starknet";
import { toast } from "sonner";
import { useLayoutContext } from "../../../../components/layout/context";
import QrCodeIcon from "../../../../components/icons/utility/qr-code";
export const connectionTooltipContentVariants = cva("select-none flex flex-col gap-2 p-4 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]", {
    variants: {
        variant: {
            default: "bg-background-150",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ConnectionTooltipContent = ({ username, address, chainId, followers, followings, hideNetwork, setOpen, onFollowersClick, onFollowingsClick, onOpenSettings, onLogout, variant, className, }) => {
    const { setWithBackground } = useLayoutContext();
    const { showQrCode } = useUI();
    const Icon = useMemo(() => {
        switch (chainId) {
            case constants.StarknetChainId.SN_MAIN:
                return _jsx(StarknetColorIcon, { className: "scale-[1.33]" });
            case constants.StarknetChainId.SN_SEPOLIA:
                return _jsx(StarknetIcon, { className: "scale-150" });
            default:
                return isSlotChain(chainId) ? (_jsx(SlotIcon, { className: "scale-150" })) : (_jsx(GlobeIcon, { variant: "solid", className: "scale-150" }));
        }
    }, [chainId]);
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(getChecksumAddress(address));
        toast.success("Address copied");
        setWithBackground(false);
        if (setOpen)
            setOpen(false);
    }, [address, setOpen, setWithBackground]);
    const formattedAddress = useMemo(() => formatAddress(getChecksumAddress(address), {
        first: 4,
        last: 4,
        size: "xs",
    }), [address]);
    const handleShowQrCode = useCallback(() => {
        if (!showQrCode)
            return;
        setOpen?.(false);
        setWithBackground(false);
        showQrCode(true);
    }, [showQrCode, setOpen, setWithBackground]);
    const handleOpenSettings = useCallback(() => {
        if (!onOpenSettings)
            return;
        setOpen?.(false);
        setWithBackground(false);
        onOpenSettings();
    }, [onOpenSettings, setOpen, setWithBackground]);
    const handleLogout = useCallback(() => {
        if (!onLogout)
            return;
        setOpen?.(false);
        setWithBackground(false);
        onLogout();
    }, [onLogout, setOpen, setWithBackground]);
    return (_jsxs("div", { className: cn(connectionTooltipContentVariants({ variant }), className, "relative"), children: [_jsxs("div", { className: "flex items-start w-full gap-3 justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AchievementPlayerBadge, { username: username, size: "xl" }), _jsx("p", { className: "text-lg/[22px] font-semibold", children: username })] }), address && (_jsx("div", { onClick: handleShowQrCode, className: " absolute flex top-4 right-4 items-center gap-3 w-10 h-10 bg-background-200 rounded-full justify-center cursor-pointer hover:bg-background-300 transition-all", children: _jsx(QrCodeIcon, {}) }))] }), _jsxs("div", { className: "flex flex-col gap-px bg-background-200", children: [_jsxs("div", { className: "flex items-center justify-between gap-2 px-2 py-2.5 bg-background-150", children: [_jsx("p", { className: "text-sm text-foreground-400 select-none", children: "Address:" }), _jsx("div", { onClick: () => setOpen?.(false), children: _jsxs("div", { className: "flex items-center gap-1 cursor-pointer text-foreground-300 hover:text-foreground-200", onClick: onCopy, children: [_jsx("p", { className: "text-sm font-mono font-normal", children: formattedAddress }), _jsx(CopyIcon, { size: "sm" })] }) })] }), _jsxs("div", { className: cn("flex items-center justify-between gap-2 px-2 py-2.5 bg-background-150", hideNetwork && "hidden"), children: [_jsx("p", { className: "text-sm text-foreground-400 select-none", children: "Network:" }), _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx(Thumbnail, { size: "xs", icon: Icon, rounded: true }), _jsx("p", { className: "text-sm font-normal capitalize", children: getChainName(chainId).toLowerCase() })] })] })] }), _jsxs("div", { className: cn("flex items-center justify-between gap-3", (followers === undefined || followings === undefined) && "hidden"), children: [_jsxs(Button, { variant: "secondary", className: "w-1/2 h-9 normal-case font-sans gap-1", disabled: !onFollowersClick, onClick: onFollowersClick, children: [_jsx("p", { className: "text-sm font-medium text-foreground-100", children: followers }), _jsx("span", { className: "text-sm font-normal text-foreground-300", children: "Followers" })] }), _jsxs(Button, { variant: "secondary", className: "w-1/2 h-9 normal-case font-sans gap-1", disabled: !onFollowingsClick, onClick: onFollowingsClick, children: [_jsx("p", { className: "text-sm font-medium text-foreground-100", children: followings }), _jsx("span", { className: "text-sm font-normal text-foreground-300", children: "Following" })] })] }), onOpenSettings && (_jsx(Button, { variant: "secondary", className: "w-full h-9 normal-case font-sans px-1.5 py-2", onClick: handleOpenSettings, children: _jsx("span", { className: "text-sm font-medium text-foreground-100", children: "Settings" }) })), _jsx(Button, { variant: "secondary", className: "w-full h-9 normal-case font-sans px-1.5 py-2", onClick: handleLogout, children: _jsx("span", { className: "text-sm font-medium text-foreground-100", children: "Log Out" }) })] }));
};
export default ConnectionTooltipContent;
//# sourceMappingURL=content.js.map