import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementPlayerAvatar, ActivityDetail, ExternalIcon } from "../../../../index";
import { cn, formatAddress, isPublicChain, VoyagerUrl } from "../../../../utils";
import { cva } from "class-variance-authority";
import { getChecksumAddress } from "starknet";
import { ActivityDetails } from "../../activities/details";
import { hexToNumber } from "viem";
const collectibleDetailsVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleDetails({ address, tokenId, standard, chainId, owner, variant, className, ...props }) {
    return (_jsxs(ActivityDetails, { ...props, className: cn(collectibleDetailsVariants({ variant }), className), children: [owner && (_jsx(ActivityDetail, { label: "Owner", children: _jsxs("div", { className: "flex gap-1.5", children: [_jsx(AchievementPlayerAvatar, { username: owner, size: "sm" }), _jsx("p", { className: "text-sm font-medium", children: owner })] }) })), _jsx(ActivityDetail, { label: "Contract Address", children: isPublicChain(chainId) ? (_jsxs("a", { href: VoyagerUrl(chainId).contract(address), draggable: false, className: "flex items-center gap-x-1.5 text-sm", target: "_blank", children: [_jsx("div", { className: "font-medium text-sm", children: formatAddress(getChecksumAddress(address), { size: "xs" }) }), _jsx(ExternalIcon, { size: "sm" })] })) : (_jsx("div", { className: "text-sm", children: formatAddress(getChecksumAddress(address), { size: "xs" }) })) }), _jsx(ActivityDetail, { label: "Token ID", children: tokenId.startsWith("0x") ? hexToNumber(tokenId) : tokenId }), _jsx(ActivityDetail, { className: "rounded-b", label: "Token Standard", children: standard })] }));
}
export default CollectibleDetails;
//# sourceMappingURL=details.js.map