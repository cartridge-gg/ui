import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../components/primitives/button";
import { useToast, } from "../components/primitives/toast/use-toast";
import { showAchievementToast, showMarketplaceToast, showNetworkSwitchToast, showErrorToast, showTransactionToast, } from "../components/primitives/toast/specialized-toasts";
import { StarknetIcon } from "../components/icons/brand";
import { useState, useCallback } from "react";
const meta = {
    title: "Primitives/Toast/Integration Examples",
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
function ToastIntegrationDemo() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState({});
    // Debounced toast function to prevent multiple rapid clicks
    const showToastWithDebounce = useCallback((key, toastFn) => {
        if (isLoading[key])
            return;
        setIsLoading((prev) => ({ ...prev, [key]: true }));
        toastFn();
        setTimeout(() => {
            setIsLoading((prev) => ({ ...prev, [key]: false }));
        }, 1000);
    }, [isLoading]);
    const showAchievement = () => {
        showToastWithDebounce("achievement", () => {
            toast(showAchievementToast({
                title: "Pacifist Path",
                subtitle: "Earned!",
                xpAmount: 100,
                progress: 66.7,
                isDraft: false,
                duration: 4000, // 4 seconds
            }));
        });
    };
    const showDraftAchievement = () => {
        showToastWithDebounce("draft", () => {
            toast(showAchievementToast({
                title: "Diamonds",
                subtitle: "Earned!",
                xpAmount: 100,
                progress: 16.7,
                isDraft: true,
                duration: 6000, // 6 seconds
            }));
        });
    };
    const showMarketplacePurchase = () => {
        showToastWithDebounce("purchase", () => {
            toast(showMarketplaceToast({
                title: "Purchased",
                collectionName: "Beasts",
                itemNames: ["Beast #111"],
                itemImages: [
                    "https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image",
                ],
                preset: "loot-survivor",
            }));
        });
    };
    const showMarketplaceSentToken = () => {
        showToastWithDebounce("sentToken", () => {
            toast(showMarketplaceToast({
                title: "Sent",
                collectionName: "LORDS",
                itemNames: ["500 LORDS"],
                itemImages: [
                    "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
                ],
            }));
        });
    };
    const showNetworkSwitch = () => {
        showToastWithDebounce("network", () => {
            toast(showNetworkSwitchToast({
                networkName: "Starknet Mainnet",
                networkIcon: _jsx(StarknetIcon, { size: "default" }),
                duration: 3000, // 3 seconds
            }));
        });
    };
    const showError = () => {
        showToastWithDebounce("error", () => {
            toast(showErrorToast({
                message: "Execution Error",
                progress: 66.7,
                duration: 5000, // 5 seconds
            }));
        });
    };
    const showTransaction = () => {
        showToastWithDebounce("transaction", () => {
            toast(showTransactionToast({
                status: "confirming",
                isExpanded: true,
                label: "New Game",
                progress: 66.7,
                duration: 8000, // 8 seconds for confirming
            }));
        });
    };
    const showConfirmedTransaction = () => {
        showToastWithDebounce("confirmed", () => {
            toast(showTransactionToast({
                status: "confirmed",
                isExpanded: true,
                label: "Token Swap",
                progress: 100,
                duration: 3000, // 3 seconds for confirmed
            }));
        });
    };
    const showCollapsedTransaction = () => {
        showToastWithDebounce("collapsed", () => {
            toast(showTransactionToast({
                status: "confirming",
                isExpanded: false,
                duration: 4000, // 4 seconds
            }));
        });
    };
    const showQuickToast = () => {
        showToastWithDebounce("quick", () => {
            toast(showAchievementToast({
                title: "Quick Toast",
                subtitle: "Fast!",
                xpAmount: 50,
                progress: 100,
                isDraft: false,
                duration: 2000, // 2 seconds
            }));
        });
    };
    const showLongToast = () => {
        showToastWithDebounce("long", () => {
            toast(showErrorToast({
                message: "Long Duration Error",
                progress: 33.3,
                duration: 10000, // 10 seconds
            }));
        });
    };
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "text-white text-lg font-semibold mb-4", children: "Toast Integration with useToast Hook" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Achievement Toasts" }), _jsx(Button, { onClick: showAchievement, className: "w-full", disabled: isLoading.achievement, children: isLoading.achievement ? "Loading..." : "Show Achievement (4s)" }), _jsx(Button, { onClick: showDraftAchievement, className: "w-full", disabled: isLoading.draft, children: isLoading.draft ? "Loading..." : "Show Draft Achievement (6s)" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Marketplace Toasts" }), _jsx(Button, { onClick: showMarketplacePurchase, className: "w-full", disabled: isLoading.purchase, children: isLoading.purchase ? "Loading..." : "Marketplace Purchase" }), _jsx(Button, { onClick: showMarketplaceSentToken, className: "w-full", disabled: isLoading.sentToken, children: isLoading.sentToken ? "Loading..." : "Marketplace Sent Token" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Network & Error" }), _jsx(Button, { onClick: showNetworkSwitch, className: "w-full", disabled: isLoading.network, children: isLoading.network ? "Loading..." : "Show Network Switch (3s)" }), _jsx(Button, { onClick: showError, className: "w-full", disabled: isLoading.error, children: isLoading.error ? "Loading..." : "Show Error (5s)" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Transaction Status" }), _jsx(Button, { onClick: showTransaction, className: "w-full", disabled: isLoading.transaction, children: isLoading.transaction ? "Loading..." : "Show Confirming (8s)" }), _jsx(Button, { onClick: showConfirmedTransaction, className: "w-full", disabled: isLoading.confirmed, children: isLoading.confirmed ? "Loading..." : "Show Confirmed (3s)" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Duration Examples" }), _jsx(Button, { onClick: showQuickToast, className: "w-full", disabled: isLoading.quick, children: isLoading.quick ? "Loading..." : "Quick Toast (2s)" }), _jsx(Button, { onClick: showLongToast, className: "w-full", disabled: isLoading.long, children: isLoading.long ? "Loading..." : "Long Toast (10s)" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-white text-sm font-medium", children: "Collapsed View" }), _jsx(Button, { onClick: showCollapsedTransaction, className: "w-full max-w-48", disabled: isLoading.collapsed, children: isLoading.collapsed ? "Loading..." : "Show Collapsed (4s)" })] })] }), _jsx("div", { className: "text-xs text-gray-400 mt-4", children: "Click buttons to trigger specialized toasts with different durations. Buttons are debounced to prevent multiple toasts." })] }));
}
export const IntegrationDemo = {
    render: () => _jsx(ToastIntegrationDemo, {}),
};
export const UsageExample = {
    render: () => (_jsxs("div", { className: "space-y-4 text-white", children: [_jsx("h2", { className: "text-lg font-semibold", children: "How to Use Specialized Toasts" }), _jsxs("div", { className: "space-y-3 text-sm", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium text-green-400", children: "1. Import the convenience functions:" }), _jsx("pre", { className: "bg-gray-800 p-2 rounded mt-1 text-xs", children: `import { 
  showAchievementToast, 
  showNetworkSwitchToast,
  showErrorToast,
  showTransactionToast 
} from "../components/primitives/toast";` })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-green-400", children: "2. Use with the existing useToast hook:" }), _jsx("pre", { className: "bg-gray-800 p-2 rounded mt-1 text-xs", children: `const { toast } = useToast();

// Show achievement toast with custom duration
toast(showAchievementToast({
  title: "Quest Complete",
  subtitle: "Earned!",
  xpAmount: 150,
  progress: 100,
  isDraft: false,
  duration: 4000 // 4 seconds
}));

// Show network switch with default duration (5s)
toast(showNetworkSwitchToast({
  networkName: "Ethereum Mainnet",
  networkIcon: <EthereumIcon />
}));

// Show error with long duration
toast(showErrorToast({
  message: "Transaction failed",
  progress: 25,
  duration: 8000 // 8 seconds
}));

// Show transaction notification
toast(showTransactionToast({
  status: "confirming",
  isExpanded: true,
  label: "Token Swap",
  progress: 45,
  duration: 6000
}));` })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-green-400", children: "3. Duration Options:" }), _jsx("pre", { className: "bg-gray-800 p-2 rounded mt-1 text-xs", children: `// Default duration: 5000ms (5 seconds)
// Quick notifications: 2000-3000ms
// Standard: 4000-6000ms  
// Important/Error: 6000-10000ms
// Persistent: omit duration (manual dismiss only)` })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-green-400", children: "4. Add Toaster to your app:" }), _jsx("pre", { className: "bg-gray-800 p-2 rounded mt-1 text-xs", children: `import { SonnerToaster } from "../components/primitives/sonner";

function App() {
  return (
    <div>
      {/* Your app content */}
      <SonnerToaster />
    </div>
  );
}` })] })] })] })),
};
//# sourceMappingURL=toast-integration.stories.js.map