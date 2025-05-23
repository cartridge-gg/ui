import type { Meta, StoryObj } from "@storybook/react";
import { RadialToggle } from "./radial-toggle";

const meta: Meta<typeof RadialToggle> = {
  title: "Modules/Marketplace/Radial Toggle",
  component: RadialToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof RadialToggle>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-3">
      <RadialToggle active />
      <RadialToggle />
    </div>
  ),
};
