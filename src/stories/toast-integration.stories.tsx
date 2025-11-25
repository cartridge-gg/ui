import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/primitives/button";
import { useToast } from "@/components/primitives/toast/use-toast";
import { Toaster } from "@/components/primitives/toast/toaster";
import {
  showAchievementToast,
  showNetworkSwitchToast,
  showErrorToast,
  showTransactionToast,
} from "@/components/primitives/toast/specialized-toasts";
import { useState, useCallback } from "react";

const meta: Meta = {
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

type Story = StoryObj;

function ToastIntegrationDemo() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  // Debounced toast function to prevent multiple rapid clicks
  const showToastWithDebounce = useCallback(
    (key: string, toastFn: () => void) => {
      if (isLoading[key]) return;

      setIsLoading((prev) => ({ ...prev, [key]: true }));
      toastFn();

      setTimeout(() => {
        setIsLoading((prev) => ({ ...prev, [key]: false }));
      }, 1000);
    },
    [isLoading],
  );

  const showAchievement = () => {
    showToastWithDebounce("achievement", () => {
      toast(
        showAchievementToast({
          title: "Pacifist Path",
          subtitle: "Earned!",
          xpAmount: 100,
          progress: 66.7,
          isDraft: false,
          duration: 4000, // 4 seconds
        }),
      );
    });
  };

  const showDraftAchievement = () => {
    showToastWithDebounce("draft", () => {
      toast(
        showAchievementToast({
          title: "Diamonds",
          subtitle: "Earned!",
          xpAmount: 100,
          progress: 16.7,
          isDraft: true,
          duration: 6000, // 6 seconds
        }),
      );
    });
  };

  const showNetworkSwitch = () => {
    showToastWithDebounce("network", () => {
      toast(
        showNetworkSwitchToast({
          networkName: "Starknet Mainnet",
          duration: 3000, // 3 seconds
        }),
      );
    });
  };

  const showError = () => {
    showToastWithDebounce("error", () => {
      toast(
        showErrorToast({
          message: "Execution Error",
          progress: 66.7,
          duration: 5000, // 5 seconds
        }),
      );
    });
  };

  const showTransaction = () => {
    showToastWithDebounce("transaction", () => {
      toast(
        showTransactionToast({
          status: "confirming",
          isExpanded: true,
          label: "New Game",
          progress: 66.7,
          duration: 8000, // 8 seconds for confirming
        }),
      );
    });
  };

  const showConfirmedTransaction = () => {
    showToastWithDebounce("confirmed", () => {
      toast(
        showTransactionToast({
          status: "confirmed",
          isExpanded: true,
          label: "Token Swap",
          progress: 100,
          duration: 3000, // 3 seconds for confirmed
        }),
      );
    });
  };

  const showCollapsedTransaction = () => {
    showToastWithDebounce("collapsed", () => {
      toast(
        showTransactionToast({
          status: "confirming",
          isExpanded: false,
          duration: 4000, // 4 seconds
        }),
      );
    });
  };

  const showQuickToast = () => {
    showToastWithDebounce("quick", () => {
      toast(
        showAchievementToast({
          title: "Quick Toast",
          subtitle: "Fast!",
          xpAmount: 50,
          progress: 100,
          isDraft: false,
          duration: 2000, // 2 seconds
        }),
      );
    });
  };

  const showLongToast = () => {
    showToastWithDebounce("long", () => {
      toast(
        showErrorToast({
          message: "Long Duration Error",
          progress: 33.3,
          duration: 10000, // 10 seconds
        }),
      );
    });
  };

  return (
    <div className="space-y-4">
      <div className="text-white text-lg font-semibold mb-4">
        Toast Integration with useToast Hook
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Achievement Toasts</h3>
          <Button
            onClick={showAchievement}
            className="w-full"
            disabled={isLoading.achievement}
          >
            {isLoading.achievement ? "Loading..." : "Show Achievement (4s)"}
          </Button>
          <Button
            onClick={showDraftAchievement}
            className="w-full"
            disabled={isLoading.draft}
          >
            {isLoading.draft ? "Loading..." : "Show Draft Achievement (6s)"}
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Network & Error</h3>
          <Button
            onClick={showNetworkSwitch}
            className="w-full"
            disabled={isLoading.network}
          >
            {isLoading.network ? "Loading..." : "Show Network Switch (3s)"}
          </Button>
          <Button
            onClick={showError}
            className="w-full"
            disabled={isLoading.error}
          >
            {isLoading.error ? "Loading..." : "Show Error (5s)"}
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Transaction Status</h3>
          <Button
            onClick={showTransaction}
            className="w-full"
            disabled={isLoading.transaction}
          >
            {isLoading.transaction ? "Loading..." : "Show Confirming (8s)"}
          </Button>
          <Button
            onClick={showConfirmedTransaction}
            className="w-full"
            disabled={isLoading.confirmed}
          >
            {isLoading.confirmed ? "Loading..." : "Show Confirmed (3s)"}
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Duration Examples</h3>
          <Button
            onClick={showQuickToast}
            className="w-full"
            disabled={isLoading.quick}
          >
            {isLoading.quick ? "Loading..." : "Quick Toast (2s)"}
          </Button>
          <Button
            onClick={showLongToast}
            className="w-full"
            disabled={isLoading.long}
          >
            {isLoading.long ? "Loading..." : "Long Toast (10s)"}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-white text-sm font-medium">Collapsed View</h3>
        <Button
          onClick={showCollapsedTransaction}
          className="w-full max-w-48"
          disabled={isLoading.collapsed}
        >
          {isLoading.collapsed ? "Loading..." : "Show Collapsed (4s)"}
        </Button>
      </div>

      <div className="text-xs text-gray-400 mt-4">
        Click buttons to trigger specialized toasts with different durations.
        Buttons are debounced to prevent multiple toasts.
      </div>

      <Toaster />
    </div>
  );
}

export const IntegrationDemo: Story = {
  render: () => <ToastIntegrationDemo />,
};

export const UsageExample: Story = {
  render: () => (
    <div className="space-y-4 text-white">
      <h2 className="text-lg font-semibold">How to Use Specialized Toasts</h2>

      <div className="space-y-3 text-sm">
        <div>
          <h3 className="font-medium text-green-400">
            1. Import the convenience functions:
          </h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {`import {
  showAchievementToast,
  showNetworkSwitchToast,
  showErrorToast,
  showTransactionToast
} from "@/components/primitives/toast";`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium text-green-400">
            2. Use with the existing useToast hook:
          </h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {`const { toast } = useToast();

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
  networkIcon: "Ethereum" // String for first letter, or URL for image
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
}));`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium text-green-400">3. Duration Options:</h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {`// Default duration: 5000ms (5 seconds)
// Quick notifications: 2000-3000ms
// Standard: 4000-6000ms
// Important/Error: 6000-10000ms
// Persistent: omit duration (manual dismiss only)`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium text-green-400">
            4. Add Toaster to your app:
          </h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {`import { Toaster } from "@/components/primitives/toast";

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
};
