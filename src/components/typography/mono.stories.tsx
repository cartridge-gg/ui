import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/components";

const meta: Meta<typeof Text> = {
  title: "Typography/Mono",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Regular14px: Story = {
  args: {
    className: "font-mono text-sm",
  },
};

export const Regular16px: Story = {
  args: {
    className: "font-mono",
  },
};

export const Medium16px: Story = {
  args: {
    className: "font-mono font-medium",
  },
};

export const SemiBold16px: Story = {
  args: {
    className: "font-mono font-semibold",
  },
};
