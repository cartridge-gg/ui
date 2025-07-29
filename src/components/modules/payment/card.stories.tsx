import type { Meta, StoryObj } from "@storybook/react";
import { PaymentCard } from "./card";
import {
  ControllerColorIcon,
  CreditCardIcon,
  StarknetColorIcon,
  GoogleColorIcon,
  PhantomColorIcon,
  ArgentColorIcon,
  SolanaIcon,
  StarknetIcon,
  RabbyColorIcon,
  EthereumIcon,
} from "@/components/icons";

const meta = {
  title: "Modules/Payment/Card",
  component: PaymentCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    text: {
      description: "Payment method text",
      control: { type: "text" },
    },
    icon: {
      description: "Payment method icon",
      control: { type: "object" },
    },
    network: {
      description: "Network text",
      control: { type: "text" },
    },
    networkIcon: {
      description: "Network icon",
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof PaymentCard>;

export default meta;
type Story = StoryObj<typeof PaymentCard>;

export const Controller: Story = {
  args: {
    text: "Controller",
    icon: <ControllerColorIcon />,
  },
};

export const CreditCard: Story = {
  args: {
    text: "Credit Card",
    icon: <CreditCardIcon variant="solid" />,
  },
};

export const Starknet: Story = {
  args: {
    text: "Starknet",
    icon: <StarknetColorIcon />,
  },
};

export const Google: Story = {
  args: {
    text: "Google",
    icon: <GoogleColorIcon />,
  },
};

export const PhantomWallet: Story = {
  args: {
    text: "Phantom",
    icon: <PhantomColorIcon />,
    network: "Solana",
    networkIcon: <SolanaIcon />,
  },
};

export const ReadyWallet: Story = {
  args: {
    text: "Ready",
    icon: <ArgentColorIcon />,
    network: "Starknet",
    networkIcon: <StarknetIcon />,
  },
};

export const RabbyWallet: Story = {
  args: {
    text: "Rabby",
    icon: <RabbyColorIcon />,
    network: "Ethereum",
    networkIcon: <EthereumIcon />,
  },
};
