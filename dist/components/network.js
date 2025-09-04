import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Skeleton, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "./primitives";
import { hexToString } from "viem";
import { SlotIcon, StarknetColorIcon, StarknetIcon } from "./icons";
import { QuestionIcon } from "./icons/utility/question";
import { constants } from "starknet";
import { cn, getChainName, isSlotChain } from "../utils";
import { useCallback } from "react";
import { toast } from "sonner";
export function Network({ chainId, variant = "secondary", tooltipTriggerClassName, tooltipContentClassName, iconClassName, }) {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(chainId);
        toast.success("Chain ID copied");
    }, [chainId]);
    if (!chainId) {
        return _jsx(Skeleton, { className: "h-[40px] w-[120px] rounded" });
    }
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsxs(Button, { variant: variant, className: cn("flex items-center gap-2 font-inter bg-background hover:bg-background text-xs", tooltipTriggerClassName), onClick: onCopy, children: [(() => {
                                switch (chainId) {
                                    case constants.StarknetChainId.SN_MAIN:
                                        return _jsx(StarknetColorIcon, { className: iconClassName });
                                    case constants.StarknetChainId.SN_SEPOLIA:
                                        return _jsx(StarknetIcon, { className: iconClassName });
                                    default:
                                        return isSlotChain(chainId) ? _jsx(SlotIcon, {}) : _jsx(QuestionIcon, {});
                                }
                            })(), _jsx("div", { children: getChainName(chainId) })] }) }), _jsx(TooltipContent, { children: _jsx("div", { className: tooltipContentClassName, children: hexToString(chainId) }) })] }) }));
}
//# sourceMappingURL=network.js.map