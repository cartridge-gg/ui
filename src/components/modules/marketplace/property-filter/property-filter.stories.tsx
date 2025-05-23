import type { Meta, StoryObj } from "@storybook/react";
import { PropertyFilter } from "./property-filter";

const meta: Meta<typeof PropertyFilter> = {
  title: "Modules/Marketplace/Property Filter",
  component: PropertyFilter,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    label: "Property Name",
    count: 100,
  },
};

export default meta;
type Story = StoryObj<typeof PropertyFilter>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-px">
        <PropertyFilter label="Property Name" count={100} />
        <PropertyFilter label="Property Name" count={100} value={true} />
        <PropertyFilter label="Property Name" count={100} />
        <PropertyFilter label="Property Name" count={100} value={true} />
        <PropertyFilter label="Property Name" count={100} />
      </div>
    );
  }
};

export const Unselected: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    value: true,
  },
};