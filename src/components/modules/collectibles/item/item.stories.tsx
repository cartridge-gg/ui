import type { Meta, StoryObj } from "@storybook/react";
import { CollectibleItem } from "./item";

const meta: Meta<typeof CollectibleItem> = {
  title: "Modules/Collectibles/Item",
  component: CollectibleItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    owner: "shinobi",
    quantity: 1,
  },
};

export default meta;
type Story = StoryObj<typeof CollectibleItem>;

export const Default: Story = {};

export const Listed: Story = {
  args: {
    owner: "shinobi",
    quantity: 1,
    price: "$24",
    expiration: "1mo",
  },
};
