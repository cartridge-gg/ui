import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { Button } from "../components/primitives/button";
import { CONTROLLER_TOAST_MESSAGE_TYPE, } from "../components/primitives/toast/types";
import { ControllerToaster } from "../components/primitives/toast/controller-toaster";
import { toast as sonnerToast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, } from "..";
const meta = {
    title: "Primitives/Toast/Controller Integration",
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#353535" },
                { name: "light", value: "#ffffff" },
            ],
        },
    },
};
export default meta;
function ControllerToasterDemo() {
    const [isLoading, setIsLoading] = useState({});
    const [collapseTransactions, setCollapseTransactions] = useState(false);
    const [disabledTypes, setDisabledTypes] = useState([]);
    const [position, setPosition] = useState("bottom-right");
    const [txCount, setTxCount] = useState(1);
    const [txConfirming, setTxConfirming] = useState(false);
    // Debounced toast function to prevent multiple rapid clicks
    const showToastWithDebounce = useCallback((key, toastFn) => {
        if (isLoading[key])
            return;
        setIsLoading((prev) => ({ ...prev, [key]: true }));
        toastFn();
        setTimeout(() => {
            setIsLoading((prev) => ({ ...prev, [key]: false }));
        }, 100);
    }, [isLoading]);
    const emitControllerToast = (key, options) => {
        showToastWithDebounce(key, () => {
            window.postMessage({
                type: CONTROLLER_TOAST_MESSAGE_TYPE,
                options,
            }, "*");
        });
    };
    const showError = () => {
        const options = {
            variant: "error",
            message: "Failed to purchase asset!",
            duration: 5000,
        };
        emitControllerToast("error", options);
    };
    const showSuccess = () => {
        const options = {
            variant: "success",
            message: "Address copied",
            duration: 5000,
        };
        emitControllerToast("success", options);
    };
    const showSuccessLonger = () => {
        const options = {
            variant: "success",
            message: "You did something that really remarkable and profound!",
            duration: 5000,
        };
        emitControllerToast("successLonger", options);
    };
    const showTransactionConfirming = () => {
        const options = {
            variant: "transaction",
            status: "confirming",
            toastId: `tx-${txCount}`,
            label: "Purchase",
            progress: 50,
            duration: 5000,
            safeToClose: false,
        };
        emitControllerToast("transactionConfirming", options);
        setTxConfirming(true);
    };
    const showTransactionConfirmed = () => {
        const options = {
            variant: "transaction",
            status: "confirmed",
            toastId: `tx-${txCount}`,
            progress: 50,
            duration: 5000,
        };
        emitControllerToast("transactionConfirmed", options);
        setTxConfirming(false);
        setTxCount((prev) => prev + 1);
    };
    const showTransactionError = () => {
        const options = {
            variant: "error",
            message: "Transaction execution failed",
            toastId: `tx-${txCount}`,
            duration: 5000,
        };
        emitControllerToast("transactionError", options);
        setTxConfirming(false);
        setTxCount((prev) => prev + 1);
    };
    const showSwitchToStarknet = () => {
        const options = {
            variant: "network-switch",
            networkName: "Starknet Mainnet",
            // networkIcon: "",
            duration: 5000,
        };
        emitControllerToast("switchToStarknet", options);
    };
    const showSwitchToNums = () => {
        const options = {
            variant: "network-switch",
            networkName: "Nums Chain",
            networkIcon: "https://static.cartridge.gg/presets/nums/icon.png",
            duration: 5000,
        };
        emitControllerToast("switchToNums", options);
    };
    const showMarketplacePurchaseBeast = () => {
        const options = {
            variant: "marketplace",
            action: "purchased",
            collectionName: "Beasts",
            itemNames: [`Beast #${Math.floor(Math.random() * 93225) + 1}`],
            itemImages: [
                "https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image",
            ],
            preset: "loot-survivor",
            duration: 10000,
        };
        emitControllerToast("purchaseBeast", options);
    };
    const showMarketplacePurchaseDuelists = () => {
        const options = {
            variant: "marketplace",
            action: "purchased",
            collectionName: "Pistols at Dawn Duelists",
            itemNames: ["Duelist #111", "Duelist #222", "Duelist #333"],
            itemImages: [
                "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image",
                "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x7aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image",
                "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x7aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image",
            ],
            preset: "pistols",
            duration: 10000,
        };
        emitControllerToast("PurchaseDuelists", options);
    };
    const showMarketplaceSentToken = () => {
        const options = {
            variant: "marketplace",
            action: "sent",
            collectionName: "LORDS",
            itemNames: ["500 LORDS"],
            itemImages: [
                "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
            ],
        };
        emitControllerToast("sentToken", options);
    };
    const showAchievementDraftToast = () => {
        const options = {
            variant: "achievement",
            title: "Pacifist Path",
            subtitle: "Earned!",
            xpAmount: 50,
            isDraft: true,
            progress: 50,
            duration: 5000,
            iconUrl: "",
        };
        emitControllerToast("achievementDraft", options);
    };
    const showAchievementToast = () => {
        const options = {
            variant: "achievement",
            title: "Pacifist Path",
            subtitle: "Earned!",
            xpAmount: 100,
            progress: 100,
            duration: 5000,
            iconUrl: "",
        };
        emitControllerToast("achievement", options);
    };
    // const showAchievementCustomToast = () => {
    //   const options: AchievementToastOptions = {
    //     variant: "achievement",
    //     title: "Pacifist Path",
    //     subtitle: "Earned!",
    //     iconUrl: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
    //     xpAmount: 100,
    //     progress: 100,
    //     duration: 5000,
    //   };
    //   emitControllerToast("achievementCustom", options);
    // };
    // const showQuestToast = () => {
    //   const options: QuestToastOptions = {
    //     variant: "quest",
    //     title: "Daily Quest",
    //     subtitle: "Conquered!",
    //     duration: 5000,
    //   };
    //   emitControllerToast("quest", options);
    // };
    const switchDisabledType = (type) => {
        setDisabledTypes((prev) => {
            if (prev.includes(type)) {
                return prev.filter((t) => t !== type);
            }
            else {
                return [...prev, type];
            }
        });
    };
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "text-white text-lg font-semibold mb-4", children: "Controller Toast Integration" }), _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Generic Controller events" }), _jsx(Button, { onClick: showError, className: "w-full", disabled: isLoading.error, children: isLoading.error ? "Loading..." : "Error" }), _jsx(Button, { onClick: showSuccess, className: "w-full", disabled: isLoading.success, children: isLoading.success ? "Loading..." : "Success" }), _jsx(Button, { onClick: showSuccessLonger, className: "w-full", disabled: isLoading.successLonger, children: isLoading.successLonger ? "Loading..." : "Success (long message)" }), _jsx(Button, { onClick: showTransactionConfirming, className: "w-full", disabled: isLoading.transactionConfirming || txConfirming, children: isLoading.transactionConfirming
                                    ? "Loading..."
                                    : `Confirm TX${txCount}...` }), _jsx(Button, { onClick: showTransactionConfirmed, className: "w-full", disabled: isLoading.transactionConfirmed || !txConfirming, children: isLoading.transactionConfirmed
                                    ? "Loading..."
                                    : `...TX${txCount} confirmed` }), _jsx(Button, { onClick: showTransactionError, className: "w-full", disabled: isLoading.transactionError || !txConfirming, children: isLoading.transactionError
                                    ? "Loading..."
                                    : `...TX${txCount} error` }), _jsx(Button, { onClick: showSwitchToStarknet, className: "w-full", disabled: isLoading.switchToStarknet, children: isLoading.switchToStarknet ? "Loading..." : "Switch to Starknet" }), _jsx(Button, { onClick: showSwitchToNums, className: "w-full", disabled: isLoading.switchToNums, children: isLoading.switchToNums ? "Loading..." : "Switch to Nums" }), _jsx(Button, { onClick: () => sonnerToast.success("sonner.success()", { duration: 5000 }), className: "w-full", children: "sonner.success()" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Specialized events" }), _jsx(Button, { onClick: showMarketplacePurchaseBeast, className: "w-full", disabled: isLoading.purchaseBeast, children: isLoading.purchaseBeast
                                    ? "Loading..."
                                    : "Marketplace Purchase Beast" }), _jsx(Button, { onClick: showMarketplacePurchaseDuelists, className: "w-full", disabled: isLoading.PurchaseDuelists, children: isLoading.PurchaseDuelists
                                    ? "Loading..."
                                    : "Marketplace Purchase Duelists" }), _jsx(Button, { onClick: showMarketplaceSentToken, className: "w-full", disabled: isLoading.sentToken, children: isLoading.sentToken ? "Loading..." : "Marketplace Sent Token" }), _jsx(Button, { onClick: showAchievementDraftToast, className: "w-full", disabled: isLoading.achievementDraft, children: isLoading.achievementDraft ? "Loading..." : "Achievement Draft" }), _jsx(Button, { onClick: showAchievementToast, className: "w-full", disabled: isLoading.achievement, children: isLoading.achievement ? "Loading..." : "Achievement Complete" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Client Options" }), _jsx("div", { className: "py-2", children: _jsxs(Select, { value: position, onValueChange: (value) => setPosition(value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select position" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "top-left", children: "Top Left" }), _jsx(SelectItem, { value: "top-center", children: "Top Center" }), _jsx(SelectItem, { value: "top-right", children: "Top Right" }), _jsx(SelectItem, { value: "bottom-left", children: "Bottom Left" }), _jsx(SelectItem, { value: "bottom-center", children: "Bottom Center" }), _jsx(SelectItem, { value: "bottom-right", children: "Bottom Right" })] })] }) }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Switch, { value: disabledTypes.includes("error") ? 1 : 0, onCheckedChange: () => switchDisabledType("error") }), "Disable Error"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Switch, { value: disabledTypes.includes("success") ? 1 : 0, onCheckedChange: () => switchDisabledType("success") }), "Disable Success"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Switch, { value: disabledTypes.includes("network-switch") ? 1 : 0, onCheckedChange: () => switchDisabledType("network-switch") }), "Disable Network Switch"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Switch, { value: disabledTypes.includes("transaction") ? 1 : 0, onCheckedChange: () => switchDisabledType("transaction") }), "Disable Transaction"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Switch, { value: disabledTypes.includes("marketplace") ? 1 : 0, onCheckedChange: () => switchDisabledType("marketplace") }), "Disable Marketplace"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Switch, { value: disabledTypes.includes("achievement") ? 1 : 0, onCheckedChange: () => switchDisabledType("achievement") }), "Disable Achievement"] }), _jsxs("div", { className: "flex gap-2 pt-2", children: [_jsx(Switch, { value: collapseTransactions ? 1 : 0, onCheckedChange: (value) => setCollapseTransactions(value) }), "Collapse Transactions"] })] })] }), _jsx(ControllerToaster, { collapseTransactions: collapseTransactions, disabledTypes: disabledTypes, position: position })] }));
}
export const IntegrationDemo = {
    render: () => _jsx(ControllerToasterDemo, {}),
};
export const UsageExample = {
    render: () => (_jsxs("div", { className: "space-y-4 text-white", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Integrate Controller Toasts in your app:" }), _jsx("div", { className: "space-y-3 text-sm", children: _jsxs("div", { children: [_jsxs("h3", { className: "font-medium text-green-400", children: ["1. Add the ", "<ControllerToaster />", " component to your game: 2. If you already have a sonner toaster, remove its ", "<Toaster />", " ", "component: 3. Or, if you want the controller toasters to be independent from your existing sonner toaster, give it a toasterId:", " ", '<ControllerToaster toasterId="controller" />'] }), _jsx("pre", { className: "bg-gray-800 p-2 rounded mt-1 text-xs", children: `import { ControllerToaster } from "@cartridge/ui";

function App() {
  return (
    <div>
      {/* Your app content */}
      <ControllerToaster />
    </div>
  );
}` })] }) })] })),
};
//# sourceMappingURL=toast-controller-integration.stories.js.map