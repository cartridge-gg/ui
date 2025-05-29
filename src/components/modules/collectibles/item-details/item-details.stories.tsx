import type { Meta, StoryObj } from "@storybook/react";
import { CollectibleItemDetails } from "./item-details";

const meta: Meta<typeof CollectibleItemDetails> = {
  title: "Modules/Collectibles/Item Details",
  component: CollectibleItemDetails,
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
type Story = StoryObj<typeof CollectibleItemDetails>;

export const Default: Story = {};

export const Listed: Story = {
  args: {
    owner: "shinobi",
    quantity: 1,
    price: "$24",
    expiration: "1mo",
  },
};
