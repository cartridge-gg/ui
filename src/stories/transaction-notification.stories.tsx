import type { Meta, StoryObj } from "@storybook/react";
import { TransactionNotification } from "@/components/primitives/toast/specialized-toasts";
import { ToastProvider, ToastViewport } from "@/components/primitives/toast";

const meta: Meta<typeof TransactionNotification> = {
  title: "Primitives/Toast/Transaction Notification",
  component: TransactionNotification,
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
  argTypes: {
    status: {
      control: "select",
      options: ["confirming", "confirmed"],
    },
    isExpanded: { control: "boolean" },
    label: { control: "text" },
    progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export default meta;

type Story = StoryObj<typeof TransactionNotification>;

export const ConfirmingExpanded: Story = {
  args: {
    status: "confirming",
    isExpanded: true,
    label: "New Game",
    progress: 66.7,
  },
};

export const ConfirmedExpanded: Story = {
  args: {
    status: "confirmed",
    isExpanded: true,
    progress: 100,
  },
};

export const ConfirmingCollapsed: Story = {
  args: {
    status: "confirming",
    isExpanded: false,
  },
};

export const ConfirmedCollapsed: Story = {
  args: {
    status: "confirmed",
    isExpanded: false,
  },
};

export const SwapTransaction: Story = {
  args: {
    status: "confirming",
    isExpanded: true,
    label: "Token Swap",
    progress: 45,
  },
};

export const TransferTransaction: Story = {
  args: {
    status: "confirmed",
    isExpanded: true,
    label: "Transfer",
    progress: 100,
  },
};