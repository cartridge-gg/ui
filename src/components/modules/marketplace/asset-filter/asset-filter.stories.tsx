import type { Meta, StoryObj } from "@storybook/react";
import { AssetFilter } from "./asset-filter";

const meta: Meta<typeof AssetFilter> = {
  title: "Modules/Marketplace/Asset Filter",
  component: AssetFilter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof AssetFilter>;

export const Default: Story = {};