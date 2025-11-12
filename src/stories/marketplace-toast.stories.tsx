import type { Meta, StoryObj } from "@storybook/react";
import { MarketplaceToast } from "@/components/primitives/toast/specialized-toasts";
import { ToastProvider, ToastViewport } from "@/components/primitives/toast";

const meta: Meta<typeof MarketplaceToast> = {
  title: "Primitives/Toast/Marketplace Toast",
  component: MarketplaceToast,
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
  args: {
    showClose: true,
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
    itemName: { control: "text" },
    itemImage: { control: "text" },
    action: {
      control: "select",
      options: ["Purchased!", "Sold!"],
    },
    progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export default meta;

type Story = StoryObj<typeof MarketplaceToast>;

export const Purchased: Story = {
  args: {
    itemName: "Adventurer #3526",
    itemImage: "https://picsum.photos/seed/adventurer/200/200",
    action: "Purchased!",
    progress: 100,
  },
};

export const Sold: Story = {
  args: {
    itemName: "Cosmic Explorer",
    itemImage: "https://picsum.photos/seed/cosmic/200/200",
    action: "Sold!",
    progress: 66.7,
  },
};

export const LongItemName: Story = {
  args: {
    itemName: "Super Rare Legendary Golden Dragon Sword of Ultimate Power",
    itemImage: "https://picsum.photos/seed/sword/200/200",
    action: "Purchased!",
    progress: 85,
  },
};
