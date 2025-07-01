import type { Meta, StoryObj } from "@storybook/react";
import {
  AchievementToast,
  NetworkSwitchToast,
  ErrorToast,
  TransactionNotification,
} from "@/components/primitives/toast/specialized-toasts";
import { ToastProvider, ToastViewport } from "@/components/primitives/toast";
import { StarknetIcon } from "@/components/icons/brand";

const meta: Meta = {
  title: "Components/Toast Components/Showcase",
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
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const AllToastTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Achievement Toasts</h3>
          <div className="space-y-2">
            <AchievementToast
              title="Pacifist Path"
              subtitle="Earned!"
              xpAmount={100}
              progress={66.7}
              isDraft={false}
            />
            <AchievementToast
              title="Diamonds"
              subtitle="Earned!"
              xpAmount={100}
              progress={16.7}
              isDraft={true}
            />
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Network Switch Toasts</h3>
          <div className="space-y-2">
            <NetworkSwitchToast
              networkName="Starknet Mainnet"
              networkIcon={<StarknetIcon size="default" />}
            />
            <NetworkSwitchToast
              networkName="Nums Chain"
              networkIcon={<div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">N</div>}
            />
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Error Toast</h3>
          <ErrorToast message="Execution Error" progress={66.7} />
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Transaction Notifications</h3>
          <div className="space-y-2">
            <TransactionNotification
              status="confirming"
              isExpanded={true}
              label="New Game"
              progress={66.7}
            />
            <TransactionNotification
              status="confirmed"
              isExpanded={true}
              progress={100}
            />
            <div className="flex gap-2">
              <TransactionNotification status="confirming" isExpanded={false} />
              <TransactionNotification status="confirmed" isExpanded={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ToastStack: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-4">
      <h3 className="text-white text-lg font-semibold mb-2">Toast Stack Simulation</h3>
      <div className="space-y-3">
        <AchievementToast
          title="Quest Complete"
          subtitle="Earned!"
          xpAmount={150}
          progress={100}
          isDraft={false}
        />
        <NetworkSwitchToast
          networkName="Ethereum Mainnet"
          networkIcon={<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">E</div>}
        />
        <TransactionNotification
          status="confirming"
          isExpanded={true}
          label="Token Swap"
          progress={45}
        />
        <ErrorToast message="Network Timeout" progress={30} />
      </div>
    </div>
  ),
};