import type { Meta, StoryObj } from "@storybook/react";
import { SignerPendingCard } from "./signer-pending-card";

const meta: Meta<typeof SignerPendingCard> = {
  title: "Modules/SignerPendingCard",
  component: SignerPendingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: { type: "select" },
      options: [
        "google",
        "discord",
        "SMS",
        "passkey",
        "metamask",
        "argent",
        "rabby",
        "phantom",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GoogleSuccess: Story = {
  args: {
    kind: "google",
  },
};

export const DiscordSuccess: Story = {
  args: {
    kind: "discord",
  },
};

export const SMSSuccess: Story = {
  args: {
    kind: "SMS",
  },
};

export const PasskeySuccess: Story = {
  args: {
    kind: "passkey",
  },
};

export const MetamaskSuccess: Story = {
  args: {
    kind: "metamask",
  },
};

export const ArgentSuccess: Story = {
  args: {
    kind: "argent",
  },
};

export const RabbySuccess: Story = {
  args: {
    kind: "rabby",
  },
};

export const PhantomSuccess: Story = {
  args: {
    kind: "phantom",
  },
};

export const GoogleInProgress: Story = {
  args: {
    kind: "google",
    inProgress: true,
  },
};

export const DiscordInProgress: Story = {
  args: {
    kind: "discord",
    inProgress: true,
  },
};

export const SMSInProgress: Story = {
  args: {
    kind: "SMS",
    inProgress: true,
  },
};

export const PasskeyInProgress: Story = {
  args: {
    kind: "passkey",
    inProgress: true,
  },
};

export const MetamaskInProgress: Story = {
  args: {
    kind: "metamask",
    inProgress: true,
  },
};

export const ArgentInProgress: Story = {
  args: {
    kind: "argent",
    inProgress: true,
  },
};

export const RabbyInProgress: Story = {
  args: {
    kind: "rabby",
    inProgress: true,
  },
};

export const PhantomInProgress: Story = {
  args: {
    kind: "phantom",
    inProgress: true,
  },
};

export const GoogleError: Story = {
  args: {
    kind: "google",
    error: "Error connecting to Google",
  },
};

export const AllMethods: Story = {
  render: () => (
    <div className="space-y-4">
      <SignerPendingCard kind="google" inProgress={false} />
      <SignerPendingCard kind="discord" inProgress={false} />
      <SignerPendingCard kind="SMS" inProgress={false} />
      <SignerPendingCard kind="passkey" inProgress={false} />
      <SignerPendingCard kind="metamask" inProgress={false} />
      <SignerPendingCard kind="argent" inProgress={false} />
      <SignerPendingCard kind="rabby" inProgress={false} />
      <SignerPendingCard kind="phantom" inProgress={false} />
    </div>
  ),
};
