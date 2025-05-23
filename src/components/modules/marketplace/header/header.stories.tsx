import type { Meta, StoryObj } from "@storybook/react";
import { MarketplaceHeader } from "./header";
import { MarketplaceHeaderReset } from "../header-reset";

const meta: Meta<typeof MarketplaceHeader> = {
  title: "Modules/Marketplace/Header",
  component: MarketplaceHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof MarketplaceHeader>;

export const Default: Story = {
  render: () => (
    <MarketplaceHeader label="Properties" />
  ),
};

export const Reset: Story = {
  render: () => (
    <MarketplaceHeader label="Properties">
      <MarketplaceHeaderReset />
    </MarketplaceHeader>
  ),
};