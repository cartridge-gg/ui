import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/primitives/button";
import { useToast } from "@/components/primitives/use-toast";
import { Toaster } from "@/components/primitives/toaster";
import {
  showAchievementToast,
  showNetworkSwitchToast,
  showErrorToast,
  showTransactionToast,
} from "@/components/primitives/toast/specialized-toasts";
import { StarknetIcon } from "@/components/icons/brand";

const meta: Meta = {
  title: "Components/Toast Components/Integration Examples",
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

  const showAchievement = () => {
    toast(showAchievementToast({
      title: "Pacifist Path",
      subtitle: "Earned!",
      xpAmount: 100,
      progress: 66.7,
      isDraft: false,
    }));
  };

  const showDraftAchievement = () => {
    toast(showAchievementToast({
      title: "Diamonds",
      subtitle: "Earned!",
      xpAmount: 100,
      progress: 16.7,
      isDraft: true,
    }));
  };

  const showNetworkSwitch = () => {
    toast(showNetworkSwitchToast({
      networkName: "Starknet Mainnet",
      networkIcon: <StarknetIcon size="default" />,
    }));
  };

  const showError = () => {
    toast(showErrorToast({
      message: "Execution Error",
      progress: 66.7,
    }));
  };

  const showTransaction = () => {
    toast(showTransactionToast({
      status: "confirming",
      isExpanded: true,
      label: "New Game",
      progress: 66.7,
    }));
  };

  const showConfirmedTransaction = () => {
    toast(showTransactionToast({
      status: "confirmed",
      isExpanded: true,
      label: "Token Swap",
      progress: 100,
    }));
  };

  const showCollapsedTransaction = () => {
    toast(showTransactionToast({
      status: "confirming",
      isExpanded: false,
    }));
  };

  return (
    <div className="space-y-4">
      <div className="text-white text-lg font-semibold mb-4">
        Toast Integration with useToast Hook
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Achievement Toasts</h3>
          <Button onClick={showAchievement} className="w-full">
            Show Achievement
          </Button>
          <Button onClick={showDraftAchievement} className="w-full">
            Show Draft Achievement
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Network & Error</h3>
          <Button onClick={showNetworkSwitch} className="w-full">
            Show Network Switch
          </Button>
          <Button onClick={showError} className="w-full">
            Show Error
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Transaction Status</h3>
          <Button onClick={showTransaction} className="w-full">
            Show Confirming
          </Button>
          <Button onClick={showConfirmedTransaction} className="w-full">
            Show Confirmed
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-white text-sm font-medium">Collapsed View</h3>
          <Button onClick={showCollapsedTransaction} className="w-full">
            Show Collapsed
          </Button>
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-4">
        Click buttons to trigger specialized toasts using the existing useToast hook
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
          <h3 className="font-medium text-green-400">1. Import the convenience functions:</h3>
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
          <h3 className="font-medium text-green-400">2. Use with the existing useToast hook:</h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
{`const { toast } = useToast();

// Show achievement toast
toast(showAchievementToast({
  title: "Quest Complete",
  subtitle: "Earned!",
  xpAmount: 150,
  progress: 100,
  isDraft: false
}));

// Show network switch
toast(showNetworkSwitchToast({
  networkName: "Ethereum Mainnet",
  networkIcon: <EthereumIcon />
}));`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium text-green-400">3. Add Toaster to your app:</h3>
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