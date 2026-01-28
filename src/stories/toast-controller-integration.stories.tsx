import { useState, useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/primitives/button";
import { useToast } from "@/components/primitives/toast/use-toast";
import { Toaster } from "@/components/primitives/toast/toaster";
import { ControllerToaster } from "@/components/primitives/toast/controller-toaster";
import { showMarketplaceToast } from "@/components/primitives/toast/specialized-toasts";

const meta: Meta = {
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
      }, 100);
    },
    [isLoading],
  );

  const showMarketplacePurchase = () => {
    showToastWithDebounce("purchase", () => {
      toast(
        showMarketplaceToast({
          title: "Purchased",
          collectionName: "Beasts",
          items: ["Beast #111"],
          images: [
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x046da8955829adf2bda310099a0063451923f02e648cf25a1203aac6335cf0e4/0x00000000000000000000000000000000000000000000000000000000000105de/image",
          ],
          color: "#33FF33",
        }),
      );
    });
  };

  const showMarketplaceSentToken = () => {
    showToastWithDebounce("sentToken", () => {
      toast(
        showMarketplaceToast({
          title: "Sent",
          collectionName: "LORDS",
          items: ["500 LORDS"],
          images: [
            "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
          ],
        }),
      );
    });
  };

  const showSuccess = () => {
    showToastWithDebounce("success", () => {
      window.postMessage(
        {
          toast: {
            title: "Purchase completed successfully!",
            duration: 10000,
            type: "success",
            dismissible: true,
            id: 1,
          },
        },
        "*",
      );
    });
  };

  const showSuccessLonger = () => {
    showToastWithDebounce("successLonger", () => {
      window.postMessage(
        {
          toast: {
            title: "Listing transaction submitted successfully!",
            duration: 10000,
            type: "success",
            dismissible: true,
            id: 1,
          },
        },
        "*",
      );
    });
  };

  const showError = () => {
    showToastWithDebounce("error", () => {
      window.postMessage(
        {
          toast: {
            title: "Failed to purchase asset(s)",
            duration: 10000,
            type: "error",
            dismissible: true,
            id: 1,
          },
        },
        "*",
      );
    });
  };

  return (
    <div className="space-y-4">
      <div className="text-white text-lg font-semibold mb-4">
        Controller Toast Integration
      </div>

      <div className="space-y-2">
        <h3 className="text-white text-sm font-medium">
          Simulate Controller events
        </h3>
        <Button
          onClick={showMarketplacePurchase}
          className="w-full"
          disabled={isLoading.purchase}
        >
          {isLoading.purchase ? "Loading..." : "Marketplace Purchase"}
        </Button>
        <Button
          onClick={showMarketplaceSentToken}
          className="w-full"
          disabled={isLoading.sentToken}
        >
          {isLoading.sentToken ? "Loading..." : "Marketplace Sent Token"}
        </Button>
        <Button
          onClick={showSuccess}
          className="w-full"
          disabled={isLoading.success}
        >
          {isLoading.success ? "Loading..." : "Success"}
        </Button>
        <Button
          onClick={showSuccessLonger}
          className="w-full"
          disabled={isLoading.successLonger}
        >
          {isLoading.successLonger ? "Loading..." : "Success (longer message)"}
        </Button>
        <Button
          onClick={showError}
          className="w-full"
          disabled={isLoading.error}
        >
          {isLoading.error ? "Loading..." : "Error"}
        </Button>
      </div>

      <ControllerToaster />
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
      <h2 className="text-lg font-semibold">
        How integrade Controller toasts in your app:
      </h2>

      <div className="space-y-3 text-sm">
        <div>
          <h3 className="font-medium text-green-400">
            1. Just add the controller toaster component to your game:
          </h3>
          <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">
            {`import { ControllerToaster } from "@cartridge/ui";

function App() {
  return (
    <div>
      {/* Your app content */}
      <ControllerToaster />
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
};
