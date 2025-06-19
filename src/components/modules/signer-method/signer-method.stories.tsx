import type { Meta, StoryObj } from "@storybook/react";
import { SignerMethod } from "./signer-method";

const meta: Meta<typeof SignerMethod> = {
  title: "Modules/SignerMethod",
  component: SignerMethod,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: { type: "select" },
      options: ["google", "discord", "SMS", "passkey", "wallet"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Gmail: Story = {
  args: {
    kind: "google",
  },
};

export const Discord: Story = {
  args: {
    kind: "discord",
  },
};

export const SMS: Story = {
  args: {
    kind: "SMS",
  },
};

export const Passkey: Story = {
  args: {
    kind: "passkey",
  },
};

export const Wallet: Story = {
  args: {
    kind: "wallet",
  },
};

export const Argent: Story = {
  args: {
    kind: "argent",
  },
};

export const Phantom: Story = {
  args: {
    kind: "phantom",
  },
};

export const MetaMask: Story = {
  args: {
    kind: "metamask",
  },
};

export const Rabby: Story = {
  args: {
    kind: "rabby",
  },
};

export const WalletConnect: Story = {
  args: {
    kind: "walletconnect",
  },
};

	export const AllMethods: Story = {
  render: () => (
    <div className="space-y-4">
      <SignerMethod kind="google" onClick={() => {}} />
      <SignerMethod kind="discord" onClick={() => {}} />
      <SignerMethod kind="SMS" onClick={() => {}} />
      <SignerMethod kind="passkey" onClick={() => {}} />
      <SignerMethod kind="wallet" onClick={() => {}} />
      <SignerMethod kind="argent" onClick={() => {}} />
      <SignerMethod kind="phantom" onClick={() => {}} />
      <SignerMethod kind="metamask" onClick={() => {}} />
      <SignerMethod kind="rabby" onClick={() => {}} />
      <SignerMethod kind="walletconnect" onClick={() => {}} />
    </div>
  ),
};
