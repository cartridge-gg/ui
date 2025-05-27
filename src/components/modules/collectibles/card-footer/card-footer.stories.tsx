import type { Meta, StoryObj } from "@storybook/react";
import { CollectibleCardFooter } from "@/index";

const meta: Meta<typeof CollectibleCardFooter> = {
  title: "Modules/Collectibles/Card Footer",
  component: CollectibleCardFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    price: "$2",
    lastSale: "$2",
  },
};

export default meta;
type Story = StoryObj<typeof CollectibleCardFooter>;

export const Default: Story = {};

export const PriceLess: Story = {
  args: {
    price: undefined,
    lastSale: "$2",
  },
};

export const SaleLess: Story = {
  args: {
    price: "$2",
    lastSale: undefined,
  },
};
