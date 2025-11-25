import type { Meta, StoryObj } from "@storybook/react";
import { NetworkSwitchToast } from "@/components/primitives/toast/specialized-toasts";
import { ToastProvider, ToastViewport } from "@/components/primitives/toast";

const meta: Meta<typeof NetworkSwitchToast> = {
  title: "Primitives/Toast/Network Switch Toast",
  component: NetworkSwitchToast,
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
    networkName: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof NetworkSwitchToast>;

export const StarknetMainnet: Story = {
  args: {
    networkName: "Starknet Mainnet",
    networkIcon:
      "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/1b126320-367c-48ed-cf5a-ba7580e49600/logo",
  },
};

export const NumsChain: Story = {
  args: {
    networkName: "Nums Chain",
    networkIcon: "Nums", // Will show first letter "N"
  },
};

export const EthereumMainnet: Story = {
  args: {
    networkName: "Ethereum Mainnet",
    networkIcon: "Ethereum", // Will show first letter "E"
  },
};

export const CustomNetwork: Story = {
  args: {
    networkName: "Custom Network",
    networkIcon: "Custom", // Will show first letter "C"
  },
};

export const WithImageUrl: Story = {
  args: {
    networkName: "Polygon",
    networkIcon: "https://cryptologos.cc/logos/polygon-matic-logo.png", // Will show image from URL
  },
};

export const WithSingleLetter: Story = {
  args: {
    networkName: "Avalanche",
    networkIcon: "A", // Will show single letter "A"
  },
};
