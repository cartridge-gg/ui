import type { Meta, StoryObj } from "@storybook/react";
import { RadialItem } from "./radial-item";

const meta: Meta<typeof RadialItem> = {
  title: "Modules/Marketplace/Radial Item",
  component: RadialItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof RadialItem>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <RadialItem label="Buy Now" active />
      <RadialItem label="Buy Now" />
    </div>
  ),
};
